import React from "react";

const SuccessMessage = ({ message, buttonText }) => {
  return (
    <div>
      <div>
        <div>{message}</div>
        <div>Icon</div>
        <div>Button</div>
      </div>
    </div>
  );
};

export default SuccessMessage;
