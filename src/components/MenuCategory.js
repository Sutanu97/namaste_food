import MenuItem from "./MenuItem";

const MenuCategory = ({ menuDetails }) => {
  const items = menuDetails?.card?.card?.itemCards;
  if (!items) return;

  return (
    <div>
      <h3>{menuDetails.card.card.title}</h3>
      {items.map((item, index) => (
        <>
          <MenuItem key={index} item={item.card.info} />
        </>
      ))}
      <div className="divider"></div>
    </div>
  );
};

export default MenuCategory;
