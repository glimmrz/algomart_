export default function Select({
  label,
  id,
  options,
  keyName,
  keyValue = "_id",
  required,
  name,
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className={`capitalize ${
            required && "after:content-['*'] after:text-destructive"
          }`}
        >
          {label}
        </label>
      )}
      <select
        name={name}
        id={id}
        className="capitalize w-full bg-transparent pt-3 pb-3 pl-2 pr-2 border-[1px] border-shade rounded-md outline-0 leading-none text-base transition-colors duration-300 focus:border-theme"
        required={required}
      >
        <option value="">select an option</option>
        {options?.map((option, index) => {
          return (
            <option value={option[keyValue]} key={index}>
              {option[keyName]}
            </option>
          );
        })}
      </select>
    </div>
  );
}
