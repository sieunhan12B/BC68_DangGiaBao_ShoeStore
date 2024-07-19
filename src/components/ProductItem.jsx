import React from "react";

const ProductItem = ({ item, layDuLieuGiay }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="border-black item text-left border-2 border-spacing-2 rounded-2xl m-3 p-5">
        <img src={item.image} alt="" />
        <h3 className="text-2xl">{item.name}</h3>
        <p>{item.id}</p>
        <p className="mb-5">{item.price}$</p>

        <button
          onClick={() => {
            layDuLieuGiay(item);
            scrollToTop();
          }}
          className=" bg-black text-white py-2 px-5  rounded-md"
        >
          Add to cart
          <i className="fa-solid fa-cart-shopping ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
