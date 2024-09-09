import Icon from "./icon";

export default function TotalCard({ data }) {
  return (
    <div className="bg-accent rounded-md p-4 border-b-4 border-theme">
      <div className="flex items-center justify-between gap-4">
        <Icon icon={data?.icon} size={64} />
        <div className="flex flex-col gap-2 capitalize">
          <span className="text-base">{data?.dataKey}</span>
          <span className="font-bold text-3xl">{data?.dataValue}</span>
        </div>
      </div>
    </div>
  );
}
