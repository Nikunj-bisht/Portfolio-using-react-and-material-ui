import React, { useState } from "react";
import myimg from "../../assests/newImg.png";

export default function Profile(props) {
  const [renderText, setRenderText] = useState({
    first: "HELLO",
    second: "I am",
    third: "Nikunj",
  });
  function textHover(val) {
    // eslint-disable-next-line default-case
    switch (val) {
      case 1:
        setRenderText({ first: "About", second: "I am", third: "Nikunj" });
        break;

      case 2:
        setRenderText({ first: "HELLO", second: "Work", third: "Nikunj" });

        break;

      case 3:
        setRenderText({ first: "HELLO", second: "I am", third: "Contact" });

        break;
    }
  }
  return (
    <div style={{ flexDirection: "row", display: "flex", minHeight: "100%" }}>
      <div
        style={{
          flex: 0.5,
          backgroundColor: "black",
          alignItems: "center",
          minHeight: "100%",
          justifyContent: "center",textAlign:'center'
        }}
      >
        <h1
          onMouseLeave={() =>
            setRenderText({ first: "HELLO", second: "I am", third: "Nikunj" })
          }
          onMouseEnter={() => {
            textHover(1);
          }}
          style={{ color: "white", fontSize: 150 }}
        >
          {renderText.first}
        </h1>
        <h1
          onMouseLeave={() =>
            setRenderText({ first: "HELLO", second: "I am", third: "Nikunj" })
          }
          onMouseEnter={() => {
            textHover(2);
          }}
          style={{ color: "red", fontSize: 150 }}
        >
          {renderText.second}
        </h1>
        <h1
          onMouseLeave={() =>
            setRenderText({ first: "HELLO", second: "I am", third: "Nikunj" })
          }
          onMouseEnter={() => {
            textHover(3);
          }}
          style={{ color: "white", fontSize: 150 }}
        >
          {renderText.third}
        </h1>
      </div>
      <div style={{ flex: 0.5 }}>
        <img src={myimg} style={{backgroundColor:'black',width:'100%'}}></img>
      </div>
    </div>
  );
}
