// import React, { useState } from "react";
// import "../../App.css";
// import { Button, Input } from "antd";
// import Parse from "parse";
// import { LiveChat } from "./LiveChat";

// export const ChatSetup = () => {
//   // State variables holding input values and results
//   const [senderNicknameInput, setSenderNicknameInput] = useState("");
//   const [senderNicknameId, setSenderNicknameId] = useState(null);
//   const [receiverNicknameInput, setReceiverNicknameInput] = useState("");
//   const [receiverNicknameId, setReceiverNicknameId] = useState(null);

//   // Create or retrieve Nickname objects and start LiveChat component
//   const startLiveChat = async () => {
    
//     const senderNicknameName = senderNicknameInput;
//     const receiverNicknameName = receiverNicknameInput;
//     // console.log("senderNicknameInput: ", senderNicknameInput);
//     // console.log("receiverNicknameInput: ", receiverNicknameInput);

//     // Check if user informed both nicknames
//     if (senderNicknameName === null || receiverNicknameName === null) {
//       console.log("did not include both sender and receiver");
//       alert("Please inform both sender and receiver nicknames!");
//       return false;
//     }

//     // Check if sender nickname already exists, if not create new parse object
//     let senderNicknameObject = null;
//     try {
//       const senderParseQuery = new Parse.Query("Nickname");
//       senderParseQuery.equalTo("name", senderNicknameName);
//       const senderParseQueryResult = await senderParseQuery.find();
//       if ( senderParseQueryResult.length !== 0 ) {
//         console.log("senderParseQueryResult: ", senderParseQueryResult);
//         senderNicknameObject = senderParseQueryResult[0];
//         console.log("senderNicknameObject: ", senderNicknameObject);
//       } else {
//         senderNicknameObject = new Parse.Object("Nickname");
//         // console.log("senderNicknameName: ", senderNicknameName);
//         senderNicknameObject.set("name", senderNicknameName);
//         senderNicknameObject = await senderNicknameObject.save();
//     }
//     } catch (error) {
//       alert(error);
//       return false;
//     }

//     // Check if receiver nickname already exists, if not create new parse object
//     let receiverNicknameObject = null;
//     try {
//       const receiverParseQuery = new Parse.Query("Nickname");
//       receiverParseQuery.equalTo("name", receiverNicknameName);
//       const receiverParseQueryResult = await receiverParseQuery.find();
//       if (
//         receiverParseQueryResult.length !== 0
//       ) {
//         receiverNicknameObject = receiverParseQueryResult[0];
//       } else {
//         receiverNicknameObject = new Parse.Object("Nickname");
//         receiverNicknameObject.set("name", receiverNicknameName);
//         receiverNicknameObject = await receiverNicknameObject.save();
//       }

//     } catch (error) {
//       alert(error);
//       return false;
//     }

//     // Set nickname objects ids, so live chat component is instantiated
//     // console.log("senderNicknameObject.id: ", senderNicknameObject.id);
//     // console.log("receiverNicknameObject.id: ", receiverNicknameObject.id);
//     setSenderNicknameId(senderNicknameObject.id);
//     setReceiverNicknameId(receiverNicknameObject.id);


//     return true;
//   };

//   return (
//     <div>
//       <div className="header">
//         <img
//           className="header_logo"
//           alt="Back4App Logo"
//           src={
//             "https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png"
//           }
//         />
//         <p className="header_text_bold">{"React on Back4App"}</p>
//         <p className="header_text">{"Order Updates Chat"}</p>
//       </div>
//       <div className="container">
//         {senderNicknameId === null && receiverNicknameId === null && (
//           <div>
//             <Input
//               className="form_input"
//               value={senderNicknameInput}
//               onChange={(event) => setSenderNicknameInput(event.target.value)}
//               placeholder={"Sender (Your) Nickname"}
//               size="large"
//             />
//             <Input
//               className="form_input"
//               value={receiverNicknameInput}
//               onChange={(event) => setReceiverNicknameInput(event.target.value)}
//               placeholder={"Receiver (Their) Nickname"}
//               size="large"
//             />
//             <Button
//               type="primary"
//               className="form_button"
//               color={"#208AEC"}
//               size={"large"}
//               onClick={startLiveChat}
//             >
//               Start live chat
//             </Button>
//           </div>
//         )}
//         {senderNicknameId !== null && receiverNicknameId !== null && (
//           <LiveChat
//             senderNicknameName={senderNicknameInput}
//             senderNicknameId={senderNicknameId}
//             receiverNicknameName={receiverNicknameInput}
//             receiverNicknameId={receiverNicknameId}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import "../../App.css";
import { Button, Input } from "antd";
import Parse from "parse";
import { LiveChat } from "./LiveChat";
import OrdersModule from "../Orders/Orders";

export const ChatSetup = () => {
  // State variables holding input values and results
  const [senderNicknameInput, setSenderNicknameInput] = useState("");
  const [senderNicknameId, setSenderNicknameId] = useState(null);
  const [receiverNicknameInput, setReceiverNicknameInput] = useState("");
  const [receiverNicknameId, setReceiverNicknameId] = useState(null);

  // console.log("Parse.User.current().attributes: ", Parse.User.current().id);

  // Create or retrieve Nickname objects and start LiveChat component
  const startLiveChat = async () => {
    
    console.log("Parse.User.current().id: ", Parse.User.current().id);
    // set the Sender as the currently signed in user
    setSenderNicknameId(Parse.User.current().id);
    setSenderNicknameInput(Parse.User.current().attributes.email);

    // if the user is not admin
    if (Parse.User.current().attributes.accountType == "user"){
      // make the receiver the Duncan Grille
      setReceiverNicknameId("0Q58LbrD6A");
      setReceiverNicknameInput("duncangrille@nd.edu");
    }
    // if the user has admin privileges (i.e. they are Duncan Grille workers)
    else {
      const receiverNicknameName = receiverNicknameInput;
      console.log("receiverNicknameInput: ", receiverNicknameInput);

      // // Check if user informed both nicknames
      if (receiverNicknameName === null) {
        console.log("did not include receiver");
        alert("Please inform receiver email!");
        return false;
      }

      // Check if receiver nickname already exists, if not create new parse object
      let receiverNicknameObject = null;
      try {
        const receiverParseQuery = new Parse.Query("User");
        receiverParseQuery.equalTo("email", receiverNicknameName);
        const receiverParseQueryResult = await receiverParseQuery.find();
        if (receiverParseQueryResult.length !== 0) {
          receiverNicknameObject = receiverParseQueryResult[0];
        } else {
          alert("User email is incorrect. Try again.");
          window.location.reload();
        }

      } catch (error) {
        alert(error);
        return false;
      }

      // Set nickname objects ids, so live chat component is instantiated
      console.log("receiverNicknameObject.id: ", receiverNicknameObject.id);
      setReceiverNicknameId(receiverNicknameObject.id);
    }
    return true;
  };

  // if the user does not have admin privileges, they can only chat with Duncan Grille
  if (Parse.User.current().attributes.accountType == "user"){
    return (
      <div>
        <div className="header">
          <img
            className="header_logo"
            alt="ND Logo"
            src={
              "https://i.pinimg.com/originals/5d/1e/55/5d1e55153ab599f66419a9eafe0a4587.png"
            }
          />
          <p className="header_text_bold">{"Order Updates Chat"}</p>
        </div>
        <div className="container">
          {senderNicknameId === null && receiverNicknameId === null && (
            <div>
              <Button
                type="primary"
                className="form_button"
                color={"#208AEC"}
                size={"large"}
                onClick={startLiveChat}
              >
                Start live chat
              </Button>
            </div>
          )}
          {senderNicknameId !== null && receiverNicknameId !== null && (
            <LiveChat
              senderNicknameName={senderNicknameInput}
              senderNicknameId={senderNicknameId}
              receiverNicknameName={receiverNicknameInput}
              receiverNicknameId={receiverNicknameId}
            />
          )}
        </div>
      </div>
    );
  }
  // if the user does have admin privileges (i.e. they are Duncan Grille worker), they can input the receiver
  else{
    return(
      <div>
        <div className="header">
          <img
            className="header_logo"
            alt="ND Logo"
            src={
              "https://i.pinimg.com/originals/5d/1e/55/5d1e55153ab599f66419a9eafe0a4587.png"
            }
          />
          <p className="header_text_bold">{"Order Updates Chat"}</p>
        </div>
        <OrdersModule/>
        <div className="container">
          {senderNicknameId === null && receiverNicknameId === null && (
            <div>
              <Input
                className="form_input"
                value={receiverNicknameInput}
                onChange={(event) => setReceiverNicknameInput(event.target.value)}
                placeholder={"Receiver (Their) Email"}
                size="large"
              />
              <Button
                type="primary"
                className="form_button"
                color={"#208AEC"}
                size={"large"}
                onClick={startLiveChat}
              >
                Start live chat
              </Button>
            </div>
          )}
          {senderNicknameId !== null && receiverNicknameId !== null && (
            <LiveChat
              senderNicknameName={senderNicknameInput}
              senderNicknameId={senderNicknameId}
              receiverNicknameName={receiverNicknameInput}
              receiverNicknameId={receiverNicknameId}
            />
          )}
        </div>
      </div>
    );
  }
};