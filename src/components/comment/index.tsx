import { CommentProps } from "@/@types";
import { Link } from "react-router-dom";
import { Rating } from "../rating";
import { Header } from "./header";

export function Comment({
  data,
  hasHeader = true,
  hasDescription = false,
  isCardBook = false,
  isLastRead = false,
}: Readonly<CommentProps>) {
  return (
    <div>
      {isLastRead ? (
        <div>Rivaldo</div>
      ) : (
        <div className="flex flex-col w-full dark:bg-muted bg-gray-300 p-4 rounded-md gap-4">
          {hasHeader && <Header data={data} />}
          <div className="flex gap-4">
            <img
              width={isCardBook ? "25%" : "40%"}
              src="./src/assets/book.png"
              alt={data.title}
              title={data.title}
            />
            <div className="flex flex-col justify-between gap-4">
              <div className="cursor-pointer hover:underline hover:underline-offset-4">
                <h3>{data.title}</h3>
                <p className="text-muted-foreground">{data.author}</p>
              </div>
              {!isCardBook && (
                <p>
                  {data.description}{" "}
                  <Link className="text-violet-500" to={""}>
                    ver mais
                  </Link>
                </p>
              )}
              {isCardBook && <Rating />}
            </div>
          </div>
          {hasDescription && <p>{data.description}</p>}
        </div>
      )}
    </div>
  );
}
