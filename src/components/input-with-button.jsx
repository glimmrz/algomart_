import Button from "./button";
import Input from "./input";

export default function InputButton({
  buttonLabel,
  buttonIcon,
  buttonAriaLabel,
  inputType,
  inputAriaLabel,
  placeholder,
}) {
  return (
    <form className="flex rounded-md">
      <Input
        placeholder={placeholder}
        required
        ariaLabel={inputAriaLabel}
        type={inputType}
        customStyles="!rounded-tr-none !rounded-br-none"
      />
      <Button
        label={buttonLabel}
        ariaLabel={buttonAriaLabel}
        icon={buttonIcon}
        type="submit"
        variant="primary"
        customStyles="!rounded-tl-none !rounded-bl-none hover:!bg-theme_variant"
      />
    </form>
  );
}
