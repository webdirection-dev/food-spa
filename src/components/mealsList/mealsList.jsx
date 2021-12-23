import MealItem from "../mealItem/mealItem";

const MealsList = (props) => {
    const {
        isMeals = [],
    } = props

    return(
        <View isMeals={isMeals}/>
    )
}

export default MealsList

const View = (props) => {
    const {isMeals} = props

    return(
        <div className='list'>
            {
                isMeals.map(item => {
                    return <MealItem key={item.idMeal} item={item}/>
                })
            }
        </div>
    )
}