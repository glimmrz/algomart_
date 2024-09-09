import { features } from "@/lib/staticData";
import Link from "next/link";
import Image from "next/image";
import ab from "@/assets/ab.png";
import ab2 from "@/assets/ab.jpeg";
import Text from "@/components/text";
import Heading from "@/components/heading";
import Section from "@/components/section";
import FeatureCard from "@/components/feature-card";
import Container from "@/components/wrappers/container";
import Button from "@/components/button";

export const metadata = {
  title: "About us | AlgoMart",
  description: "Find out who we are.",
};

export default function Page() {
  return (
    <Container>
      <div>
        <Section sectionStyles="!mt-0">
          {/* Philosophy Card */}
          <div className="grid grid-cols-1 bg-accent rounded-md overflow-hidden lg:grid-cols-[1fr,_2fr]">
            <figure className="relative min-h-[350px]">
              <Image
                src={ab}
                alt="our philosophy"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 400px, 550px"
              />
            </figure>
            <div className="pt-4 pb-4 pl-0 pr-0 flex flex-col justify-center lg:p-4">
              <Container>
                <Heading title="our philosophy" customStyles="!mb-4" />
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Natus, saepe consequatur? Mollitia beatae perspiciatis
                  accusantium deserunt nihil facere quia laboriosam architecto
                  alias? Eaque error illo reiciendis quam provident aperiam sit,
                  sint dignissimos, iusto officiis sunt voluptatibus. Nesciunt
                  saepe omnis deserunt doloremque sunt, beatae eius illo laborum
                  vel cumque molestias, quam quos atque voluptates veritatis
                  explicabo, quaerat fuga cupiditate quo alias! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Sed nesciunt
                  aspernatur eligendi nulla sequi vitae? Neque ullam tempora
                  aperiam iure magnam molestias, dolor incidunt saepe dolore
                  velit suscipit illum repudiandae. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nemo quos sunt laudantium fugit
                  assumenda similique atque exercitationem.
                </Text>
              </Container>
            </div>
          </div>
        </Section>

        {/* Features */}
        <Section>
          <Container>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center lg:w-[650px]">
                <Heading title="why you'll love us" customStyles="!mb-4" />
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, optio, iusto magni fuga officia nam doloremque quidem
                  odio saepe voluptatibus hic aliquam. Natus vel ab, nesciunt
                  adipisci repudiandae, dolores quas eligendi dolore deleniti id
                  similique aliquam cumque nisi maiores? Ut sit iste
                  voluptatibus quos aliquid aperiam nesciunt vitae commodi
                  facere sint laboriosam molestiae rem maxime nemo eum ad quasi.
                </Text>
              </div>
            </div>
          </Container>
          <div className="mt-4 w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
            {features?.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </Section>

        {/* Call To Action */}
        <Section>
          <div className="rounded-md grid overflow-hidden lg:h-[500px] lg:grid-cols-2">
            <div className="bg-accent p-2 w-full flex items-center justify-center md:p-4 lg:p-8">
              <div className="p-2 flex flex-col items-center justify-center bg-background rounded-md">
                <Heading
                  title="visit the shop"
                  customStyles="!text-center !mb-4"
                />
                <Text customStyles="!text-center !mb-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
                  quidem! Fugiat itaque natus quos obcaecati? Ut porro quos
                  facere est reiciendis! Sed minus perspiciatis voluptatibus eos
                  facere saepe sequi repellat.
                </Text>
                <Link href="/shop">
                  <Button
                    ariaLabel="click to visit shop"
                    label="here we go"
                    variant="primary"
                    icon="arrowRight"
                  />
                </Link>
              </div>
            </div>

            <figure className="relative h-full hidden lg:block">
              <Image
                src={ab2}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 400px, 550px"
              />
            </figure>
          </div>
        </Section>
      </div>
    </Container>
  );
}
