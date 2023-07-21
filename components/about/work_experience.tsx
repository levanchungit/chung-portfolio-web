import { listEducation, listExperience, listSkills } from "@/global/constants";

type Props = {
  
};

export default function WorkExperience({}: Props) {
  let lineNumber = 1;
  let lineOffset = 0;
  let lineOffset2 = 0;
  return (
    <>
      <p>
        <span className="text_number">{lineNumber + 8}</span>
        <span className="dot">......</span>
        <span className="text-orange">
          workExperience <span>()</span>{" "}
        </span>
        {"{"}
        <p className="text">
          <span className="text_number">{lineNumber + 9}</span>
          <span className="dot">.........</span>
          <span className="text-main">return </span>
          <span className="text-moon_mist">{"["}</span>
        </p>
      </p>
      {listExperience.map((item, index) => {
        let numPair = Object.keys(item).length;
        let startLine = lineNumber + 10 + index * (numPair + 2);
        lineOffset += numPair + 2;

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

      <p>
        <span className="text_number">{lineNumber + 10 + lineOffset}</span>
        <span className="dot">.........</span>
        <span className="text-moon_mist">{"]"}</span>
      </p>
      <p>
        <span className="text_number">{lineNumber + 11 + lineOffset}</span>
        <span className="dot">......</span>
        <span>{"}"}</span>,
      </p>
    </>
  );
}