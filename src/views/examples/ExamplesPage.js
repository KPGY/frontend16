import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
// import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Pagination from "./index-sections/Pagination.js";
import Carousel from "./index-sections/Carousel.js";

function ExamplesPage() {
  React.useEffect(() => {
    document.body.classList.add("examples-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("examples-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <BasicElements />
          <Pagination />
          <Carousel />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default ExamplesPage;