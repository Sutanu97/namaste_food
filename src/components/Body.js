import CardContainer from "./CardContainer";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [topRestaurantSelection, setTopRestaurantSelection] = useState(
    "GET TOP RATED RESTAURANTS"
  );

  useEffect(() => {
    const loadRestaurants = async () => {
      let readStream = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      let data = await readStream.json();
      setRestaurantList(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setAllRestaurants(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };

    loadRestaurants();
  }, []);

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <div>
          <input
            type="text"
            placeholder="search restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <input
            type="button"
            onClick={(e) => {
              console.log(allRestaurants, searchText);
              console.log(
                allRestaurants.filter((e) =>
                  e.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
              setRestaurantList(
                allRestaurants.filter((e) =>
                  e.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
            value={"SEARCH"}
          />
        </div>

        <button type="button" className="btn" onClick={() => {}}>
          {topRestaurantSelection}
        </button>
      </div>
      <CardContainer resList={restaurantList} />
    </>
  );
};

export default Body;
