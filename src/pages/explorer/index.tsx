import { Comment } from "@/components/comment";
import { TagCategory } from "@/components/tag-categorys";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PiBinocularsDuotone } from "react-icons/pi";

const tiposDeLivros = [
  "Tudo",
  "Ficção",
  "Não Ficção",
  "Romance",
  "Mistério",
  "Suspense",
  "Fantasia",
  "Sci-Fi",
  "Biografia",
  "Autobiografia",
  "História",
  "Policial",
  "Aventura",
  "Literatura Clássica",
  "Poesia",
  "Autoajuda",
];

export function Explorer() {
  const [tagActive, setTagActive] = useState("Tudo");

  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-between py-4 mt-10">
        <div className="flex justify-normal gap-2 items-center">
          {" "}
          <PiBinocularsDuotone className="size-6" color="#50B2C0" /> Explorar
        </div>
        <Input placeholder="Buscar livro ou autor" className="w-1/2" />
      </header>
      <div className="flex gap-2 flex-wrap">
        {tiposDeLivros.map((item) => (
          <TagCategory
            name={item}
            isActive={tagActive === item}
            onClick={() =>
              setTagActive((state) => (state === item ? "Tudo" : item))
            }
          />
        ))}
      </div>
      <div className="card-explorer">
        {Books.map((item) => (
          <Comment.Root key={item.id}>
            <Comment.Content data={item} hasRating />
          </Comment.Root>
        ))}
      </div>
    </div>
  );
}
