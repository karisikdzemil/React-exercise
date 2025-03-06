import { useEffect, useState } from "react"
export default function Meals(){
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        async function fetchMeals(){
        const response = await fetch('http://localhost:3000/meals');
        if(!response.ok){
            // Do something...
        }
        const resMeals = await response.json();
        setMeals(resMeals);
        console.log(meals)
    }
    fetchMeals()
    }, [])
    

    return (
        <ul id="meals">
            {meals.map((meal) => (
                <li key={meal.id}>{meal.name}</li>
            ))}
        </ul>
    )
}