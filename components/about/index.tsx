import { listEducation, listExperience, listSkills } from "@/global/constants";

type Props = {};

export default function About({}: Props) {
  let lineNumber = 1;
  let lineOffset = 0;
  return (
    <div className="flex w-full min-h-screen px-12 bg-about bg-cover bg-center overflow-hidden md:flex-row md:justify-start md:px-10">
      <div className="flex flex-1 min-h-screen gap-4 relative">
        <div className="w-0.5 h-full bg-main rounded-full relative top-[2%]">
          <div className="line"></div>
        </div>
        <div className="flex flex-1 flex-col top-[1%]">
          <h1 className="text-18 text">About/&gt;</h1>

          <div className="flex flex-col gap-2 absolute">
            <p className="text">
              <span className="text_number">{lineNumber}</span>
              <span className="text-main">function</span>{" "}
              <span className="text-moon_mist">createLeVanChung() &#123;</span>
            </p>

            <p className="text">
              <span className="text_number">{lineNumber + 1}</span>
              <span className="dot">...</span>
              <span className="text-comment">{"//"} I can, because I did.</span>
            </p>

            <p className="text">
              <span className="text_number">{lineNumber + 2}</span>
              <span className="dot">...</span>
              <span className="text-comment">
                {"//"} My vast variety of skills is continuously expanding.
              </span>
            </p>

            <p className="text">
              <span className="text_number">{lineNumber + 3}</span>
              <span className="dot">...</span>
              <span className="text-main">return </span>
              <span className="text-moon_mist">{"{"}</span>
            </p>

            <div className="text">
              <p>
                <span className="text_number">{lineNumber + 4}</span>
                <span className="dot">......</span>
                name ={" "}
                <span className="text-green font-normal">
                  &quot;Le Van Chung&quot;
                </span>
                ,
              </p>
              <p>
                <span className="text_number">{lineNumber + 5}</span>
                <span className="dot">......</span>
                dayOfBirth ={" "}
                <span className="text-green font-normal">
                  &quot;2003-08-08&quot;
                </span>
                ,
              </p>
              <p>
                <span className="text_number">{lineNumber + 6}</span>
                <span className="dot">......</span>
                email ={" "}
                <span className="text-green font-normal">
                  &quot;levanchung.it@gmail.com&quot;
                </span>
                ,
              </p>
              <p>
                <span className="text_number">{lineNumber + 7}</span>
                <span className="dot">......</span>
                phone ={" "}
                <span className="text-green font-normal">
                  &quot;0378484047&quot;
                </span>
                ,
              </p>
              {/* WORK EXPERIENCE */}
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

                    <span className="text_number">
                      {startLine + numPair + 1}
                    </span>
                    <span className="dot">............</span>
                    <span className="text-moon_mist">{"},"}</span>
                  </p>
                );
              })}

              <p>
                <span className="text_number">
                  {lineNumber + 10 + lineOffset}
                </span>
                <span className="dot">.........</span>
                <span className="text-moon_mist">{"]"}</span>
              </p>
              <p>
                <span className="text_number">
                  {lineNumber + 11 + lineOffset}
                </span>
                <span className="dot">......</span>
                <span>{"}"}</span>,
              </p>
              {/* EDUCATION */}
              <p>
                <span className="text_number">
                  {lineNumber + 12 + lineOffset}
                </span>
                <span className="dot">......</span>
                <span className="text-orange">
                  education <span>()</span>{" "}
                </span>
                {"{"}
              </p>
              <p className="text">
                <span className="text_number">
                  {lineNumber + 13 + lineOffset}
                </span>
                <span className="dot">.........</span>
                <span className="text-main">return </span>
                <span className="text-moon_mist">{"["}</span>
              </p>
              {listEducation.map((item, index) => {
                let numPair = Object.keys(item).length;
                let startLine =
                  lineNumber + 14 + lineOffset + index * (numPair + 2);
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

                    <span className="text_number">
                      {startLine + numPair + 1}
                    </span>
                    <span className="dot">............</span>
                    <span className="text-moon_mist">{"},"}</span>
                  </p>
                );
              })}

              <p>
                <span className="text_number">
                  {lineNumber + 14 + lineOffset}
                </span>
                <span className="dot">.........</span>
                <span className="text-moon_mist">{"]"}</span>
              </p>

              <p className="text">
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">.........</span>
                <span className="text-moon_mist">{"]"} </span>
              </p>
              <p>
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">......</span>
                <span>{"}"}</span>,
              </p>
              {/* SKILLS */}
              <p>
                <span className="text_number">{lineNumber + 10}</span>
                <span className="dot">......</span>
                <span className="text-orange">
                  skills <span>()</span>{" "}
                </span>
                {"{"}
              </p>
              <p className="text">
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
                <span className="dot">.........</span>
                <span className="text-moon_mist">{"]"} </span>
              </p>
              <p>
                <span className="dot">......</span>
                <span>{"}"}</span>,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
