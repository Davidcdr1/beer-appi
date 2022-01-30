import cartActionTypes from "../actions/cartActionTypes";

function cartReducer(items = [], action) {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return [...items, { name: action.item.name, image_url: action.item.image_url, id: action.item.id }];

    case cartActionTypes.REMOVE_FROM_CART:
      return items.filter((item) => item.id !== action.item.id);

    default:
      return items;
  }
}

export default cartReducer;