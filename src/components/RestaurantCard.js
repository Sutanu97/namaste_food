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
      <p>{resData.name}</p>
      <p>{resData.areaName}</p>
    </div>
  </div>
);

export default RestaurantCard;
