import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getMealById} from "../../API/meal-api";

import Preloader from "../../components/layout/preloader";
const Recipe = () => {
    const {name} = useParams()
    const [isRecipe, setRecipe] = useState([])

    useEffect(() => {
        getMealById(name)
            .then(response => setRecipe(response.meals))
    }, [name])

    return <View isRecipe={isRecipe}/>
}

export default Recipe

const View = ({isRecipe}) => {
    return(
        <>
            {
                !isRecipe.length ? <Preloader /> :
                    <>
                        {
                            isRecipe.map(item => {
                                const {
                                    idMeal,
                                    strMealThumb,
                                    strCategory,
                                    strMeal,
                                    strArea,
                                    strInstructions,
                                } = item

                                return(
                                    <div className="card" key={idMeal}>
                                        <div className="card-image">
                                            <img src={strMealThumb} alt={idMeal}/>
                                            <span className="card-title">{strCategory}</span>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title">{strMeal}</span>
                                            <p>{strInstructions}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
            }
        </>
    )
}