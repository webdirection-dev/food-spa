import {useState, useEffect} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {getAllCategories} from "../../API/meal-api";
import Preloader from "../../components/layout/preloader";
import CategoryList from "../../components/categoryList";
import Search from "../../components/search";

const Home = () => {
    const [isAllCategories, setAllCategories] = useState([])
    const [isFilteredCategories, setFilteredCategories] = useState([])

    const {pathname, search} = useLocation()
    const {push} = useHistory()

    const handleSearch = (str) => {
        setFilteredCategories(
            isAllCategories.filter(
                item =>
                    item.strCategory
                        .toLowerCase()
                        .includes(str.toLowerCase())
            )
        )

        push({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories()
            .then(response => {
                setAllCategories(response.categories)
                setFilteredCategories(
                    search ? response.categories.filter(item => {
                        return item.strCategory
                            .toLowerCase()
                            .includes(
                                search
                                    .split('=')[1]
                                    .toLowerCase()
                            )
                    }) : response.categories
                )
            })
    }, [search])

    return(
        <>
            <Search cb={handleSearch} />

            {
                !isAllCategories.length ? <Preloader /> :
                    (
                        <CategoryList isAllCategories={isFilteredCategories}/>
                    )
            }
        </>
    )
}
export default Home