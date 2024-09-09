import Image from "next/image";
import Link from "next/link";

export default function CategoryBox({ category, selected }) {
  return (
    <div
      title={category?.name}
      className={`min-w-[140px] rounded-md border-[1px] border-transparent`}
      aria-label={category?.name}
      style={{ backgroundColor: category?.color }}
    >
      <Link
        href={`?sub=${category?.slug}`}
        className={`p-2 flex flex-col items-center justify-center transition-opacity duration-300 ${
          selected && "opacity-50"
        }`}
        scroll={false}
      >
        <div className="relative h-[80px] w-full mb-2">
          <Image
            src={category?.image}
            alt={category?.name}
            className="object-contain"
            fill
            sizes="120px"
          />
        </div>
        <h6 className="text-base text-center capitalize line-clamp-2 hover:underline">
          {category?.name}
        </h6>
        <span className="text-center text-mute text-sm mb-1">
          {category?.quantity} items
        </span>
      </Link>
    </div>
  );
}
