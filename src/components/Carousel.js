import React from "react";
import Carousel from 'react-material-ui-carousel'
function Carousels() {
  var items = [
    {
      image: "https://www.techdee.com/wp-content/uploads/2020/04/1587225719_179_List-of-Top-10-Popular-Online-Games-2020.png",
      
    },
    {
      image: "https://i0.wp.com/s3.ap-south-1.amazonaws.com/img.paisawapas/images/2021/05/18131128/COD-Mobile.png?fit=1185%2C667&ssl=1",
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
    }
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <img  src={item.image} key={i} className="w-full h-[300px]" />
      ))}
    </Carousel>
  );
}

export default Carousels;
