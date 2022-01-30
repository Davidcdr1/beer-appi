import detailActionTypes from "../actions/detailActionTypes";

export const detailReducer = (item = {}, action) => {
  switch (action.type) {
    case detailActionTypes.ADD_PRODUCT_DETAIL:
      return  { 
        name: action.item.name, 
        image_url: action.item.image_url, 
        description: action.item.description, 
        tagline: action.item.tagline,
        food_pairing: action.item.food_pairing,
        id: action.item.id 
      };

     
    default:
      return item;
  }
}