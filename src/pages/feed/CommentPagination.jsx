import React from "react";
import { useSearchParams } from "react-router-dom";

const CommentPagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the current page from the URL search params or default to 1
  const currentPage = searchParams.get("commentpage")
    ? Number(searchParams.get("commentpage"))
    : 1;

  const pageCount = Math.ceil(count / 5);

  function previous() {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    searchParams.set("commentpage", prevPage);
    setSearchParams(searchParams);
  }

  function next() {
    const nextPage = currentPage < pageCount ? currentPage + 1 : pageCount;
    searchParams.set("commentpage", nextPage);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <button onClick={previous} disabled={currentPage === 1}>
        Previous
      </button>
      <h1>{currentPage}</h1>
      <button onClick={next} disabled={currentPage === pageCount}>
        Next
      </button>
    </div>
  );
};

export default CommentPagination;
