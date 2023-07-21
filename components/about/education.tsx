import { listEducation } from "@/global/constants";

type Props = {};

export default function Education({}: Props) {
  let lineNumber = 1;
  let lineOffset = 0;
  let lineOffset2 = 0;
  return (
    <>
      <p>
        <span className="text_number">{lineNumber + 12 + lineOffset}</span>
        <span className="dot">......</span>
        <span className="text-orange">
          education <span>()</span>{" "}
        </span>
        {"{"}
      </p>

      <p className="text">
        <span className="text_number">{lineNumber + 13 + lineOffset}</span>
        <span className="dot">.........</span>
        <span className="text-main">return </span>
        <span className="text-moon_mist">{"["}</span>
      </p>

      {listEducation.map((item, index) => {
        let numPair = Object.keys(item).length;
        let startLine = lineNumber + 14 + lineOffset + index * (numPair + 2);
        lineOffset2 += numPair + 2;
        return (
          <p className="text" key={index}>
            <span className="text_number">{startLine}</span>
            <span className="dot">............</span>
            <span className="text-moon_mist">{"{"}</span>

            {Object.entries(item).map(([key, value], subIndex) => {
              let subLine = startLine + subIndex + 1;
              return (
                <p className="text" key={subIndex}>
                  <span className="text_number">{subLine}</span>
                  <span className="dot">...............</span>
                  <span className="text-moon_mist">{key} : </span>
                  <span className="text-green font-normal">
                    {"'"}
                    {value}
                    {"'"}
                  </span>
                  ,
                </p>
              );
            })}

            <span className="text_number">{startLine + numPair + 1}</span>
            <span className="dot">............</span>
            <span className="text-moon_mist">{"},"}</span>
          </p>
        );
      })}

      <p className="text">
        <span className="text_number">
          {" "}
          {lineNumber + 14 + lineOffset2 + lineOffset}
        </span>
        <span className="dot">.........</span>
        <span className="text-moon_mist">{"]"} </span>
      </p>
      <p>
        <span className="text_number">
          {lineNumber + 15 + lineOffset2 + lineOffset}
        </span>
        <span className="dot">......</span>
        <span>{"}"}</span>,
      </p>
    </>
  );
}
