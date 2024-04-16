import { current } from '@reduxjs/toolkit'
import { z } from 'zod'

const basePatientSchema = z.object({
    name_patient: z.string(),
    dob: z.string(),
    address_patient: z.string(),
    avatar: z.any()
})
const patientSchema = basePatientSchema.extend({
    id_patients: z.string(),
    note: z.string().nullable(),
    detail: z.string().nullable(),
    treatment: z.string().nullable(),
    chart_params: z.string().nullable(),
})
const patientListSchema = z.object({
    patients: z.array(patientSchema),
    isLoading: z.boolean().default(false),
    currentPatient: patientSchema.nullable(),
})
export type BasePatient = z.infer<typeof basePatientSchema>
export type Patient = z.infer<typeof patientSchema>
export type PatientList = z.infer<typeof patientListSchema>