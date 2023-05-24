import React from "react";
import Table from "../table/Table";

export default function Admin(props: any) {
  return (
    <Table
      values={props.newCatalogData}
      deleteItem={props.deleteItem}
      save={props.save}
    />
  );
}
