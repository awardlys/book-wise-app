import { BooksProps } from "@/assets/constants/books";
import { Rating } from "../rating";

interface CommentContentProps {
  data: BooksProps;
  hasDescription?: "content" | "bottom";
  sizeImg?: string;
  hasRating?: boolean;
}
export function CommentContent({
  data: { name, author, cover_url, summary },
  hasRating = false,
  hasDescription,
  sizeImg = "30%",
}: Readonly<CommentContentProps>) {
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex gap-4">
        <img
          className="rounded-sm cursor-pointer"
          width={sizeImg}
          src={cover_url}
          alt={name}
          title={name}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="cursor-pointer hover:underline hover:underline-offset-4">
              <h3>{name}</h3>
              <p className="text-muted-foreground">{author}</p>
            </div>
            {hasDescription === "content" && <p>{summary}</p>}
          </div>
          {hasRating && <Rating />}
        </div>
      </div>
      {hasDescription === "bottom" && <p>{summary}</p>}
    </div>
  );
}
