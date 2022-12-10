import React, { useState } from "react";
import "../../App.css";
import { Button, Input, Tooltip } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import Parse from "parse";
import { useParseQuery } from "@parse/react";
import { useNavigate } from "react-router-dom";


export const LiveChat = (props) => {
  // State variable to hold message text input
  const [messageInput, setMessageInput] = useState("");

  // Create parse query for live querying using useParseQuery hook
  const parseQuery = new Parse.Query("Message");
  // Get messages that involve both nicknames
  parseQuery.containedIn("sender", [
    props.senderNicknameId,
    props.receiverNicknameId,
  ]);

  parseQuery.containedIn("receiver", [
    props.senderNicknameId,
    props.receiverNicknameId,
  ]);
  
  // Set results ordering
  parseQuery.ascending("createdAt");
  // Include nickname fields, to enable name getting on list
  parseQuery.includeAll();

  // Declare hook and variables to hold hook responses
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery, {
      enableLocalDatastore: true, // Enables cache in local datastore (default: true)
      enableLiveQuery: true, // Enables live query for real-time update (default: true)
    });


  const navigate = useNavigate();
  const changeReceiver = () => {
    console.log("in changeReceiver");
    window.location.reload();
  
  };

  // Message sender handler
  const sendMessage = async () => {
    let senderNicknameObject = null;
    let receiverNicknameObject = null;
    try {
      const messageText = messageInput;

      // Get sender and receiver nickname Parse objects
      const senderNicknameObjectQuery = new Parse.Query("User");
      console.log("props.senderNicknameId: ", props.senderNicknameId);
      senderNicknameObjectQuery.equalTo("objectId", props.senderNicknameId);
      const senderParseQueryResult = await senderNicknameObjectQuery.find();
      senderNicknameObject = senderParseQueryResult[0];
      console.log("senderNicknameObject: ", senderNicknameObject);


      const receiverNicknameObjectQuery = new Parse.Query("User");
      console.log("props.receiverNicknameId: ", props.receiverNicknameId);
      receiverNicknameObjectQuery.equalTo("objectId", props.receiverNicknameId);
      let receiverParseQueryResult = await receiverNicknameObjectQuery.find();
      receiverNicknameObject = receiverParseQueryResult[0];

      // Create new Message object and save it
      let Message = new Parse.Object("Message");
      Message.set("text", messageText);
      Message.set("sender", senderNicknameObject);
      Message.set("receiver", receiverNicknameObject);
      Message.save();
      console.log("Message: ", Message);

      // Clear input
      setMessageInput("");
    } catch (error) {
      alert(error);
    }
  };

  // Helper to format createdAt value on Message
  const formatDateToTime = (date) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  if (Parse.User.current().attributes.accountType == "user"){
    return (
      <div>
        <div className="flex_between">
          <h2 className="list_heading">{`${props.senderNicknameName} sending, ${props.receiverNicknameName} receiving!`}</h2>
          <Tooltip title="Reload">
            <Button
              onClick={reload}
              type="primary"
              shape="circle"
              icon={<SyncOutlined />}
            />
          </Tooltip>
        </div>
        {results && (
          <div className="messages">
            {results
              .sort((a, b) => a.get("createdAt") > b.get("createdAt"))
              .map((result) => (
                <div
                  key={result.id}
                  className={
                    result.get("sender").id === props.senderNicknameId
                      ? "message_sent"
                      : "message_received"
                  }
                >
                  <p className="message_bubble">{result.get("text")}</p>
                  <p className="message_time">
                    {formatDateToTime(result.get("createdAt"))}
                  </p>
                  <p className="message_name">
                    {result.get("sender").get("name")}
                  </p>
                </div>
              ))}
          </div>
        )}
        <div className="new_message">
          <h2 className="new_message_title">New message</h2>
          <Input
            className="form_input"
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
            placeholder={"Your message..."}
            size="large"
          />
          <Button
            type="primary"
            className="form_button"
            color={"#208AEC"}
            size={"large"}
            onClick={sendMessage}
          >
            Send message
          </Button>
        </div>
        <div>
          {isLoading && <p>{"Loading…"}</p>}
          {isSyncing && <p>{"Syncing…"}</p>}
          {isLive ? <p>{"Status: Live"}</p> : <p>{"Status: Offline"}</p>}
          {error && <p>{error.message}</p>}
          {count && <p>{`Count: ${count}`}</p>}
        </div>

      </div>
    );
  }
  else{
    return (
      <div>
        <div className="flex_between">
          <h2 className="list_heading">{`${props.senderNicknameName} sending, ${props.receiverNicknameName} receiving!`}</h2>
          <Tooltip title="Reload">
            <Button
              onClick={reload}
              type="primary"
              shape="circle"
              icon={<SyncOutlined />}
            />
          </Tooltip>
        </div>
        {results && (
          <div className="messages">
            {results
              .sort((a, b) => a.get("createdAt") > b.get("createdAt"))
              .map((result) => (
                <div
                  key={result.id}
                  className={
                    result.get("sender").id === props.senderNicknameId
                      ? "message_sent"
                      : "message_received"
                  }
                >
                  <p className="message_bubble">{result.get("text")}</p>
                  <p className="message_time">
                    {formatDateToTime(result.get("createdAt"))}
                  </p>
                  <p className="message_name">
                    {result.get("sender").get("name")}
                  </p>
                </div>
              ))}
          </div>
        )}
        <div className="new_message">
          <h2 className="new_message_title">New message</h2>
          <Input
            className="form_input"
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
            placeholder={"Your message..."}
            size="large"
          />
          <Button
            type="primary"
            className="form_button"
            color={"#208AEC"}
            size={"large"}
            onClick={sendMessage}
          >
            Send message
          </Button>
        </div>
        <br></br>
        <Button
            type="primary"
            className="form_button"
            color={"#208AEC"}
            size={"large"}
            onClick={changeReceiver}
          >
            Change Receiver
        </Button>
        <br></br>
        <div>
          {isLoading && <p>{"Loading…"}</p>}
          {isSyncing && <p>{"Syncing…"}</p>}
          {isLive ? <p>{"Status: Live"}</p> : <p>{"Status: Offline"}</p>}
          {error && <p>{error.message}</p>}
          {count && <p>{`Count: ${count}`}</p>}
        </div>

      </div>
    );
  }
};