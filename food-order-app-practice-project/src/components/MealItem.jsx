import { currencyFormatter } from "./util/formatting";
import Button from "./UI/Button";
export default function MealItem( {meal} ) {
    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="" />
                <h3>{meal.title}</h3>
                <div>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="description">{meal.description}</p>
                </div>
                <p>
                <Button>Add To Cart</Button>
                </p>
            </article>
        </li>
    )
}