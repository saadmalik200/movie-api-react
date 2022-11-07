import "./App.css";
import Card from "./components/Card";
import { FcSearch } from "react-icons/fc";
import { useContext, useState } from "react";
import { Context } from "./components/Context";
import FetchData from "./components/FetchData";

function App() {
  const { state, dispatch } = useContext(Context);

  const [search, setSearch] = useState("");

  const handleClick = () => {
    dispatch({ type: "SEARCH", payload: search });
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="flex mt-[2rem] justify-center flex-col items-center">
        <div className=" border-2  p-2 flex items-center gap-[20px] mb-[2rem] justify-center h-full">
          <input
            value={search}
            className="border-2"
            placeholder="search movie name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FcSearch onClick={handleClick} />
        </div>
        <FetchData />
        <Card />
      </div>
    </div>
  );
}

export default App;
