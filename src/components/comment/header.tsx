import { DataPostProps } from "@/assets/data";
import { AvatarPost } from "../avatar";
import { Rating } from "../rating";
import { TimeDistance } from "../time-distance";

interface HeaderProps {
  data: Pick<DataPostProps, "user" | "dateUp" | "imgUser">;
}
export function Header({
  data: { user, dateUp, imgUser },
}: Readonly<HeaderProps>) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <AvatarPost name={user} img={imgUser} />
        <div>
          <p>{user}</p>
          <TimeDistance dateUp={dateUp} />
        </div>
      </div>
      <Rating />
    </div>
  );
}
