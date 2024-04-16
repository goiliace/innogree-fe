import DualLayout from '~/layouts/DualLayout';
import { useParams } from 'react-router-dom';
import { PatientInfoCard } from '~/components/UserInfoCard';
import PatientStatusDash from '~/components/PatientStatusDash';
// import PatientHome from '~/components/PatientHome';
import { useAppSelector } from '~/store';

const Patient = () => {

    const user = useAppSelector(state => state?.auth?.user)
    const { id } = useParams<{ id: string }>();

    const patient = useAppSelector(state => state.patient.patients.find(patient => patient.id_patients === id));
    console.log(patient);
    return (
        user && patient ?
            (<DualLayout
                childrenA={<PatientStatusDash />}
                childrenB={<PatientInfoCard patient={patient} />}
            />)
            : (
                <div className="flex justify-center items-center h-full">
                    <h1 className="text-2xl font-bold">Vui long dang nhap...</h1>
                </div>
            )
    )
}
export default Patient;