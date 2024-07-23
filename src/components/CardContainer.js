import RestaurantCard from "./RestaurantCard";

const CardContainer = ({ resList }) => {
  return (
    <div className="card-container">
      {resList.map((e) => (
        <RestaurantCard resData={e.info} key={e.info.id} />
      ))}
    </div>
  );
};

export default CardContainer;
