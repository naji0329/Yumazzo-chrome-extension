import { Suspense, useMemo, useState } from "react";
import SearchInput from "./components/SearchInput";

import { dishes } from "./constants/dishes";
import Dish from "./components/Dish";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

function App() {
  const [search, setSearch] = useState("Spanish Paella");

  const dish = useMemo(
    () =>
      dishes.find((dish) => dish.name.toLowerCase() === search.toLowerCase()),
    [search]
  );

  return (
    <div className="w-[400px] p-6 bg-primary">
      <SearchInput value={search} changeValue={setSearch} />
      <Suspense fallback={<Loading />}>
        {dish ? <Dish dish={dish} /> : <NotFound />}
      </Suspense>
    </div>
  );
}

export default App;
