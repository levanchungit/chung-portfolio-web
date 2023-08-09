import ItemWork from "@/components/ItemWork";
import { itemWorks } from "@/global/constants";

export default function Work() {
  return (
    <div className="flex w-full bg-background-start bg-cover relative overflow-hidden">
      <div className="w-0.5 bg-main h-full rounded-full absolute top-[4%] left-10 sm:left-[20%]">
        <div className="flex flex-col w-2 h-2 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-main"></div>
      </div>
      <div className="work-container">
        <div className="flex flex-col pb-8 gap-2 sm:w-full ">
          <div className="flex flex-col gap-2 ">
            <h2 className="text-moon_mist sm: text-xl">Work/&gt;</h2>
            <p className="text-white">
              Selected UI web, mobile, video projects...
            </p>
          </div>
          <div className="list-work-experience">
            {itemWorks.map((item, index) => (
              <div
                key={item.id}
                className={`item-wrapper ${index % 2 == 1 ? "reverse" : ""}`}
              >
                <ItemWork
                  id={item.id}
                  title={item.title}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
