import "./Item.css";
const Item = ({item}) => {
    return(
        <div className="Item">
            <img src={item?.image} width={120} height={150} alt="item" />
            <h1>Name: {item?.title}</h1>
            <h1>Price: ${item?.price?.toFixed(2)}</h1>
            <button className="btn">Add to Cart</button>
        </div>
    );
};
export default Item;