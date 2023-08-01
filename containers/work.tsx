import ItemWork from "@/components/ItemWork";
import { itemWorks } from "@/global/constants";

export default function Work() {
  return (
    <div className="work-container">
      <div className="w-0.5 bg-main rounded-full relative sm:left-[20%]">
        <div className="flex flex-col w-2 h-2 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 bg-main"></div>
      </div>
      <div className="flex flex-col gap-5 pb-8">
        <div className="flex flex-col gap-2">
          <h2 className=" text-moon_mist">Work/&gt;</h2>
          <p className=" text-white">
            Selected UI web, mobile, video projects...
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {itemWorks.map((item) => (
            <ItemWork
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
