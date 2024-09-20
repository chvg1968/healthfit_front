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
    },
    updateProductPresentation: (state, action) => {
      const newLang = action.payload;
      state.products = state.products.map(product => ({
        ...product,
        displayTitle: product.titles[newLang] || product.titles.en,
      }));
    },
    // Añadir setProducts aquí
    setProducts: (state, action) => {
      state.products = action.payload;
    },
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
    // ... (el resto de tu código)
  },
});

// Exportar la acción
export const {
  updateDate,
  setLanguage,
  updateProductPresentation,
  setProducts, // Asegúrate de exportar esta acción
  // otras acciones
} = diaryPerDaySlice.actions;

export const diaryReducer = diaryPerDaySlice.reducer;
