import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AvatarPost() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p>Jaxson Dias</p>
        <p className="text-sm text-muted-foreground ">Hoje</p>
      </div>
    </div>
  );
}
