export default function Badge({ status }) {
  const stats = {
    pending: "#FF5858",
    delivered: "#0DA084",
    new: "#ef6c00",
    sale: "#63abd8",
    popular: "#e64c6f",
    publish: "#0DA084",
  };

  return (
    <div
      className="w-fit h-fit p-2 rounded-md capitalize text-sm text-background"
      style={{ backgroundColor: stats[status] }}
    >
      <span>{status}</span>
    </div>
  );
}
