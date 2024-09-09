import Image from "next/image";
import DataCell from "@/components/data-cell";
import demo from "@/assets/product.png";

export default function OrderSuccessItem() {
  return (
    <div className="p-2 grid grid-cols-[300px_1fr] gap-2 border-b-[1px] last:border-b-0 border-shade md:grid-cols-[400px_1fr]">
      <div className="flex gap-2">
        <figure className="relative h-[120px] w-[120px]">
          <Image
            src={demo}
            alt=""
            className="object-cover"
            fill
            sizes="120px"
          />
        </figure>
        <div className="flex flex-col gap-4">
          <h5 className="text-base font-bold line-clamp-2">
            Pizza with extra cheese mozarella
          </h5>
          <DataCell dataName="weight" dataValue="500g" />
        </div>
      </div>
      <div className="grid grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)] gap-2">
        <DataCell dataName="price" dataValue="$19.99" />
        <DataCell dataName="quantity" dataValue="5" />
        <DataCell dataName="total" dataValue="$99.00" />
        <DataCell dataName="brand" dataValue="apex" />
      </div>
    </div>
  );
}
