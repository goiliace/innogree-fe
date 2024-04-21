import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PatientList, Patient, QuestionSet } from './types'


const initialState: PatientList = {
    isLoading: false,
    patients: [],
    currentPatient: null,
    questions: []
}
const patientSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        setPatients: (state, action: PayloadAction<PatientList>) => {
            state.patients = action.payload.patients
        },
        addPatient: (state, action: PayloadAction<Patient>) => {
            state.patients.push(action.payload)
        },
        getPatient: (state, action: PayloadAction<string>) => {
            state.currentPatient = state.patients.find(patient => patient.id_patients === action.payload) || null;
        },
        updatePatient: (state, action: PayloadAction<Patient>) => {
            const index = state.patients.findIndex(patient => patient.id_patients === action.payload.id_patients)
            state.patients[index] = action.payload
        },
        deletePatient: (state, action: PayloadAction<string>) => {
            state.patients = state.patients.filter(patient => patient.id_patients !== action.payload)
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setPatient: (state, action: PayloadAction<Patient>) => {
            state.currentPatient = action.payload
        },
        setQuestions: (state, action: PayloadAction<QuestionSet[]>) => {
            state.questions = action.payload
        }
    }
})
export default patientSlice.reducer
export const { setPatients, addPatient, updatePatient, deletePatient, setLoading, setPatient, setQuestions } = patientSlice.actions