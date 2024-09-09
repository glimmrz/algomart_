"use client";
import { useState } from "react";
import Button from "@/components/button";
import Input from "@/components/input";
import Editor from "../editor";
import Select from "@/components/select";
import { postData } from "@/utils/apiCalls";
import { errorToast, successToast } from "@/utils/helpers";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Icon from "@/components/icon";

export default function AddProduct({ categories }) {
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (images.length <= 0) {
        return errorToast("Please upload at least one image.");
      }

      const data = new FormData(e.target);
      const formData = Object.fromEntries(data.entries());

      const tags_trimmed = formData.tags.split(",").map((tag) => tag.trim());
      const seo_tags_trimmed = formData.seo_tags
        .split(",")
        .map((tag) => tag.trim());

      const res = await postData("products", {
        ...formData,
        tags: tags_trimmed,
        seo_tags: seo_tags_trimmed,
        description: description,
        images,
      });

      if (res.error) {
        return errorToast(res.response.msg);
      }

      successToast(res.response.msg);
      router.push("/dashboard/products");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImages = (currentImage) => {
    const filteredImages = images.filter((image) => image !== currentImage);
    setImages(filteredImages);
  };

  return (
    <div className="bg-background p-2 rounded-md">
      {/* Upload Pictures */}
      <CldUploadWidget
        uploadPreset="ilham-com"
        onSuccess={(result) =>
          setImages((prev) => [...prev, result.info.secure_url])
        }
      >
        {({ open }) => {
          return (
            <div
              className="p-16 rounded-md border border-dashed border-shade text-center"
              onClick={() => open()}
            >
              Click to upload images
            </div>
          );
        }}
      </CldUploadWidget>
      {/* Uploaded images preview */}
      {images.length > 0 && (
        <div className="flex gap-4">
          {images?.map((image, index) => (
            <div key={index} className="relative">
              <figure className="relative h-28 w-28 border border-shade rounded-md mt-4 overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </figure>
              {/* Delele image button */}
              <div
                className="absolute top-1 -right-2 p-1 bg-theme_variant rounded-full cursor-pointer"
                onClick={() => handleImages(image)}
              >
                <Icon icon="close" size={18} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product information form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="" label="product title" required name="title" />
          <Input label="SEO title" placeholder="" required name="seo_title" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder=""
            label="product price"
            required
            type="number"
            name="price"
          />
          <Input
            placeholder=""
            label="discounted price"
            type="number"
            name="discounted_price"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="" label="weight" required name="weight" />
          <Input
            placeholder=""
            label="stock"
            required
            type="number"
            min={1}
            name="stock"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select
            label="select category"
            options={categories}
            keyName="label"
            keyValue="_id"
            required
            name="category"
          />
          <Input value="pending" label="status" disabled />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input name="warranty" placeholder="" required label="warranty" />
          <Input name="box_type" placeholder="" required label="box type" />
          <Input name="color" placeholder="" required label="color" />
          <Input name="material" placeholder="" required label="material" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select
            required
            label="featured"
            options={[
              { label: "yes", val: true },
              { label: "no", val: false },
            ]}
            keyName="label"
            keyValue="val"
            name="featured"
          />
          <Input placeholder="" label="brand" required name="brand" />
        </div>
        <Input
          placeholder=""
          label="tags (Separate tags using comma)"
          required
          type="textarea"
          name="tags"
        />
        <Input
          label="SEO tags"
          placeholder=""
          required
          type="textarea"
          name="seo_tags"
        />

        <Editor
          label="product description"
          required
          content={description}
          setContent={setDescription}
        />
        <Input
          placeholder=""
          label="SEO description"
          required
          type="textarea"
          name="seo_description"
        />
        <Button label="save" icon="apply" type="submit" loading={isLoading} />
      </form>
    </div>
  );
}
