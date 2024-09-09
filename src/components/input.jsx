import { font } from "@/lib/fonts";

export default function Input({
  ariaLabel,
  label,
  name,
  value,
  placeholder,
  min,
  max,
  minLength,
  type = "text",
  customStyles = "",
  required,
  id,
  disabled,
  onChange,
}) {
  return (
    <div
      className={`flex flex-grow flex-col gap-2 ${
        type === "checkbox" && "!flex-row-reverse !w-fit"
      }`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`first-letter:capitalize ${
            required && "after:content-['*'] after:text-destructive"
          }`}
        >
          {label}
        </label>
      )}
      {type !== "textarea" && (
        <input
          onChange={onChange}
          disabled={disabled}
          id={id}
          name={name}
          value={value}
          aria-label={ariaLabel}
          min={min}
          max={max}
          minLength={minLength}
          type={type}
          step={type === "number" ? "any" : ""}
          placeholder={placeholder}
          required={required}
          className={`${
            type === "checkbox" ? "w-fit" : "w-full"
          } ${customStyles} pt-3 pb-3 pl-2 pr-2 border-[1px] border-shade rounded-md outline-0 leading-none text-base transition-colors duration-300 disabled:cursor-not-allowed focus:border-theme`}
        />
      )}
      {type === "textarea" && (
        <textarea
          onChange={onChange}
          id={id}
          name={name}
          value={value}
          aria-label={ariaLabel}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`${customStyles} pt-3 pb-3 pl-2 pr-2 border-[1px] border-shade rounded-md outline-0 leading-none text-base transition-colors duration-300 focus:border-theme ${font.className}`}
          rows="5"
        ></textarea>
      )}
    </div>
  );
}
