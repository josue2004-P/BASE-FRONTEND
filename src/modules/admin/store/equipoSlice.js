import { createSlice } from '@reduxjs/toolkit';
import { equipo } from '../../data/equipos';

export const equipoSlice = createSlice({
    name: 'equipo',
    initialState: {
        isLoadingEquipos: true,
        equipos: equipo,
        equipo: [
            // tempEvent
        ],
        activeEquipo: null
    },
    reducers: {
        onAddNewEquipo: ( state, { payload }) => {
            state.activeEquipo = null;
        },
        onUpdateEquipo: ( state, { payload } ) => {
            state.equipos = state.equipos.map( event => {
                if ( event.id === payload.id ) {
                    return payload;
                }
                return event;
            });
        },
        onDeleteEquipo: ( state ) => {
            if ( state.activeEquipo ) {
                state.equipos = state.equipos.filter( event => event.id !== state.activeEquipo.id );
                state.activeEquipo = null;
            }
        },
        onLoadEquipos: (state, { payload = [] }) => {
            state.isLoadingEquipos = false;
            state.equipos = payload;

        },
        onLoadEquipo: (state, { payload = [] }) => {
            state.isLoadingEquipos = false;
            state.equipo = payload;

        },
        onLogoutModalEquipo: ( state ) => {
            state.isLoadingEquipos = false,
            state.equipo    = []

        },

        onLogoutEquipo: ( state ) => {
            state.isLoadingEquipos = true,
            state.equipos      = []
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onAddNewEquipo,
    onDeleteEquipo,
    onLoadEquipos,
    onLoadEquipo,
    onLogoutEquipo,
    onLogoutModalEquipo,
    onSetActiveEquipo,
    onUpdateEquipo,
} = equipoSlice.actions;