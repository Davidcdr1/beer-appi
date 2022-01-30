import detailActionTypes from "./detailActionTypes";

export function addToDetail(item) {
  return {
    type: detailActionTypes.ADD_PRODUCT_DETAIL,
    item,
  };
}
