"use client";
import { useFilterSidebar } from "@/hooks/modal-controllers";
import Heading from "@/components/heading";
import Input from "@/components/input";
import Tag from "@/components/category/tag";
import Select from "@/components/select";
import Button from "@/components/button";
import Sidebar from "./sidebar";

const tags = ["milk", "grocery", "food", "clothing"];

export default function FilterSidebar() {
  const { isOpen, onClose } = useFilterSidebar();

  return (
    <Sidebar isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col">
        <section className="grid gap-2 mt-2 mb-2 ml-0 mr-0">
          <div className="border-b-[1px] border-shade pb-1">
            <Heading title_md="sort by" />
          </div>
          <Select
            options={[
              { label: "price (high to low)", value: '"price"' },
              { label: "price (low to high)", value: '"price"' },
              { label: "asc", value: "asc" },
              { label: "desc", value: "desc" },
            ]}
          />
        </section>

        <section className="grid gap-2 mt-2 mb-2 ml-0 mr-0">
          <div className="border-b-[1px] border-shade pb-1">
            <Heading title_md="category" />
          </div>
          <div className="grid gap-2">
            <Input type="checkbox" label="juice and drinks" id="drinks" />
            <Input type="checkbox" label="dairy and milk" id="dairy" />
            <Input type="checkbox" label="snack and spices" id="snack" />
          </div>
        </section>

        <section className="grid gap-2 mt-2 mb-2">
          <div className="border-b-[1px] border-shade pb-1">
            <Heading title_md="price" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="20"
              label="minimum price"
              min={20}
            />
            <Input
              type="number"
              placeholder="999+"
              label="maximum price"
              max={999}
            />
          </div>
        </section>

        <section className="grid gap-2 mt-2 mb-2">
          <div className="border-b-[1px] border-theme_variant pb-1">
            <Heading title_md="color" />
          </div>
          <div className="grid gap-2">
            <Input type="checkbox" label="red" id="red" />
            <Input type="checkbox" label="blue" id="blue" />
            <Input type="checkbox" label="green" id="green" />
          </div>
        </section>

        <section className="grid gap-2 mt-2 mb-2">
          <div className="border-b-[1px] border-theme_variant pb-1">
            <Heading title_md="weight" />
          </div>
          <div className="grid gap-2">
            <Input type="checkbox" label="2kg" id="2kg" />
            <Input type="checkbox" label="20kg" id="20kg" />
            <Input type="checkbox" label="25kg" id="25kg" />
          </div>
        </section>

        <section className="grid gap-2 mt-2 mb-2">
          <div className="border-b-[1px] border-theme_variant pb-1">
            <Heading title_md="tags" />
          </div>
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </section>

        <Button label="filter" icon="filter" />
      </div>
    </Sidebar>
  );
}
