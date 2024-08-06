import { CDN_RESTAURANT_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => (
  <div className="restarurant-card">
    <div className="restaurant-img">
      <img
        src={CDN_RESTAURANT_IMG_URL + resData.cloudinaryImageId}
        alt="restaurant-img"
      ></img>
    </div>
    <div className="restaurant-info">
      <b>{resData.name}</b>
      <p>{resData.areaName}</p>
      <p>{resData.costForTwo}</p>
      <p>{resData.cuisines.join(", ")}</p>
    </div>
  </div>
);

export default RestaurantCard;
