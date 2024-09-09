export default function Heading({
  title,
  title_md,
  subtitle,
  customStyles = "",
}) {
  return (
    <hgroup className={`${customStyles} capitalize`}>
      {title && <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>}
      {title_md && <h3 className="text-xl font-bold">{title_md}</h3>}
      {subtitle && (
        <h4 className="text-base font-normal text-mute first-letter:capitalize">
          {subtitle}
        </h4>
      )}
    </hgroup>
  );
}
