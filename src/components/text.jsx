export default function Text({ children, customStyles }) {
  return (
    <p
      className={`text-base font-light first-letter:uppercase ${customStyles}`}
    >
      {children}
    </p>
  );
}
