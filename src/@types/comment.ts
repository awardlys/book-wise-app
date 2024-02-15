import { DataPostProps } from "@/assets/data";

export interface CommentProps {
  data: DataPostProps;
  hasHeader?: boolean;
  isLastRead?: boolean;
  isCardBook?: boolean;
  hasDescription?: boolean;
}
