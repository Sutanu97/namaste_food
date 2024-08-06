import vegLogo from "../images/icons8-veg-color-16.png";
import nonVegLogo from "../images/icons8-non-veg-color-16.png";
import starLogo from "../images/icons8-star-material-rounded-16.png";
import { CDN_RESTAURANT_IMG_URL } from "../utils/constants";

const imgStyle = {
  height: "200px",
  width: "250px",
};

const MenuItem = ({ item }) => {
  return (
    <>
      <div className="menu-item">
        <div className="item-info">
          <span>
            <img
              src={item.isVeg === 1 ? vegLogo : nonVegLogo}
              alt="veg/non-veg logo"
            ></img>
          </span>
          <span className="menu-heading"> {item.name}</span>
          <h4>₹{item.price / 100}</h4>
          <span>
            <img src={starLogo} alt="star-logo"></img>
          </span>
          <span>
            {item.ratings.aggregatedRating.rating}(
            {item.ratings.aggregatedRating.ratingCountV2})
          </span>
          <p>{item.description}</p>
        </div>
        <div className="image-and-adder">
          {item.imageId ? (
            <>
              <img
                src={CDN_RESTAURANT_IMG_URL + item.imageId}
                style={imgStyle}
              />
              <button className="add-btn-with-img">ADD</button>
            </>
          ) : (
            <button className="add-btn-without-img">ADD</button>
          )}
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default MenuItem;
