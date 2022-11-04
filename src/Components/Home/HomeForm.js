import React from "react";

/* STATELESS CHILD COMPONENT */
const HomeForm = ({ data }) => {
  return (
    <div>
      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <div>
              <span>
                {/* Using getter for lesson Object to display name */}
                <li key={item.id}>{item.get("name")}</li>{" "}
              </span>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomeForm;
