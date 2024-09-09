import { promotionCards } from "@/lib/staticData";
import { getData } from "@/utils/apiCalls";
import GridView from "@/components/grid-view";
import Section from "@/components/section";
import ProductCard from "@/components/product-cards/product-card";
import ProductCardVariant from "@/components/product-cards/product-card-variant";
import BannerBox from "@/components/banner-box";
import Container from "@/components/wrappers/container";
import Slider from "@/components/slider";

export default async function Home() {
  const res = await getData("products");
  const products = res.response.payload;

  return (
    <>
      <Section sectionStyles="!mt-0">
        <Slider />
      </Section>
      <Container>
        <Section
          title="featured items"
          subtitle="New items this week!"
          sectionStyles="!mt-0"
        >
          <GridView>
            {products?.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </GridView>
        </Section>
        <Section>
          <GridView childMinWidth="330px" childMaxWidth="1fr">
            {promotionCards.map((card, i) => (
              <BannerBox card={card} key={i} />
            ))}
          </GridView>
        </Section>
        <Section title="popular items" subtitle="our most popular products">
          <GridView>
            {products?.map((product, index) => (
              <ProductCardVariant product={product} key={index} />
            ))}
          </GridView>
        </Section>
      </Container>
    </>
  );
}
