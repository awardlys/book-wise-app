import { Post } from "@/components/post";
import { GoGraph } from "react-icons/go";

export function Home() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-10">
        <GoGraph color="#50B2C0" className="h-6 w-6" />
        <h2 className="text-xl">Início</h2>
      </div>
      <p className="text-sm mb-2">Avaliações mais recentes</p>
      <div className="flex flex-col gap-4 max-h-[78vh] overflow-x-hidden custom-scrollbar ">
        {Array.from({ length: 5 }).map((_, i) => (
          <Post key={i} />
        ))}
      </div>
    </div>
  );
}
