import {useState, useEffect} from "react";
import {getAllCategories} from "../../API/meal-api";
import Preloader from "../../components/layout/preloader";
import CategoryList from "../../components/categoryList";

const Home = () => {
    const [isAllCategories, setAllCategories] = useState([])

    useEffect(() => {
        getAllCategories()
            .then(response => setAllCategories(response.categories))
        // eslint-disable-next-string
    }, [])

    return(
        <>
            {
                !isAllCategories.length ? <Preloader /> :
                    (
                        <CategoryList isAllCategories={isAllCategories}/>
                    )
            }
        </>
    )
}
export default Home