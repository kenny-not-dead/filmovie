import Admin from "../../components/admin/Admin";

export function AdminPage(props: any) {
  return (
    <>
      <Admin
        newCatalogData={props.newCatalogData}
        deleteItem={props.deleteItem}
        save={props.save}
      />
    </>
  );
}
