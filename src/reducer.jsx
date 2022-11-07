export const initialState = {
    cart: [
        {
            id: "1234",
            title: "Apple iPhone 13 Pro (128GB) - Gold",
            price: 11.96,
            rating: 5,
            image: "https://m.media-amazon.com/images/I/61sDyXAepuL._SL1500_.jpg"
        }
    ],
    user: null
}

export const getCartTotal = (cart) => {
    cart?.reduce((amount, item) => item.price + amount, 0)
}


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case "REMOVE_FROM_CART":

            let newCart = [...state.cart]

            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)

            if (index >= 0) {
                newCart.splice(index, 1)
            }
          
            return {
                ...state,
                cart: newCart
            }
        default:
            return state;
    }
}

export default reducer