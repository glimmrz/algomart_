import Heading from "./heading";

export default function Section({
  children,
  title,
  subtitle,
  contentStyles = "",
  sectionStyles = "",
}) {
  return (
    <section className={`mt-6 ${sectionStyles}`} aria-label={title}>
      {title && (
        <div className="mb-2">
          <Heading title={title} subtitle={subtitle} />
        </div>
      )}
      <div className={contentStyles}>{children}</div>
    </section>
  );
}
