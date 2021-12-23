import CategoryItem from "../categoryItem";
import './categoryList.css'

const CategoryList = (props) => {
    const {
        isAllCategories = [],
    } = props

    return(
        <View isAllCategories={isAllCategories}/>
    )
}

export default CategoryList

const View = (props) => {
    const {isAllCategories} = props

    return(
        <div className='list'>
            {
                isAllCategories.map(item => {
                    return <CategoryItem key={item.idCategory} item={item}/>
                })
            }
        </div>
    )
}