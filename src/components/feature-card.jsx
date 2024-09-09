import Heading from "./heading";
import Icon from "./icon";
import Text from "./text";
import Container from "./wrappers/container";

export default function FeatureCard({ feature }) {
  return (
    <div className="bg-accent rounded-md">
      <Container>
        <div className="flex items-center justify-center">
          <Icon icon={feature?.icon} size={100} />
        </div>
        <Heading
          title={feature?.label}
          customStyles="!mt-4 !mb-4 !ml-0 !mr-0 !text-center"
        />
        <Text customStyles="!text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae
          iure vero atque laborum neque.
        </Text>
      </Container>
    </div>
  );
}
