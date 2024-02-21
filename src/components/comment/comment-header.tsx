import { UsersProps } from "@/assets/constants/users";
import { AvatarPost } from "../avatar";
import { Rating } from "../rating";
import { TimeDistance } from "../time-distance";

interface HeaderProps {
  hasRating?: boolean;
  users: UsersProps;
}
export function CommentHeader({
  hasRating = false,
  users: { avatar_url, name },
}: Readonly<HeaderProps>) {
  const date = new Date();
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <AvatarPost name={name} img={avatar_url} />
        <div>
          <p>{name}</p>
          <TimeDistance dateUp={date.toString()} />
        </div>
      </div>
      {hasRating && <Rating />}
    </div>
  );
}
