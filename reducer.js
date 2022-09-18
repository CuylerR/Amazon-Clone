export const initialState = {
    basket: [{
        id:"12321341",
        title:
            "The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback",
        price: 11.96,
        rating: 5,
        image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg",
        

    },
],
    user: null,
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item)  => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {




        case 'Add_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
                


            } else {
                console.warn(
                    `Cant remove product (id: ${action.id} as its not in basket`
                );
            }




            return { 
                ...state, 
                basket: newBasket,
             };
        default:
            return state;
    }
};
export default reducer;