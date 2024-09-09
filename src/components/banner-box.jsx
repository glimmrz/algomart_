import Image from "next/image";
import Container from "./wrappers/container";
import Heading from "./heading";
import Text from "./text";
import Button from "./button";

export default function BannerBox({ card }) {
  return (
    <div
      className={
        "relative min-h-[40vw] lg:min-h-[25vw] 2xl:min-h-[22vw] rounded-md bg-accent overflow-hidden group"
      }
    >
      {/*  Before Card */}
      <div
        className="w-[400px] h-[900px] absolute right-[-350px] xl:right-[-250px] 2xl:right-[-200px] 3xl:right-[-150px] bottom-[-300px] rotate-[40deg] transition-all duration-300 group-hover:right-[-450px] md:group-hover:right-[-400px] xl:group-hover:right-[-320px] 2xl:group-hover:right-[-250px] 3xl:group-hover:right-[-200px]"
        style={{ backgroundColor: card.color }}
      />
      {/* After Card */}
      <div
        className="w-[400px] h-[900px] absolute left-[-350px] xl:left-[-250px] 2xl:left-[-200px] 3xl:left-[-180px] top-[-300px] rotate-[40deg] transition-all duration-300 group-hover:left-[-450px] md:group-hover:left-[-400px] xl:group-hover:left-[-320px] 2xl:group-hover:left-[-250px] 3xl:group-hover:left-[-250px]"
        style={{ backgroundColor: card.color }}
      />
      <Container>
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex flex-col justify-center items-center gap-4 z-[1]">
            <figure className="relative h-[200px] w-full lg:h-full">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 350px, 400px"
              />
            </figure>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 z-[1]">
            <Heading title={card?.title} customStyles="text-center" />
            <Text customStyles="text-center">{card.text}</Text>
            {card.slug && (
              <Button
                variant="outline"
                label="shop now"
                ariaLabel="click to visit shop"
                icon="arrowRight"
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
