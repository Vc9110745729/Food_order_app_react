import { Restaurant_cards } from "./Restaurant_cards";
import { resList } from "../utils/mockdata";
import { useState } from "react";

// let listOfRestaurants = [
  
// ];

export const Body = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState([
    {
    info: {
      id: "23798",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/75855305-76ff-4551-affd-d2f0c58ddd35_23796.JPG",
      locality: "Cunningham Road",
      areaName: "Central Bangalore",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
    },
  },
  {
    info: {
      id: "30083",
      name: "California Burrito",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/d975fca2-038b-43e6-9c72-31d7113c8ae0_30083.jpg",
      locality: "Sadashivanagar ",
      areaName: "sadashiva nagar ",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Beverages",
        "Snacks",
        "Desserts",
        "Fast Food",
      ],
      avgRating: 4.6,
    },
  },
  {
    info: {
      id: "23796",
      name: "Ruchi's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/75855305-76ff-4551-affd-d2f0c58ddd35_23796.JPG",
      locality: "Cunningham Road",
      areaName: "Central Bangalore",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.4,
      parentId: "2456",
      avgRatingString: "4.4",
    },
  },]);
  // let listOfRestaurants = [];
  return (
    <div className="body">
      <div
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.5
          );
          setListOfRestaurants(filteredList);
          console.log(filteredList);
        }}
        onMouseOver={() => {
          console.log("mouse hovered on the button");
        }}>
        <button>Top rated</button>
      </div>
      <div className="res-container">
        {/* <Restaurant_cards resData={resList[0]} />
        <Restaurant_cards resData={resList[1]} />
        <Restaurant_cards resData={resList[2]} />
        <Restaurant_cards resData={resList[3]} /> 
        <Restaurant_cards resData={resList[4]} /> */}
        {listOfRestaurants.map((restaurant, index) => (
          <Restaurant_cards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
