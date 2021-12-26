import {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import {getMealById} from "../../API/meal-api";

import Preloader from "../../components/layout/preloader";
import './recipe.css'

const Recipe = () => {
    const {goBack} = useHistory()
    const {name} = useParams()
    const [isRecipe, setRecipe] = useState([])

    useEffect(() => {
        getMealById(name)
            .then(response => setRecipe(response.meals))
    }, [name])

    return <View
        isRecipe={isRecipe}
        goBack={goBack}
    />
}

export default Recipe

const View = ({isRecipe, goBack}) => {
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
                                    strYoutube,
                                } = item

                                return(
                                    <div className="recipe" key={idMeal}>
                                        <img src={strMealThumb} alt={idMeal}/>
                                        <h1>{strMeal}</h1>
                                        <h6>Category: {strCategory}</h6>

                                        {strArea ? <h6>Area: {strArea}</h6> : null}

                                        <p>{strInstructions}</p>

                                        <table className='centered'>
                                            <thead>
                                                <tr>
                                                    <th>Ingredient</th>
                                                    <th>Measure</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Object.keys(isRecipe[0]).map(item => {
                                                        if (item.includes('Ingredient') && isRecipe[0][item]) {
                                                            return(
                                                                <tr key={item}>
                                                                    <td>{isRecipe[0][item]}</td>
                                                                    <td>
                                                                        {
                                                                            isRecipe[0][`strMeasure${item.slice(13)}`]
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            )
                                                        } return null
                                                    })
                                                }
                                            </tbody>
                                        </table>

                                        {
                                            strYoutube ?
                                            (
                                                <div className='row'>
                                                    <h5 style={{margin: '2rem 0 1.5rem'}}>Video Recipe</h5>
                                                    <iframe
                                                        title={idMeal}
                                                        src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                                                        frameBorder="0"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            ) :
                                            null}

                                    </div>
                                )
                            })
                        }
                    </>
            }

            <button
                className='btn'
                onClick={goBack}
            >go back</button>
        </>
    )
}