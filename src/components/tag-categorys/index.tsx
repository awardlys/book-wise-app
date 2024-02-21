import { HTMLAttributes } from "react";

interface TagCategoryProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  isActive?: boolean;
}

export function TagCategory({
  name,
  isActive,
  ...props
}: Readonly<TagCategoryProps>) {
  return (
    <span
      {...props}
      data-isActive={isActive}
      className="py-1 px-4 text-xs text-center rounded-full border-violet-500 border-2 border-solid data-[isActive=true]:bg-violet-500 cursor-pointer select-none"
    >
      {name}
    </span>
  );
}
