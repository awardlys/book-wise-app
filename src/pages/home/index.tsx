import { Post } from "@/components/post";
import { GoGraph } from "react-icons/go";

export function Home() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <GoGraph color="#50B2C0" className="h-6 w-6" />
        <h2 className="text-xl">Início</h2>
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
}
