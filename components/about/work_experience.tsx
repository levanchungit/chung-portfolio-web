import { listExperience } from "@/global/constants";
import { useCounter } from "../context";
type Props = {};

export default function WorkExperience({}: Props) {
  const { count } = useCounter();
  let lineNumber = count;
  let lineOffset = 0;
  return (
    <>
      <div>
        <p className="row">
          <span className="text_number">{lineNumber + 8}</span>
          <span className="dot">......</span>
          <span className="text-orange">
            workExperience <span>()</span>{" "}
          </span>
          {"{"}
        </p>
        <p className="text row">
          <span className="text_number">{lineNumber + 9}</span>
          <span className="dot">.........</span>
          <span className="text-main">return </span>
          <span className="text-moon_mist">{"["}</span>
        </p>
      </div>
      {listExperience.map((item, index) => {
        let numPair = Object.keys(item).length;
        let startLine = lineNumber + 10 + index * (numPair + 2);
        lineOffset += numPair + 2;

        return (
          <div className="text" key={index}>
            <p className="row">
              <span className="text_number">{startLine}</span>
              <span className="dot">............</span>
              <span className="text-moon_mist">{"{"}</span>
            </p>

            {Object.entries(item).map(([key, value], subIndex) => {
              let subLine = startLine + subIndex + 1;
              return (
                <p className="text row" key={subIndex}>
                  <span className="text_number ">{subLine}</span>
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

            <p className="row">
              <span className="text_number">{startLine + numPair + 1}</span>
              <span className="dot">............</span>
              <span className="text-moon_mist">{"},"}</span>
            </p>
          </div>
        );
      })}

      <div className="row">
        <span className="text_number">{lineNumber + 10 + lineOffset}</span>
        <span className="dot">.........</span>
        <span className="text-moon_mist">{"]"}</span>
      </div>
      <div className="row">
        <span className="text_number">{lineNumber + 11 + lineOffset}</span>
        <span className="dot">......</span>
        <span>{"}"}</span>,
      </div>
    </>
  );
}
