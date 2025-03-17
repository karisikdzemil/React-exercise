import { currencyFormatter } from "./util/formatting";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";
export default function MealItem( {meal, ...props} ) {
   const cartCtx =  useContext(CartContext);

    function handleAddItem(){
        cartCtx.addItem(meal);
    }

    return(
        <li {...props} className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <h3>{meal.title}</h3>
                <div>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="description">{meal.description}</p>
                </div>
                <p>
                <Button onClick={handleAddItem}>Add To Cart</Button>
                </p>
            </article>
        </li>
    )
}