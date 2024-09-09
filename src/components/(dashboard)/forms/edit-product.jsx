"use client";
import { useState } from "react";
import { errorToast, successToast } from "@/utils/helpers";
import { CldUploadWidget } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { putData } from "@/utils/apiCalls";
import Button from "@/components/button";
import Input from "@/components/input";
import Editor from "../editor";
import Select from "@/components/select";
import Image from "next/image";
import Icon from "@/components/icon";

export default function EditProduct({ categories, currentProduct, _id }) {
  const [values, setValues] = useState({
    box_type: currentProduct?.box_type,
    brand: currentProduct?.brand,
    category: currentProduct?.category,
    color: currentProduct?.color,
    discounted_price: currentProduct?.discounted_price / 100,
    featured: currentProduct?.featured,
    material: currentProduct?.material,
    price: currentProduct?.price / 100,
    seo_description: currentProduct?.seo_description,
    seo_title: currentProduct?.seo_title,
    stock: currentProduct?.stock,
    status: currentProduct?.status,
    title: currentProduct?.title,
    warranty: currentProduct?.warranty,
    weight: currentProduct?.weight,
    seo_tags: currentProduct?.seo_tags?.join(", "),
    tags: currentProduct?.tags?.join(", "),
  });
  const [description, setDescription] = useState(currentProduct?.description);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState(currentProduct?.images);
  const router = useRouter();

  // Update input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // Make api call to update information
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = new FormData(e.target);
      const formData = Object.fromEntries(data.entries());

      const tags_trimmed = values.tags.split(",").map((tag) => tag.trim());
      const seo_tags_trimmed = values.seo_tags
        .split(",")
        .map((tag) => tag.trim());

      // make api call / perform database operation
      const res = await putData("products", {
        ...formData,
        tags: tags_trimmed,
        seo_tags: seo_tags_trimmed,
        description,
        images,
        _id,
      });

      if (res.error) {
        return errorToast(res.response.msg);
      }

      successToast(res.response.msg);
      router.push("/dashboard/products");
    } catch (err) {
      errorToast("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter out images
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

      {/* Available images preview */}
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
              {/* Delete button */}
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
          <Input
            placeholder=""
            label="product title"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <Input
            label="SEO title"
            placeholder=""
            name="seo_title"
            value={values.seo_title}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder=""
            label="product price"
            type="number"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
          <Input
            placeholder=""
            label="discounted price"
            type="number"
            name="discounted_price"
            value={values.discounted_price}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder=""
            label="weight"
            name="weight"
            value={values.weight}
            onChange={handleChange}
          />
          <Input
            placeholder=""
            label="stock"
            type="number"
            min={1}
            name="stock"
            value={values.stock}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select
            label="select category"
            options={categories}
            keyName="label"
            keyValue="_id"
            name="category"
          />
          <Input
            value={values.status}
            label="status [pending/approved]"
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="warranty"
            placeholder=""
            label="warranty"
            value={values.warranty}
            onChange={handleChange}
          />
          <Input
            name="box_type"
            placeholder=""
            label="box type"
            value={values.box_type}
            onChange={handleChange}
          />
          <Input
            name="color"
            placeholder=""
            label="color"
            value={values.color}
            onChange={handleChange}
          />
          <Input
            name="material"
            placeholder=""
            label="material"
            value={values.material}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Select
            label="featured"
            options={[
              { label: "yes", val: true },
              { label: "no", val: false },
            ]}
            keyName="label"
            keyValue="val"
            name="featured"
          />
          <Input
            placeholder=""
            label="brand"
            name="brand"
            value={values.brand}
            onChange={handleChange}
          />
        </div>
        <Input
          placeholder=""
          label="tags (Separate tags using comma)"
          type="textarea"
          name="tags"
          value={values?.tags}
          onChange={handleChange}
        />
        <Input
          label="SEO tags"
          placeholder=""
          type="textarea"
          name="seo_tags"
          value={values?.seo_tags}
          onChange={handleChange}
        />

        <Editor
          label="product description"
          content={description}
          setContent={setDescription}
        />
        <Input
          placeholder=""
          label="SEO description"
          type="textarea"
          name="seo_description"
          value={values.seo_description}
          onChange={handleChange}
        />
        <Button
          label="save"
          icon="apply"
          type="submit"
          loading={isLoading}
          disabled={isLoading}
        />
      </form>
    </div>
  );
}
