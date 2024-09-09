import Icon from "./icon";

export default function Button({
  ariaLabel,
  label,
  icon,
  secondaryIcon,
  iconSize,
  variant = "primary",
  type = "button",
  onClick,
  customStyles = {},
  loading,
  disabled,
}) {
  const variants = {
    variant: {
      primary:
        "bg-theme text-background hover:border-theme hover:bg-transparent hover:text-theme",
      outline:
        "bg-transparent border-[1px] border-theme text-theme hover:bg-theme hover:text-background",
      ghost:
        "bg-transparent shadow-rg hover:border-theme_variant hover:text-theme",
      destructive:
        "p-3 bg-transparent border-destructive text-destructive hover:bg-destructive hover:text-background",
      close:
        "!p-2 bg-transparent text-font hover:bg-font hover:text-background",
    },
  };

  return (
    <button
      type={type}
      className={`button justify-center disabled:cursor-not-allowed ${customStyles} ${
        variants.variant[variant]
      } ${!label && "p-3"}`}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {!loading && secondaryIcon && (
        <Icon icon={secondaryIcon} size={iconSize} />
      )}
      {label && <span>{label}</span>}
      {icon && <Icon size={iconSize} icon={loading ? "spinner" : icon} />}
    </button>
  );
}
