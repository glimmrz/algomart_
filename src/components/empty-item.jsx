import Heading from "./heading";
import Text from "./text";

export default function EmptyItem({ message }) {
  return (
    <div className="h-[250px] rounded-md bg-accent mt-2 pt-8 pb-8 pl-2 pr-2 flex flex-col items-center justify-center gap-2">
      <Heading title="uh-oh" center />
      <Text customStyles="!text-center">{message}</Text>
    </div>
  );
}
