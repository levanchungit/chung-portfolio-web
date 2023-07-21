import { listSkills } from "@/global/constants";

type Props = {};

export default function Skills({}: Props) {
  let lineNumber = 1;
  let lineOffset = 0;
  let lineOffset2 = 0;
  return (
    <>
      <p>
        <span className="text_number">
          {lineNumber + 16 + lineOffset2 + lineOffset}
        </span>
        <span className="dot">......</span>
        <span className="text-orange">
          skills <span>()</span>{" "}
        </span>
        {"{"}
      </p>
      <p className="text">
        <span className="text_number">
          {lineNumber + 17 + lineOffset2 + lineOffset}
        </span>
        <span className="dot">.........</span>
        <span className="text-main">return </span>
        <span className="text-moon_mist">{"["} </span>
        <span className="text-moon_mist">
          {listSkills.map((item, index) => {
            return (
              <span key={index} className="text-green">
                {"'" + item + "'"}
                {index !== listSkills.length - 1 && (
                  <span className="text-moon_mist">, </span>
                )}
              </span>
            );
          })}
        </span>
      </p>
      <p className="text">
        <span className="text_number">
          {lineNumber + 18 + lineOffset2 + lineOffset}
        </span>
        <span className="dot">.........</span>
        <span className="text-moon_mist">{"]"} </span>
      </p>
      <p>
        <span className="text_number">
          {lineNumber + 18 + lineOffset2 + lineOffset}
        </span>
        <span className="dot">......</span>
        <span>{"}"}</span>,
      </p>
    </>
  );
}
