import { createSlice } from "@reduxjs/toolkit";
import employeesData from "../data/employeesData";

const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        list: employeesData, // utilisation des données par défaut
    },
    reducers: {
        addEmployee: (state, action) => {
            state.list.push(action.payload);
        },
    },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;