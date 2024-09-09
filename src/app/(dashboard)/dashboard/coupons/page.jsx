import Block from "@/components/(dashboard)/block";
import Table from "@/components/(dashboard)/table/table";
import { getData } from "@/utils/apiCalls";
import React from "react";

export default async function Page() {
  const res = await getData("coupons", 0);

  const tableInfo = {
    tableHeaders: [
      { label: "code", key: "code" },
      {
        label: "user discount",
        key: "discount",
      },
      {
        label: "comission",
        key: "comission",
      },
      { label: "user", key: "user.firstName" },
    ],
    tableData: res.response.payload,
  };

  return (
    <div>
      <Block title="view coupon codes"></Block>

      <Table data={tableInfo} />
    </div>
  );
}
