import React from "react";
import PropTypes from "prop-types";
import Left2x from "../assets/left2x.svg";
import Left1x from "../assets/left1x.svg";
import Right1x from "../assets/right1x.svg";
import Right2x from "../assets/right2x.svg";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const MAX_VISIBLE_PAGES = 5;

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handlePreviousClick2 = () => {
    if (currentPage > 2) {
      onPageChange(currentPage - 2);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  const handleNextClick2 = () => {
    let number2 = totalPages - currentPage;
    if (number2 > 0) {
      onPageChange(currentPage + 2);
    }
  };

  let startPage, endPage;
  if (totalPages <= MAX_VISIBLE_PAGES) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.ceil(MAX_VISIBLE_PAGES / 2)) {
      startPage = 1;
      endPage = MAX_VISIBLE_PAGES;
    } else if (currentPage + Math.floor(MAX_VISIBLE_PAGES / 2) >= totalPages) {
      startPage = totalPages - MAX_VISIBLE_PAGES + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(MAX_VISIBLE_PAGES / 2);
      endPage = currentPage + Math.floor(MAX_VISIBLE_PAGES / 2);
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`rounded-lg cursor-pointer bg-[#ffffff] flex flex-row items-start justify-start py-[5px] pr-2.5 pl-[11px] border-[1px] border-solid border-[#E5E2EE] ${
            currentPage === i ? "!bg-[#088269] text-white" : ""
          } ${i === endPage ? "pr-[13px]" : ""}`}
          onClick={() => onPageChange(i)}
        >
          <div className="relative font-semibold inline-block min-w-[9px]">
            {i}
          </div>
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="paginations select-none self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-sm">
      <div className="w-[328px] flex flex-row items-start justify-start gap-[5px] max-w-full">
        <div
          className={`!h-8 !w-8 rounded-lg bg-[#ffffff] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE] ${
            currentPage <= 2 ? "opacity-50" : "cursor-pointer"
          }`}
          onClick={handlePreviousClick2}
        >
          <img
            className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={Left2x}
          />
        </div>
        <div
          className={`h-8 w-8 rounded-lg bg-[#ffffff] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE] ${
            currentPage === 1 ? "opacity-50" : "cursor-pointer"
          }`}
          onClick={handlePreviousClick}
        >
          <img
            className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={Left1x}
          />
        </div>
        {renderPageNumbers()}
        <div
          className={`h-8 w-8 rounded-lg bg-[#ffffff] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE] ${
            currentPage === totalPages ? "opacity-50" : "cursor-pointer"
          }`}
          onClick={handleNextClick}
        >
          <img
            className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={Right1x}
          />
        </div>
        <div
          className={`h-8 w-8 rounded-lg bg-[#ffffff] box-border flex flex-col items-center justify-center py-2.5 px-1.5 border-[1px] border-solid border-[#E5E2EE] ${
            totalPages - currentPage == 1 ? "opacity-50" : "cursor-pointer"
          }`}
          onClick={handleNextClick2}
        >
          <img
            className="w-[17px] h-[17px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={Right2x}
          />
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
