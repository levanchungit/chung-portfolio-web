import { listEducation, listExperience, listSkills } from "@/global/constants";
import WorkExperience from "./work_experience";
import Education from "./education";
import Skills from "./skills";

type Props = {};

export default function About({}: Props) {
  let lineNumber = 1;
  let lineOffset = 0;
  let lineOffset2 = 0;
  return (
    <div className="flex w-full min-h-screen px-12 bg-about bg-cover bg-center overflow-hidden md:flex-row md:justify-start md:px-10">
      <div className="flex flex-1 h-[1200px] gap-4 relative">
        <div className="w-0.5 h-full bg-main rounded-full relative top-[2%]">
          <div className="line"></div>
        </div>
        <div className="flex flex-1 flex-col relative top-[1%]">
          <h1 className="text-18 text">About/&gt;</h1>

          <div className="flex flex-col gap-2 absolute top-[4%]">
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
              <WorkExperience />
              {/* EDUCATION */}
              <Education/>
              {/* SKILLS */}
              <Skills/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
