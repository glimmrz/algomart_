export default function Discount({ price, discounted_price }) {
  return (
    <span className="w-fit p-1 bg-theme rounded-md text-xs font-bold text-background">
      {(((price - discounted_price) / price) * 100).toFixed(2)}% off
    </span>
  );
}
