import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <div className="grid grid-cols-3 gap">
      {props.arrSanPham.map((item, index) => {
        return <ProductItem item={item} layDuLieuGiay={props.layDuLieuGiay} />;
      })}
    </div>
  );
};

export default ProductList;
