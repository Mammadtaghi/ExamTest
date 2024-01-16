import React from 'react'
import style from "./index.module.scss"
import { useWishlist } from '../../Context/wishlist Context'
import { useNavigate } from 'react-router-dom'

function Product({ props }) {

    const { Wihslist, AddToWishlist, isIn } = useWishlist()

    const navigate = useNavigate()

    function handleAdd(item) {
        AddToWishlist(item)
    }

    function handleInspect(id) {
        navigate(`/detail/${id}`)
    }

    return (
        <div id={style.Product}>
            <div className={style.imgBox}>
                <img src={props.image} alt="" />
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.price}>${props.price}</span>
            <button className={style.heartIcon} onClick={() => handleAdd(props)}>
                <i className={`fa-${isIn(props) ? "solid" : "regular"} fa-heart`}></i>
            </button>
            <button className={style.heartIcon} onClick={() => handleInspect(props._id)}>
                <i className={"fa-regular fa-eye"}></i>
            </button>
        </div>
    )
}

export default Product