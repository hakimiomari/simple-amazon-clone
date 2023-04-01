import React from "react";
import Card from "./Card";
import Images from "./Images";

const Data = [
  { img: Images.img1, title: "first card", price: 12.99 },
  { id: 1, img: Images.img2, title: "second card", price: 22.99 },
  { id: 2, img: Images.img3, title: "third card", price: 14.99 },
  { id: 3, img: Images.img4, title: "fourth card", price: 32.99 },
  { id: 4, img: Images.img5, title: "fifth card", price: 13.99 },
  { id: 5, img: Images.img6, title: "sixth card", price: 54.99 },
  { id: 6, img: Images.img7, title: "seventh card", price: 112.99 },
];
const Product = () => {
  return (
    <div className="product">
      {Data.map((item) => (
        <Card
          id={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Product;
