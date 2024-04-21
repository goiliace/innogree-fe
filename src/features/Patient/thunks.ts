import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '~/lib/api/axios'
import type { BasePatient } from './types'
import { setPatients, setQuestions } from './index'
import { setLoading } from '~/features/Patient/'

export const createPatient = createAsyncThunk('patient/create', async ({
    patient,
    token,
}: {
    patient: BasePatient, token: string
}, { dispatch }) => {
    const formData = new FormData()
    formData.append('name_patient', patient.name_patient)
    formData.append('dob', patient.dob)
    formData.append('address_patient', patient.address_patient)
    formData.append('avatar', patient.avatar)

    try {
        const response = await axiosInstance.post('/user/create_patient_profile', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
        dispatch(getPatients(token))
    } catch (error) {
        console.log(error)
    }
})
export const getPatients = createAsyncThunk('patient/get', async (token: string, { dispatch }) => {
    dispatch(setLoading(true))

    try {
        const response = await axiosInstance.get('/user/get_all_patients', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        dispatch(setPatients(response.data))
        dispatch(setLoading(false))


    } catch (error) {
        console.log(error)
        dispatch(setLoading(false))

    }
})

export const fetchQuestions = createAsyncThunk('patient/getQuestions', async ({ token, patient_id }: { token: string, patient_id: string }, { dispatch }) => {
    try {
        const response = await axiosInstance.get('/patient/questions?patient_id=' + patient_id, {
            headers: {
                Authorization: `Bearer ${token}`

            }
        })


        dispatch(setQuestions(response.data))
    } catch (error) {
        console.log(error)
    }
})