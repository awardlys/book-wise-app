import { Post } from "@/components/post";
import { GoGraph } from "react-icons/go";

export function Home() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-10">
        <GoGraph color="#50B2C0" className="h-6 w-6" />
        <h2 className="text-xl">Início</h2>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm mb-2">Avaliações mais recentes</p>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
