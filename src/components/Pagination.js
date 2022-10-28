import React from "react";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <button disabled={currentPage === 1} onClick={prevPage}>Previous</button>
      {pageNumbers.map((pgNumber) => (
        <button onClick={() => setCurrentPage(pgNumber)}>{pgNumber}</button>
      ))}
      <button disabled={currentPage === nPages} onClick={nextPage}>Next</button>
    </nav>
  );
}

export default Pagination;
