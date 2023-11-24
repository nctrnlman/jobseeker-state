import React from "react";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
}) {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-between h-10 text-base pt-10">
      <div>
        Showing {Math.min(1 + pageSize * (currentPage - 1), totalItems)} to{" "}
        {Math.min(pageSize * currentPage, totalItems)} of {totalItems} Entries
      </div>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10">
          <li>
            <a
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="">Previous</span>
            </a>
          </li>
          {generatePageNumbers().map((pageNumber) => (
            <li key={pageNumber}>
              <a
                onClick={() => onPageChange(pageNumber)}
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  pageNumber === currentPage
                    ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={() =>
                onPageChange(Math.min(totalPages, currentPage + 1))
              }
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
