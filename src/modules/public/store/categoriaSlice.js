import { createSlice } from '@reduxjs/toolkit';
import { categorias } from '../data/categorias';

export const categoriaSlice = createSlice({
    name: 'categoria',
    initialState: {
        isLoadingCategoria: true,
        categorias: categorias,
        categoria: [
            // tempEvent
        ],
        activeMarca: null
    },
    reducers: {
    }
});


// Action creators are generated for each case reducer function
// export const {
// } = categoriaSlice.actions;