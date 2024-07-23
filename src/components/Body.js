import CardContainer from "./CardContainer";
import data from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  let mockData =
    data.data.success.cards[1].gridWidget.gridElements.infoWithStyle
      .restaurants;
  const [restaurantList, setRestaurantList] = useState(mockData);

  return (
    <>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setRestaurantList(
            restaurantList.filter((res) => res.info.avgRating >= 4.2)
          );
        }}
      >
        GET TOP RATED RESTAURANTS
      </button>
      <CardContainer resList={restaurantList} />
    </>
  );
};

export default Body;
