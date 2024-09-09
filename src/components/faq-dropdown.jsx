"use client";
import { useState } from "react";
import Container from "./wrappers/container";
import Heading from "./heading";
import Icon from "./icon";
import Text from "./text";

export default function FaqDropodown({ faq }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-accent rounded-md overflow-hidden">
      <div
        role="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-colors duration-300 select-none cursor-pointer ${
          isOpen && "bg-theme text-background"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center gap-2 cursor-pointer">
            <Heading title={faq?.question} customStyles="!normal-case" />
            <Icon icon={!isOpen ? "chevronDown" : "chevronUp"} size={24} />
          </div>
        </Container>
      </div>

      <div
        className={`max-h-0 overflow-hidden transition-all duration-300 ${
          isOpen && "max-h-[500px]"
        }`}
      >
        <Container>
          <Text>{faq?.answer}</Text>
        </Container>
      </div>
    </div>
  );
}
