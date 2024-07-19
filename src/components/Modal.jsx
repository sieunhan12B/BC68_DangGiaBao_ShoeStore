import React from "react";

const Modal = (props) => {
  const classNameP = "my-3";
  return props.shoes.id ? (
    <div className="p-5 border-4 border-black flex">
      <div className="mr-20">
        <img src={props.shoes.image} alt="" />
      </div>
      <div className="text-left text-3xl">
        <h3 className="mb-3">Thông số kỹ thuật</h3>
        <p className={classNameP}>Tên: {props.shoes.name}</p>
        <p className={classNameP}>Giá :{props.shoes.price} $</p>
        <p className={classNameP}>Mô tả: {props.shoes.description}</p>
        <button className="bg-black text-white py-2 px-5 mt-3 rounded-md">
          Buy now
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
