import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			console.log("Item's Data: " + JSON.stringify(item));

			console.log("cart items reducer: ");
			state.cartItems.map((x) => console.log("item: " + x.name));

			const existItem = state.cartItems.find((x) => x.name === item.name);
			if (existItem) {
				console.log(existItem.product);
			}

			if (existItem) {
				console.log("in EXIST!");
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === existItem.product ? item : x
					),
				};
			} else {
				console.log("in NOT EXIST!");
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}

		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.product !== action.payload),
			};
		default:
			return state;
	}
};
