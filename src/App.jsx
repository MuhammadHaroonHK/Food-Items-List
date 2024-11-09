import Fooditems from "./components/Fooditems.jsx";
import Heading from "./components/Heading.jsx";
import Error from "./components/Error.jsx";
import Container from "./components/Container.jsx";
import Input from "./components/Input.jsx";
import { useState } from "react";

function App() {

  //let [foodItems, newFoodItem] = useState(["Salad", "Apple"]);
  let [foodItems, newFoodItem] = useState([]);

  let ondown = (event) => {
    if (event.key === "Enter") {
      let newItems = event.target.value;
      let newList = [...foodItems, newItems];
      newFoodItem(newList);
      event.target.value = "";
    }
  };


  return (
    <>
      <Container>
        <Heading />
        <Input keydown={ondown} />
        <Error items={foodItems} />
        <Fooditems items={foodItems} />
      </Container>
    </>
  )
}

export default App
