import Image from "next/image";
import product from "@/assets/product.png";
import DataCell from "@/components/data-cell";
import Container from "@/components/wrappers/container";
import Text from "@/components/text";
import Badge from "@/components/badge";

export default function OrderCard() {
  return (
    <article className="shadow-rg rounded-md transition-shadow duration-300 hover:shadow-active">
      <Container>
        <div className="grid grid-cols-1 gap-4 items-center md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_2fr]">
          <figure className="relative h-[170px]">
            <Image
              src={product}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 350px, 250px"
            />
          </figure>
          <section>
            <div className="flex justify-between">
              {/* <Headers primaryHeader="Fantasy Crunchy Choco Chip Cookies" /> */}
              <h2 className="text-base font-bold">
                Fantasy Crunchy Choco Chip Cookies
              </h2>
              <Badge status="pending" />
            </div>
            <Text customStyles="!mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              nobis sunt illo voluptate facere quod fuga facilis sed aut alias.
            </Text>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <DataCell dataName="price" dataValue="$18.99" />
                <DataCell dataName="quantity" dataValue="6" />
              </div>
              <div className="grid gap-4">
                <DataCell dataName="order date" dataValue="23 june, 2023" />
                <DataCell dataName="delivery date" dataValue="28 july 2027" />
              </div>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
