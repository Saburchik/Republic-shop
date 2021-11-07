import * as actionTypes from '../constants/cartConstants'
import axios from "axios"

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            article: data.article,
            category: data.category,
            name: data.name,
            status: data.status,
            imageUrl: data.imageUrl,
            price: data.price,
            oldPrice: data.oldPrice,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}