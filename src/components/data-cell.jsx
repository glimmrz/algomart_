import Icon from "./icon";

export default function DataCell({ dataName, dataValue, href = null, icon }) {
  return (
    <div className="h-fit flex items-center gap-2 text-base">
      {icon && <Icon icon={icon} size={28} />}
      <div>
        <span className="block capitalize opacity-70">{dataName}</span>
        {!href && <span className="block capitalize">{dataValue}</span>}
        {href && (
          <a href={href} className="block normal-case">
            {dataValue}
          </a>
        )}
      </div>
    </div>
  );
}
