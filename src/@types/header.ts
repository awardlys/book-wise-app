import { DataPostProps } from "@/assets/data";

export interface HeaderProps {
  data: Pick<DataPostProps, "user" | "dateUp" | "imgUser">;
}
