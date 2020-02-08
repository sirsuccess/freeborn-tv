import React, { useState, useEffect } from "react";
import Pagination from "react-js-pagination";

import VideoData from "../../../videoData";
import "./VideoList.css";

export default function VideoList() {
  const [tableData, setableData] = useState(VideoData);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(9);

  // Get current tableData
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentTableData = tableData.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div className="VideoList">
        {currentTableData.map((item, index) => (
          <div className="videoitem" key={index}>
            <iframe
              width="100%"
              height="100%"
              src={item.url}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination
          hideFirstLastPages
          pageRangeDisplayed={2}
          activePage={currentPage}
          itemsCountPerPage={dataPerPage}
          totalItemsCount={VideoData.length}
          onChange={paginate}
          prevPageText="Previous"
          nextPageText="Next"
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </>
  );
}
