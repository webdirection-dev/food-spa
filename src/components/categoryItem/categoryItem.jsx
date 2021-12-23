import {Link} from "react-router-dom";
import './categoryItem.css'

const CategoryItem = (props) => {
    const {item} = props
    return <View item={item}/>
}

export default CategoryItem

const View = (items) => {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription,
    } = items.item

    return(
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory}/>
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className='btn red darken-2'>Watch category</Link>
            </div>
        </div>
    )
}
