import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk("store/fetchData", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
});
const StoreSlice = createSlice({
  name: "store",
  initialState: {
    cart: [],
    favorit: [],
    loading: false,
    produits: [],
    allProducts: [],
    totalUn: 0,
    isVisible: false,
    DropFavoritState: false,
    DetailisVisible: false,
    quantite: 0,
    total: 0,
    itemDetail: {},
    active:'Home',
  },
  reducers: {
    ActivateLink : (state,action)=>{
      state.active = action.payload
    },
    AddToCart: (state, action) => {
      const itemd = state.cart.find((it) => it.id === action.payload.id);
      if (!itemd) {
        state.cart.push({
          ...action.payload,
          quantite: 1,
          totalUn: action.payload.price,
        });
      } else {
        itemd.quantite += 1;
        itemd.totalUn = itemd.quantite * itemd.price;
      }
      state.total = state.cart.reduce((sum, item) => sum + item.totalUn, 0);
    },
    AddToFavorit: (state, actions) => {
      const item = state.favorit.find((it) => it.id === actions.payload.id);
      if (!item) {
        state.favorit.push(actions.payload);
      }
    },
    DeletElementFromFarovit:(state,action)=>{
      state.favorit = state.favorit.filter(it => it.id !== action.payload.id);
    },
    ToggleCart: (state) => {
      state.DropFavoritState = false;
      state.isVisible = !state.isVisible;
    },
    ToggleFavorit: (state) => {
      state.isVisible = false;
      state.DropFavoritState = !state.DropFavoritState;
    },
    InCreaseQuantite: (state, action) => {
      const item = state.cart.find((it) => it.id === action.payload);
      if (item) {
        item.quantite += 1;
        item.totalUn += item.price;
      }
      state.total = parseFloat(
        state.cart.reduce((sum, item) => sum + item.totalUn, 0),
      );
    },
    DeCreaseQuantite: (state, action) => {
      const item = state.cart.find((it) => it.id === action.payload);
      if (item) {
        if (item.quantite > 1) {
          item.quantite -= 1;
          item.totalUn = item.price * item.quantite;
        } else {
          state.cart = state.cart.filter((it) => it.id !== action.payload);
        }
      }
      state.total = state.cart.reduce((sum, item) => sum + item.totalUn, 0);
    },
    ToggleDetail: (state, action) => {
      state.DetailisVisible = !state.DetailisVisible;
      state.itemDetail = action.payload;
    },
    FilterProducts: (state, action) => {
      if(state.active !=='Shop'){
        state.active ='Shop';
      }
      if (action.payload !== "All") {
        state.produits = state.allProducts.filter(
          (item) => item.category == action.payload,
        );
      } else {
        state.produits = state.allProducts;
      }
    },
  },
  extraReducers: (build) => {
    build
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.allProducts = action.payload;
        state.produits = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        console.error("Erreur :", action.error.message);
        state.loading = true;
      });
  },
});

export default StoreSlice.reducer;
export const {
  ActivateLink,
  AddToCart,
  ToggleCart,
  ToggleFavorit,
  InCreaseQuantite,
  DeCreaseQuantite,
  ToggleDetail,
  FilterProducts,
  AddToFavorit,
  DeletElementFromFarovit
} = StoreSlice.actions;
