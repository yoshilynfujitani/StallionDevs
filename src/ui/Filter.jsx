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
      <div className="space-x-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleClick(option)}
            disabled={option === currentFilter}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}

export default Filter;
