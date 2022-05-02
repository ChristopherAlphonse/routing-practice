import React from "react";
import { useParams } from "react-router-dom";

const Parameters = (props) => {
  const { numeric, fontColor, backgroundEffect } = useParams();

  return (
    <div>
      {isNaN(numeric) ? (
        <p
          style={
            fontColor
              ? { color: fontColor, backgroundColor: backgroundEffect }
              : null
          }
        >
          Your Word is: {numeric}
        </p>
      ) : (
        <p>Your number : {numeric}</p>
      )}
    </div>
  );
};

export default Parameters;
