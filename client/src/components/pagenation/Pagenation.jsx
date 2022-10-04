import React, { useState } from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";

const Paging = ({ page, setPage, datas, filterDatas }) => {
  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  };
  return (
    <PaginationStyle>
      <Pagination
        activePage={page}
        totalItemsCount={50}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </PaginationStyle>
  );
};

const PaginationStyle = styled.div`
  > {
    .pagination {
      display: flex;
      justify-content: center;
      margin-top: 15px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    ul.pagination li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }

    ul.pagination li:first-child {
      border-radius: 5px 0 0 5px;
    }

    ul.pagination li:last-child {
      border-radius: 0 5px 5px 0;
    }

    ul.pagination li a {
      text-decoration: none;
      color: black;
      font-size: 1rem;
    }

    ul.pagination li.active a {
      color: white;
    }

    ul.pagination li.active {
      background-color: green;
    }

    ul.pagination li a:hover,
    ul.pagination li a.active {
    }

    .page-selection {
      width: 48px;
      height: 30px;
      color: green;
    }
  }
`;

export default Paging;
