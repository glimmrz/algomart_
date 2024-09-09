"use client";
import TableRow from "./table-row";

export default function Table({ data, requestUrl, itemName }) {
  return (
    <div className="overflow-x-auto">
      <table className="mt-8 capitalize rounded-md w-full min-w-full overflow-hidden bg-background shadow-rg text-left">
        <thead className="bg-shade">
          <tr>
            {data.tableHeaders?.map((header, index) => (
              <th className="p-3 text-sm font-semibold" key={index}>
                {header.label}
              </th>
            ))}
            <th className="p-3 text-sm font-semibold text-center">actions</th>
          </tr>
        </thead>
        <tbody>
          {data.tableData?.map((row, index) => (
            <TableRow
              key={index}
              rowData={row}
              columns={data.tableHeaders}
              requestUrl={requestUrl}
              itemName={itemName}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
