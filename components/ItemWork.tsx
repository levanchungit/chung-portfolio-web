import Image from "next/image";

type Props = {
  index: number;
  id: number;
  title: string;
  image: string;
};

export default function ItemWork({ index, id, title, image }: Props) {
  return (
    <div className={`sm: flex `}>
      <div className="flex flex-row  items-center">
        <div className="flex flex-col text-white w-[200px] ">
          <h2 className="font-bold sm: text-xl">{title}</h2>
          <div className="flex flex-col h-px w-full bg-main"></div>
          <h2 className="">{id > 9 ? id : `0${id}`}</h2>
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.49519 0.504761L11.7452 6.99995L0.49519 13.4951L0.49519 0.504761Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>

        <div className="">
          <Image
            alt="Picture of the author"
            src={image}
            width={200}
            height={100}
            className="cursor-pointer sm:min-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
