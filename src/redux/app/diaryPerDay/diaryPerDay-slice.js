import { createSlice } from '@reduxjs/toolkit';
import { diaryPerDayOperation } from './diaryPerDay-operation';

const currentDate = new Date().toLocaleDateString('es-Es');

const initialState = {
  isLoading: false,
  isAddProductLoading: false,
  isDeleteProductLoading: false,
  getProductsError: null,
  addProductError: null,
  deleteProductError: null,
  isSuccess: false,
  isError: false,
  date: currentDate,
  products: null,
  message: '',
  language: 'en',
};

export const diaryPerDaySlice = createSlice({
  name: 'diaryPerDay',

  initialState,

  reducers: {
    updateDate: (state, action) => {
      state.date = action.payload;
      state.message = null;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  },

  extraReducers: {
    // get products
    [diaryPerDayOperation.actionGetProducts.pending](state) {
      state.isLoading = true;
      state.message = '';
      state.isError = false;
      state.isSuccess = false;
      state.getProductsError = null;
    },
    [diaryPerDayOperation.actionGetProducts.fulfilled](state, { payload }) {
      console.log('productos traidos exitosamente');
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;

      if (typeof payload === 'string') {
        state.message = payload;
      } else {
        state.products = [...payload.result.products];
      }
    },
    [diaryPerDayOperation.actionGetProducts.rejected](state, action) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.getProductsError = action.error.message;
    },

    // create list products
    [diaryPerDayOperation.actionCreateProductsList.pending](state) {
      state.isLoading = true;
    },
    [diaryPerDayOperation.actionCreateProductsList.fulfilled](state) {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;

      state.products = [];
    },
    [diaryPerDayOperation.actionCreateProductsList.rejected](state, action) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    },

    // update products list
    [diaryPerDayOperation.actionAddProduct.pending](state) {
      state.isLoading = true;
      state.isAddProductLoading = true;
      state.addProductError = null;
    },
    [diaryPerDayOperation.actionAddProduct.fulfilled](state, action) {
      state.isLoading = false;
      state.isAddProductLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = action.payload;
    },
    [diaryPerDayOperation.actionAddProduct.rejected](state, action) {
      state.isLoading = false;
      state.isAddProductLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.addProductError = action.error.message;
    },

    // delete product from list
    [diaryPerDayOperation.actionDeleteProduct.pending](state) {
      
      state.isDeleteProductLoading = true;
      state.deleteProductError = null;

    },
    [diaryPerDayOperation.actionDeleteProduct.fulfilled](state, action) {
    
      state.isDeleteProductLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.products = action.payload;
    },
    [diaryPerDayOperation.actionDeleteProduct.rejected](state, action) {
      
      state.isDeleteProductLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.deleteProductError = action.error.message;
    },
  },
});

// Exportar la acción
export const {
  updateDate,
  getProducts,
  createProductsList,
  addProduct,
  deleteProduct,
  setLanguage
} = diaryPerDaySlice.actions;

export const diaryReducer = diaryPerDaySlice.reducer;
