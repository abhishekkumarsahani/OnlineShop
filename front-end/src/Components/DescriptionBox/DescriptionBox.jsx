import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An E-commerce website is an online platform where we can have more
          htings bu online like sime products are cloths and electronics goods
          and services and far better than the maximum retails shops. Nowdays,
          everyone prefer to do online shopping where we cna have many more
          things together.
        </p>
        <p>
          E-commerce websites typically display products or services and
          detailed description, images prices and any available vary sizes like
          (e,g.). Each product usually hast its own didication level with
          relevant information
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
