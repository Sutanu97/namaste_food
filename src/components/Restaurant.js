import { useEffect, useState } from "react";
import MenuCategory from "./MenuCategory";
import ShimmerRestaurant from "./ShimmerRestaurant";
import { SEARCH_TIMER } from "../utils/constants";

const starLogo = require("../images/icons8-star-material-rounded-16.png");

const Restaurant = ({ resId }) => {
  const [resData, setResData] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  fetchMenu = async () => {
    const readableStream = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139298&lng=77.2088282&restaurantId=651212&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await readableStream.json();
    setResData(data);
    const menu =
      data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    menu.shift();
    setMenu(menu);
    setFilteredMenu(menu);
  };

  const filterMenu = () => {
    console.log("filterMenu called");
    // const filteredMenuLocal = menu.filter((category) =>

    // );
    // setFilteredMenu(filteredMenuLocal);
  };

  const debounce = () => {
    let timeout;
    return () => {
      console.log("executing debounce");
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        filterMenu();
      }, SEARCH_TIMER);
    };
  };
  const performDebouncedSearch = debounce();
  const info = resData?.data?.cards[2]?.card?.card?.info;
  console.log(filteredMenu);
  if (!info || !menu) return <ShimmerRestaurant />;

  return (
    <div>
      <div>
        <h1>{info.name}</h1>
        <div className="res-info">
          <div style={{ margin: "10px 0" }}>
            <span>
              <img src={starLogo} alt="star-logo"></img>
            </span>
            <span style={{ fontWeight: "bold" }}>
              {info.avgRating}
              <span /> ({info.totalRatingsString})
            </span>
            <span style={{ marginLeft: "20px" }}>
              ₹{info.costForTwo / 100} for two
            </span>
          </div>
          <p style={{ marginTop: "10px", marginBottom: "10px" }}>
            {info.cuisines.join(",  ")}
          </p>
          <p>Outlet : {info.areaName}</p>
          <p>Estimated SLA : {info.sla.slaString}</p>
        </div>
      </div>
      <main>
        <div className="search-bar">
          <input
            type="text"
            value={filterText}
            placeholder="Search for dishes"
            className="search-dishes"
            onChange={(e) => {
              setFilterText(e.target.value);
              performDebouncedSearch();
            }}
          ></input>
        </div>
        <div className="filter"></div>
        <div className="content">
          {filteredMenu.map((category, i) => (
            <MenuCategory key={i} menuDetails={category} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Restaurant;
