import { CDN_URL } from "../utils/constants";

export const Restaurant_cards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  console.log(props);

  return (
    <div className="restaurant-cards">
      <img
        className="res-image"
        alt="This is a pizzas image"
        src=
          {CDN_URL + cloudinaryImageId} 
      />
      <div className="res-details">
        <h3>{name}</h3>
        {/* <p>{cuisines}</p> */}
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}Stars</p>
        <p> Cost : {costForTwo}</p>
        {/* <p>Deliviry time : {sla.slaString} minutes </p> */}
      </div>
    </div>
  );
};
