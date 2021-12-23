import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getFilteredCategory} from "../../API/meal-api";

import Preloader from "../../components/layout/preloader";
import MealsList from "../../components/mealsList";

const Category = () => {
    const {name} = useParams()
    const [isMeals, setMeals] = useState([])

    useEffect(() => {
        getFilteredCategory(name)
            .then(response => setMeals(response.meals))
    }, [name])

    return <View isMeals={isMeals}/>
}

export default Category

const View = ({isMeals}) => {
    return(
        <>
            {
                !isMeals.length ? <Preloader /> : <MealsList key={isMeals.idMeal} isMeals={isMeals}/>
            }
        </>
    )
}