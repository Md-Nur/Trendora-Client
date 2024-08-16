import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export interface Query {
  pageList: number[];
  uniqueBrands: string[];
  uniqueCategories: string[];
}

const Pagination = ({ pageList }: { pageList: number[] }) => {
  const location = useLocation();
  const currentPage = parseInt(location.search.split("=")[1] || "1");

  return (
    <div className="flex w-full justify-center my-10">
      <div className="join">
        <Link
          to={`/products?page=${currentPage > 1 ? currentPage - 1 : 1}`}
          className="btn btn-accent join-item"
        >
          Prev
        </Link>
        {pageList.map((page) => (
          <NavLink
            key={page}
            to={`/products?page=${page}`}
            className={`btn join-item btn-neutral ${
              currentPage === page ? "btn-active" : ""
            }`}
          >
            {page}
          </NavLink>
        ))}
        <NavLink
          to={`/products?page=${
            pageList.length === currentPage ? currentPage : currentPage + 1
          }`}
          className="btn btn-accent join-item"
        >
          Next
        </NavLink>
      </div>
    </div>
  );
};

export default Pagination;
