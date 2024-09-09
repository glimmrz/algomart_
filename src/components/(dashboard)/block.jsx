export default function Block({
  children,
  customStyles = "",
  title,
  headerContent,
}) {
  return (
    <section className="bg-background rounded-md pl-4 pr-4 pt-8 pb-8">
      {/* Block Heading */}
      <div className="flex items-center justify-between">
        <h3 className="capitalize before:content-[''] relative text-lg font-semibold text-heading before:absolute before:-left-4 before:top-0 before:bottom-0 before:m-auto before:h-7 before:w-1 before:rounded-tr-md before:rounded-br-md before:bg-theme lg:before:h-8">
          {title}
        </h3>
        {headerContent && <div>Other content</div>}
      </div>

      {/* Block content */}
      {children && <div className={`${customStyles} mt-6`}>{children}</div>}
    </section>
  );
}
