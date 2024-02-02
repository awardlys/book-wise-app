import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AvatarPostProps {
  dateUp: string;
  img: string;
  name: string;
}

export function AvatarPost({ dateUp, name, img }: Readonly<AvatarPostProps>) {
  const date = formatDistanceToNow(dateUp, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={img} alt={name} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p>{name}</p>
        <time className="text-sm text-muted-foreground ">{date}</time>
      </div>
    </div>
  );
}
