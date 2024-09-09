import ProductCard from "@/components/product-cards/product-card";
import GridView from "@/components/grid-view";
import Heading from "@/components/heading";
import Container from "@/components/wrappers/container";
import Section from "@/components/section";
import ProductFilter from "@/components/product-filter";
import { getData } from "@/utils/apiCalls";

export const metadata = {
  title: "Shop | AlgoMart",
  description: "Browse your favourite items.",
};

export default async function Shop({ searchParams }) {
  const { category } = searchParams;

  const res = await getData("products");
  const products = res.response.payload;

  return (
    <Container>
      <Section sectionStyles="!mt-0">
        <div className="flex items-center justify-between">
          <Heading title={category ? category : "all products"} />
          <ProductFilter />
        </div>
        <GridView>
          {products.map((prod, index) => (
            <ProductCard key={index} product={prod} />
          ))}
        </GridView>
      </Section>
    </Container>
  );
}
