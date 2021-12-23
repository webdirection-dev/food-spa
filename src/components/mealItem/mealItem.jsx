import {Link} from "react-router-dom";

const MealItem = ({item}) => {
    return <View item={item}/>
}

export default MealItem

const View = ({item}) => {

    const {
        idMeal,
        strMeal,
        strMealThumb,
    } = item

    return(
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className='btn red darken-2'>Watch recipe</Link>
            </div>
        </div>
    )
}
