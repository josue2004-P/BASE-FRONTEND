import { createSlice } from '@reduxjs/toolkit';
import { clientes } from '../../data/cllientes';

export const clienteSlice = createSlice({
    name: 'cliente',
    initialState: {
        isLoadingClientes: true,
        clientes: clientes,
        cliente: [
            // tempEvent
        ],
        activeCliente: null
    },
    reducers: {
        onAddNewCliente: ( state, { payload }) => {
            state.activeEquipo = null;
        },
        onUpdateCliente: ( state, { payload } ) => {
            state.clientes = state.clientes.map( event => {
                if ( event.id === payload.id ) {
                    return payload;
                }
                return event;
            });
        },
        onDeleteCliente: ( state ) => {
            if ( state.activeCliente ) {
                state.clientes = state.clientes.filter( event => event.id !== state.activeCliente.id );
                state.activeCliente = null;
            }
        },
        onLoadClientes: (state, { payload = [] }) => {
            state.isLoadingClientes = false;
            state.clientes = payload;

        },
        onLoadCliente: (state, { payload = [] }) => {
            state.isLoadingClientes = false;
            state.cliente = payload;

        },
        onLogoutModalEquipo: ( state ) => {
            state.isLoadingClientes = false,
            state.cliente    = []

        },

        onLogoutCliente: ( state ) => {
            state.isLoadingClientes = true,
            state.clientes      = []
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onAddNewCliente,
    onDeleteCliente,
    onLoadClientes,
    onLoadCliente,
    onLogoutCliente,
    onLogoutModalCliente,
    onSetActiveCliente,
    onUpdateCliente,
} = clienteSlice.actions;