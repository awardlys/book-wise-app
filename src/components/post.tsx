import { DataPostProps } from "@/assets/data";
import { Link } from "react-router-dom";
import { AvatarPost } from "./avatar";
import { Rating } from "./rating";

export function Post({ data }: Readonly<{ data: DataPostProps }>) {
  return (
    <div className="flex-col flex w-full dark:bg-muted bg-gray-300 p-6 rounded-md gap-8">
      <div className="flex justify-between">
        <AvatarPost name={data.user} img={data.imgUser} dateUp={data.dateUp} />
        <Rating />
      </div>
      <div className="flex gap-4">
        <img src="./src/assets/book.png" alt={data.title} title={data.title} />
        <div className="flex flex-col gap-4">
          <div>
            <h3>O Hobbit</h3>
            <p className="text-muted-foreground">{data.author}</p>
          </div>
          <p>
            {data.description}
            <Link className="text-violet-500" to={"#"}>
              ver mais
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
