import {useState, useEffect, useContext} from "react";
// import {ShopContext} from "../../context";
import Preloader from "../preloader";

import GoodsService from "../../../services/goods-service";
const getData = new GoodsService();

const Shop = () => {
    const [isGoods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)

    // componentDidMount
    useEffect(() => {
        getData.getGoodsList()
            .then(response => {
                //передаем список товаров в useState
                setGoods(response.featured);
            })
            .catch(error => console.error(error));
        // eslint-disable-next-line
    }, []);

    return(
        <View
            loading={loading}
        />
    )
};

export default Shop;

const View = (props) => {
    const {
        loading,
    } = props;

    return(
        <>
            {
                loading ? <Preloader /> :
                    <p>Test</p>
            }
        </>
    )
};