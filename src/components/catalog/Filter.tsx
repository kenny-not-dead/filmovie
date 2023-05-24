import React, { useState } from "react";
import { Selectsort } from "./Selectsort";

export function Filter() {
  const [selectedSort, setSelectedSort] = useState("like");

  const sortCatalog = (sort: string) => {
    setSelectedSort(sort);
  };

  return (
    <div>
      <Selectsort
        sortCatalog={sortCatalog}
        value={selectedSort}
        option={[
          { value: "like", name: "По количеству оценок" },
          { value: "stars", name: "По рейтингу" },
          { value: "date", name: "По дате выхода" },
          { value: "abc", name: "По алфавиту" },
        ]}
      />
    </div>
  );
}
