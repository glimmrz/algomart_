import { ratingData } from "@/lib/staticData";
import Input from "../input";
import Heading from "../heading";
import Button from "../button";

export default function Rating() {
  return (
    <div className="bg-accent rounded-md p-2 flex flex-col items-center justify-center gap-2">
      <h4 className="text-base font-bold">
        <span className="text-theme font-bold text-5xl">4</span>/5
      </h4>

      <Heading
        title="rate this product"
        subtitle="leave a review"
        customStyles="!text-center"
      />

      <form className="w-full grid grid-cols-1 gap-4 xl:gap-2 xl:grid-cols-2">
        <div>
          <Input
            type="textarea"
            placeholder="start typing..."
            ariaLabel="Share your experience with the product."
          />
        </div>
        {/* Rating radio buttons */}
        <div className="overflow-hidden flex items-center justify-center gap-2">
          {ratingData.map((data, index) => (
            <div key={index}>
              <input
                type="radio"
                name={data.name}
                value={data.value}
                id={`radio${index}`}
                className="hidden peer"
              />
              <label
                htmlFor={`radio${index}`}
                className="flex items-center justify-center h-10 w-10 text-base font-bold rounded-full border-[1px] border-theme cursor-pointer transition-colors duration-300 hover:border-theme_variant peer-checked:!bg-theme peer-checked:text-accent"
              >
                {data.value}
              </label>
            </div>
          ))}
        </div>
        <Button label="submit" type="submit" variant="primary" icon="save" />
      </form>
    </div>
  );
}
