export default function GridView({
  children,
  childMinWidth,
  childMaxWidth,
  customStyles = "",
}) {
  return (
    <div
      className={`grid gap-3 mt-2 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(245px,_.5fr))] ${customStyles}`}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${childMinWidth}, ${childMaxWidth}))`,
      }}
    >
      {children}
    </div>
  );
}
