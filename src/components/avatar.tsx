import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AvatarPostProps {
  img: string;
  name: string;
}

export function AvatarPost({ name, img }: Readonly<AvatarPostProps>) {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={img} alt={name} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
