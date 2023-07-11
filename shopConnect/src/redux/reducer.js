
import { GET_DETAIL, GET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_FAV, ADD_TO_FAV, GET_PRODUCT_NAME, ORDER_BY_PRICE,ORDER_BY_NAME, PAGINATION, GET_APPROVAL_ADMIN, FILTER_BY_GENDER, FILTER_BRAND_NAME, FILER_BY_CATEGORY } from "./actions-type";


const initialState = {
  products: [],
  copyProducts: [],
  detail: [],
  cart: [],
  getApprovalAdmin: false,
  fav: [],
  page: 1

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        copyProducts: action.payload
      };
    case GET_PRODUCT_NAME:
      return {
        ...state,
        products: action.payload,
      }
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case ADD_TO_FAV:
      return {
        ...state,
        fav: [...state.fav, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        fav: state.fav.filter(item => item.id !== action.payload),
      };

    case GET_APPROVAL_ADMIN:
      return {
        ...state,
        getApprovalAdmin: action.payload
      };

    case ORDER_BY_NAME:
        const sortedShoes = [...state.products];
        const sortOrder = action.payload === 'a-z' ? 1 : -1;
          sortedShoes.sort((shoeA, shoeB) => {
            if (shoeA.name > shoeB.name) {
                return 1 * sortOrder;
            }
            if (shoeB.name > shoeA.name) {
                return -1 * sortOrder;
            }
            return 0;
          });
      return { ...state, products: sortedShoes}

    case ORDER_BY_PRICE:
        const sortedPrice = [...state.products];
        const sortOrd = action.payload === 'asc' ? 1 : -1;
          sortedPrice.sort((priceA, priceB) => {
            if (priceA.retail_price_cents > priceB.retail_price_cents) {
                return 1 * sortOrd;
            }
            if (priceB.retail_price_cents > priceA.retail_price_cents) {
                return -1 * sortOrd;
            }
            return 0;
          });
      return { ...state, products: sortedPrice}


    case PAGINATION:
      return {
          ...state,
          page: action.payload
      };


      case FILTER_BY_GENDER:
        let filterProduct;

          if (action.payload === 'men') {
            filterProduct = state.copyProducts.filter(el => el.gender[0] === 'men');
          } 
          if (action.payload === 'women') {
            filterProduct = state.copyProducts.filter(el => el.gender[0] === 'women');
          } 
          if (action.payload === 'youth') {
            filterProduct= state.copyProducts.filter(el => el.gender[0] === 'youth');
          }
          if (action.payload === 'all') {
            filterProduct= state.copyProducts
          }
          return { ...state, products: filterProduct };
              

    case FILTER_BRAND_NAME:
      let filterName;

          if (action.payload === 'Nike') {
            filterName = state.copyProducts.filter(el => el.brand_name === 'Nike');
          }
          if (action.payload === 'Vans') {
            filterName = state.copyProducts.filter(el => el.brand_name === 'Vans');
          } 
          if (action.payload === 'Gucci') {
            filterName = state.copyProducts.filter(el => el.brand_name === 'Gucci');
          }  
          if (action.payload === 'adidas') {
            filterName = state.copyProducts.filter(el => el.brand_name === 'adidas');
          } 
          if (action.payload === 'Champion') {
            filterName = state.copyProducts.filter(el => el.brand_name === 'Champion');
          }
          if (action.payload === 'Converse') {
            filterName = state.copyProducts.filter(el => el.brand_name === 'Converse');
          }
          if (action.payload === 'Air Jordan') {
            filterName = state.copyProducts.filter(el => el.brand_name === 'Air Jordan');
          }
          if (action.payload === 'all') {
            filterName = state.copyProducts
          } 
          return { ...state, products: filterName };

    case FILER_BY_CATEGORY:
      let filterCategory;

          if (action.payload === 'other') {
            filterCategory = state.copyProducts.filter(el => el.category[0] === 'other');
          } 
          if (action.payload === 'running') {
            filterCategory = state.copyProducts.filter(el => el.category[0] === 'running');
          } 
          if (action.payload === 'lifestyle') {
            filterCategory = state.copyProducts.filter(el => el.category[0] === 'lifestyle');
          } 
          if (action.payload === 'basketball') {
            filterCategory = state.copyProducts.filter(el => el.category[0] === 'basketball');
          }
          if (action.payload === 'skateboarding') {
            filterCategory = state.copyProducts.filter(el => el.category[0] === 'skateboarding');
          }
          if (action.payload === 'all') {
            filterCategory = state.copyProducts
          }
          return { ...state, products: filterCategory };

          
    default:
      return state;
  }
};

export { reducer };