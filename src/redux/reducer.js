import {
  GET_DETAIL,
  GET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAV,
  ADD_TO_FAV,
  GET_PRODUCT_NAME,
  ORDER_BY_PRICE,
  ORDER_BY_NAME,
  PAGINATION,
  GET_APPROVAL_ADMIN,
  FILTER_BY_ALL,
  GET_STOCK,
  GET_STOCK_BY_ID,
  GET_PRODUCT_DRAFT,
  ADD_USER,
  GET_USERS,
  GET_USERS_DRAFT

} from "./actions-type";

const initialState = {
  users: [],
  products: [],
  copyProducts: [],
  detail: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  getApprovalAdmin: false,
  page: 1,
  get_stock: [],
  get_stock_by_id: [],
  product_draft: [],
  allUsers: [],
  users_draft: [],
  fav: JSON.parse(localStorage.getItem("fav")) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return{
        ...state,
        users: action.payload,
      }
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        copyProducts: action.payload,
      };
    case GET_PRODUCT_NAME:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case ADD_TO_CART: {
      const updatedCartAdd = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCartAdd));
      return {
        ...state,
        cart: updatedCartAdd,
      };
    }

    case REMOVE_FROM_CART:{
      const updatedCart = state.cart.filter(
        (item) =>
          item.id !== action.payload.productId ||
          item.size !== action.payload.size
      );

      localStorage.setItem("cart", JSON.stringify(updatedCart)); 
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case ADD_TO_FAV: {
      const updatedFavAdd = [...state.fav, action.payload];
      localStorage.setItem("fav", JSON.stringify(updatedFavAdd));
      return {
        ...state,
        fav: updatedFavAdd,
      };
    }

    case REMOVE_FROM_FAV: {
      const updatedFavRemove = state.fav.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("fav", JSON.stringify(updatedFavRemove));
      return {
        ...state,
        fav: updatedFavRemove,
      };
    }

    case GET_APPROVAL_ADMIN:
      return {
        ...state,
        getApprovalAdmin: action.payload,
      };
    case GET_STOCK:
      return {
        ...state,
        get_stock: action.payload,
      };
    case GET_STOCK_BY_ID:
      return {
        ...state,
        get_stock_by_id: action.payload,
      };
    case GET_PRODUCT_DRAFT:
      return {
        ...state,
        product_draft: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload
      };
    case GET_USERS_DRAFT:
      return {
        ...state,
        users_draft: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload
      };
    case GET_USERS_DRAFT:
      return {
        ...state,
        users_draft: action.payload
      };

    case ORDER_BY_NAME: {
      const sortedShoes = [...state.products];
      const sortOrder = action.payload === "a-z" ? 1 : -1;

      sortedShoes.sort((shoeA, shoeB) => {
        if (shoeA.name > shoeB.name) {
          return 1 * sortOrder;
        }

        if (shoeB.name > shoeA.name) {
          return -1 * sortOrder;
        }
        return 0;
      });
      return { ...state, products: sortedShoes };
    }

    case ORDER_BY_PRICE: {
      const sortedPrice = [...state.products];
      const sortOrd = action.payload === "asc" ? 1 : -1;
      sortedPrice.sort((priceA, priceB) => {
        if (priceA.retail_price_cents > priceB.retail_price_cents) {
          return 1 * sortOrd;
        }
        if (priceB.retail_price_cents > priceA.retail_price_cents) {
          return -1 * sortOrd;
        }
        return 0;
      });
      return { ...state, products: sortedPrice };
    }

    case PAGINATION:
      return {
        ...state,
        page: action.payload,
      };

    case FILTER_BY_ALL: {
      return {
        ...state,
        products: action.payload,
      };
    }

    default:
      return state;
  }
};

export { reducer };