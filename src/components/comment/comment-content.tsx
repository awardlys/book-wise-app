import { DataPostProps } from "@/assets/data";
import { Rating } from "../rating";

interface CommentContentProps {
  data: Readonly<
    Pick<DataPostProps, "title" | "author" | "imgBook" | "description">
  >;
  hasDescription?: "content" | "bottom";
  size?: string;
  hasRating?: boolean;
}
export function CommentContent({
  data: { title, author, imgBook, description },
  hasRating = false,
  hasDescription,
  size = "30%",
}: Readonly<CommentContentProps>) {
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex gap-4">
        <img
          className="rounded-sm group-hover:scale-[1.01] cursor-pointer"
          width={size}
          src={imgBook}
          alt={title}
          title={title}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer hover:underline hover:underline-offset-4">
              <h3>{title}</h3>
              <p className="text-muted-foreground">{author}</p>
            </div>
            {hasDescription === "content" && <p>{description}</p>}
          </div>
          {hasRating && <Rating />}
        </div>
      </div>
      {hasDescription === "bottom" && <p>{description}</p>}
    </div>
  );
}
