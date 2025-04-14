import { createSlice } from '@reduxjs/toolkit';
import { marcas } from '../data/marcas';

export const marcaSlice = createSlice({
    name: 'marcas',
    initialState: {
        isLoadingMarcas: true,
        marcas: marcas,
        marca: [
            // tempEvent
        ],
        activeMarca: null
    },
    reducers: {
    }
});


// Action creators are generated for each case reducer function
// export const {
//     onLoadMarcas,
// } = marcaSlice.actions;