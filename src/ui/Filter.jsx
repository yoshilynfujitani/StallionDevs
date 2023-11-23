import { useSearchParams } from "react-router-dom";

function Filter({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("category") || "";

  function handleClick(value) {
    searchParams.set("category", value);

    setSearchParams(searchParams);
  }

  return (
    <>
      {" "}
      <div className="space-x-10">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleClick(option)}
            disabled={option === currentFilter}
          >
            <h1 className="transition-all hover:text-blue-500 font-thin text-sm">
              {option}
            </h1>
          </button>
        ))}
      </div>
    </>
  );
}

export default Filter;
