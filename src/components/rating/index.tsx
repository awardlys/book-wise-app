import { useState } from "react";
import { Star } from "./star";

export function Rating() {
  const items: number[] = [...new Array(5).keys()];
  const [activeIndex, setActiveIndex] = useState<number>();

  function onClickStar(index: number) {
    setActiveIndex((state) => (state === index ? undefined : index));
  }
  return (
    <div>
      {items.map((index) => (
        <Star
          onClick={() => onClickStar(index)}
          key={`star_${index}`}
          isActive={index <= activeIndex!}
        />
      ))}
    </div>
  );
}
