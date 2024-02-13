import { DataPost } from "@/assets/data";
import { Post } from "@/components/post";
import { GoGraph } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="grid grid-cols-6 gap-24">
      <div className="col-span-4">
        <div className="flex items-center gap-2 mb-10">
          <GoGraph color="#50B2C0" className="h-6 w-6" />
          <h2 className="text-xl">Início</h2>
        </div>
        <p className="text-sm mb-2">Avaliações mais recentes</p>
        <div className="h-[calc(100vh-8rem)] overflow-x-hidden custom-scrollbar rounded-md">
          <div className="flex flex-col gap-4">
            {DataPost.map((item) => (
              <Post data={item} key={window.crypto.randomUUID()} />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 h-[calc(100vh-2rem)] overflow-x-hidden custom-scrollbar rounded-md">
        <div className="flex items-center justify-between text-sm mb-2 mt-16">
          <p>Livros Populares</p>
          <Link to={""} className="flex items-center gap-2 text-violet-600">
            <span>Ver todos</span> <SlArrowRight size={10} />
          </Link>
        </div>
        <div className="h-[calc(100vh-6.25rem)] overflow-x-hidden custom-scrollbar rounded-md">
          <div className="flex flex-col gap-4">
            {DataPost.map((item) => (
              <Post data={item} key={window.crypto.randomUUID()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
