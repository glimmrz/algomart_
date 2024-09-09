export default function Price({ discounted_price, price, customStyles = "" }) {
  return (
    <div className={customStyles}>
      {discounted_price < price && (
        <span className="font-bold text-base text-inherit mr-1">
          ৳{(discounted_price / 100).toFixed(2)}
        </span>
      )}
      <span
        className={`text-sm text-mute font-bold line-through ${
          discounted_price > price && "!text-base !text-inherit !no-underline"
        }`}
      >
        ৳{(price / 100).toFixed(2)}
      </span>
    </div>
  );
}
