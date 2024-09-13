import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface Props {
  category: Category;
}

function CategoryIcon({ category }: Props) {
  return (
    <div
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <Link
        href={`/order/${category.slug}`}
        className="flex items-center gap-3"
      >
        <div className="relative w-16 h-16">
          <Image
            src={`/icon_${category.slug}.svg`}
            alt={`Icono de la categoría ${category.name}`}
            fill
          />
        </div>

        <p className="text-xl font-bold">{category.name}</p>
      </Link>
    </div>
  );
}
export default CategoryIcon;
