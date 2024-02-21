import { books } from "@/assets/constants/books";
import { Comment } from "@/components/comment";
import { GoGraph } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { users } from "../../assets/constants/users";

export function Home() {
  return (
    <div className="grid grid-cols-6 gap-24">
      <div className="col-span-4">
        <div className="flex items-center select-none gap-2 mb-10">
          <GoGraph color="#50B2C0" className="h-6 w-6" />
          <h2 className="text-xl">Início</h2>
        </div>
        <p className="text-sm mb-2 select-none">Avaliações mais recentes</p>
        <div className="h-[calc(100vh-8rem)] overflow-x-hidden custom-scrollbar rounded-md">
          <div className="flex flex-col gap-4">
            {books.map((item) => (
              <Comment.Root key={crypto.randomUUID()}>
                <Comment.Header users={users[0]} hasRating />
                <Comment.Content data={item} hasDescription="content" />
              </Comment.Root>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 h-[calc(100vh-2rem)] overflow-y-hidden custom-scrollbar rounded-md">
        <div className="flex items-center justify-between text-sm mb-2 mt-16">
          <p>Livros Populares</p>
          <Link
            to={"/explorer"}
            className="flex items-center gap-2 text-violet-600"
          >
            <span>Ver todos</span> <SlArrowRight size={10} />
          </Link>
        </div>
        <div className="h-[calc(100vh-6.25rem)] overflow-x-hidden custom-scrollbar rounded-md">
          <div className="flex flex-col gap-4 last:mb-4">
            {books.map((item) => (
              <Comment.Root key={window.crypto.randomUUID()}>
                <Comment.Content data={item} hasRating />
              </Comment.Root>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
