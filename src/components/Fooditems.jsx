import Items from "./Items";

const Fooditems = ({ items }) => {

    return (
        <ul>
            {items.map((item) => (

                <Items key={item} foodItem={item} />
            ))}
        </ul>
    )
}

export default Fooditems