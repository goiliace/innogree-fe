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
const questionSchema = z.object({
    id_ques: z.string(),
    question: z.string(),
})
const questionSetSchema = z.object({
    id: z.string(),
    name: z.string(),
    qset: z.array(questionSchema),
})
const patientListSchema = z.object({
    patients: z.array(patientSchema),
    isLoading: z.boolean().default(false),
    currentPatient: patientSchema.nullable(),
    questions: z.array(questionSetSchema),
})
export type BasePatient = z.infer<typeof basePatientSchema>
export type Patient = z.infer<typeof patientSchema>
export type PatientList = z.infer<typeof patientListSchema>
export type Question = z.infer<typeof questionSchema>
export type QuestionSet = z.infer<typeof questionSetSchema>