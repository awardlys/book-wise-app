import { TagCategory } from "@/components/tag-categorys";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { PiBinocularsDuotone } from "react-icons/pi";

export function Explorer() {
  const [tagActive, setTagActive] = useState("");
  return (
    <div>
      <header className="flex justify-between py-4 mt-10">
        <div className="flex justify-normal gap-2 items-center">
          {" "}
          <PiBinocularsDuotone className="w-6 h-6" color="#50B2C0" /> Explorar
        </div>
        <Input placeholder="Buscar livro ou autor" className="w-1/2" />
      </header>
      <div className="flex gap-4">
        <TagCategory
          name="Tudo"
          isActive={tagActive === "Tudo"}
          onClick={() => setTagActive("Tudo")}
        />
      </div>
    </div>
  );
}
