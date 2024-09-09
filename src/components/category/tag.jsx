export default function Tag({ tag, onClick }) {
  return (
    <div
      className="pt-1 pb-1 pl-4 pr-4 bg-theme_variant rounded-md text-theme cursor-pointer"
      role="button"
      onClick={onClick}
    >
      <span>{tag}</span>
    </div>
  );
}
