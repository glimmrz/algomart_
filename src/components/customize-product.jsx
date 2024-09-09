"use client";
import { useState } from "react";

export default function CustomizeProduct({ options }) {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptions = (optionType, selection) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: selection }));
  };

  return (
    <>
      {options?.map((option, index) => (
        <div key={index}>
          <h4 className="grid gap-2 text-xl font-bold capitalize after:content-[''] after:h-[1px] after:rounded-md after:bg-shade">
            {option?.title}
          </h4>
          <ul className="mt-2 flex flex-wrap gap-2 md:gap-4">
            {option?.options?.map((op, indx) => {
              const isSelected = Object.values(selectedOptions).includes(
                op?.value
              );

              return (
                <div key={indx}>
                  {option?.type?.toLowerCase() === "color" ? (
                    <li
                      onClick={
                        op?.stock <= 0
                          ? undefined
                          : () => handleOptions(op?.type, op?.value)
                      }
                      className={`border-2 border-mute relative w-8 h-8 rounded-full cursor-pointer select-none ${
                        isSelected &&
                        "after:absolute after:top-0 after:bottom-0 after:-left-[19%]  after:m-auto after:content-[''] after:h-10 after:w-10 after:rounded-full after:border-theme after:border-4 after:bg-transparent"
                      } ${
                        op?.stock <= 0 &&
                        "cursor-not-allowed after:absolute after:right-0 left-0 top-2/4 bottom-2/4 w-[2px] h-[40px] rounded-md rotate-45 bg-destructive"
                      }`}
                      style={{ backgroundColor: op?.value }}
                    ></li>
                  ) : (
                    <li
                      onClick={
                        op?.stock <= 0
                          ? undefined
                          : () => handleOptions(option?.type, op?.value)
                      }
                      className={`p-1 border-[1px] border-theme rounded-md text-theme cursor-pointer transition-colors duration-300 select-none ${
                        isSelected && "bg-theme text-theme_variant"
                      } ${op?.stock <= 0 && "cursor-not-allowed opacity-50"}`}
                    >
                      {op?.value}
                    </li>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}
