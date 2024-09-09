import { categoryCards, dummyProducts, subCategories } from "@/lib/staticData";
import { factorText } from "@/utils/helpers";
import Link from "next/link";
import GridView from "@/components/grid-view";
import ProductCardVariant from "@/components/product-cards/product-card-variant";
import CategoryBox from "@/components/category/category-box";
import Heading from "@/components/heading";
import Container from "@/components/wrappers/container";
import Section from "@/components/section";
import Button from "@/components/button";
import EmptyItem from "@/components/empty-item";
import BannerBox from "@/components/banner-box";

export const metadata = {
  title: "Categories | AlgoMart",
  description: "Browse through our categories and find what you need",
};

export default function Categories(params) {
  const currentParam = params?.searchParams?.sub
    ? factorText(params?.searchParams?.sub)
    : factorText(params?.params?.category);

  const currentCategories =
    subCategories[params?.params?.category?.replace(/-/g, "_")];

  const currentProducts = dummyProducts.filter((prod) =>
    prod?.tags?.includes(currentParam)
  );

  const currentCards = categoryCards[factorText(params?.params?.category)];

  return (
    <Container>
      <GridView childMinWidth="330px" childMaxWidth="1fr">
        {currentCards?.map((card, index) => (
          <BannerBox key={index} card={card} />
        ))}
      </GridView>
      {currentCategories && (
        <Section sectionTitle="browse by category">
          <div className="flex gap-2 overflow-x-auto md:grid md:gap-2 md:grid-cols-[repeat(auto-fit,_minmax(140px,_.5fr))] overflow-hidden">
            {currentCategories?.map((cat, index) => (
              <CategoryBox
                key={index}
                category={cat}
                selected={factorText(cat?.name) === currentParam}
              />
            ))}
          </div>
        </Section>
      )}
      <Section>
        <div className="flex items-center justify-between">
          <Heading title={currentParam} />
          {params?.searchParams?.sub && (
            <Link
              href={`/categories/${params?.params?.category}`}
              scroll={false}
            >
              <Button
                ariaLabel="clear currently selected sub category"
                label="clear selection"
                icon="delete"
                variant="destructive"
              />
            </Link>
          )}
        </div>
        {currentProducts.length === 0 ? (
          <EmptyItem message="There's nothing in here. Please check back later." />
        ) : (
          <GridView>
            {currentProducts.map((prod, index) => (
              <ProductCardVariant key={index} product={prod} />
            ))}
          </GridView>
        )}
      </Section>
    </Container>
  );
}
