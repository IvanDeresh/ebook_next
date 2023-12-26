"use client"; // productReducer.ts
interface Product {
  author: string;
  name: string;
  imgURL: string;
  description: string;
  publishDate: Date;
  price: number;
  genre: string;
  _id: object;
}

interface ProductState {
  product: Product[];
}

const initialState: ProductState = {
  product: [],
};

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: { _id: object }; // Adjust the payload type
}

type ProductActionTypes = AddProductAction | RemoveProductAction;

const productReducer = (
  state: ProductState = initialState,
  action: ProductActionTypes
): ProductState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((p) => p._id !== action.payload),
      };
    default:
      return state;
  }
};

export const removeProduct = (id: { _id: object }): RemoveProductAction => ({
  type: REMOVE_PRODUCT,
  payload: id,
});

export const addProduct = (product: Product): AddProductAction => ({
  type: ADD_PRODUCT,
  payload: product,
});

export default productReducer;
