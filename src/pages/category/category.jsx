import {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {getFilteredCategory} from "../../API/meal-api";

import Preloader from "../../components/layout/preloader";
import MealsList from "../../components/mealsList";

const Category = () => {
    const {goBack} = useHistory()
    const {name} = useParams()
    const [isMeals, setMeals] = useState([])

    useEffect(() => {
        getFilteredCategory(name)
            .then(response => setMeals(response.meals))
    }, [name])

    return <View
        isMeals={isMeals}
        goBack={goBack}
    />
}

export default Category

const View = ({isMeals, goBack}) => {
    return(
        <>
            <button
                className='btn'
                onClick={goBack}
            >go back</button>

            {
                !isMeals.length ? <Preloader /> : <MealsList key={isMeals.idMeal} isMeals={isMeals}/>
            }
        </>
    )
}