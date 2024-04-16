import { useEffect } from "react";
import { AddPatientBtn, PatientBtn } from "~/components/Patient";
import { getPatients } from "~/features/Patient/thunks"
import { useAppSelector, useAppDispatch } from "~/store";
const PatientHome = () => {
    const dispatch = useAppDispatch();
    const patients = useAppSelector(state => state.patient.patients);
    const token = useAppSelector(state => state.auth.token);
    useEffect(() => {
        dispatch(getPatients(token as string));
    }, [token]);

    return (
        <div className="grid grid-cols-5 gap-8 flex items-center justify-items-center p-4">
            {
                patients && patients.map((patient, index) => (
                    <PatientBtn key={index} patient={patient} />
                ))
            }
            <AddPatientBtn />
        </div>
    )
};
export default PatientHome;