import { Link } from "react-router-dom";
import { AvatarPost } from "./avatar";
import { Rating } from "./rating";

export function Post() {
  return (
    <div className="flex-col flex w-full bg-muted p-6 rounded-md gap-8">
      <div className="flex justify-between">
        <AvatarPost
          name="Jaxson Dias"
          img="https://github.com/shadcn.png"
          dateUp="2022-07-15"
        />
        <Rating />
      </div>
      <div className="flex gap-4">
        <img src="./src/assets/book.png" alt="" />
        <div className="flex flex-col gap-4">
          <div>
            <h3>O Hobbit</h3>
            <p className="text-muted-foreground">J.R.R. Tolkien</p>
          </div>
          <p className=" w-">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh
            <Link className="text-violet-500" to={"#"}>
              ver mais
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
