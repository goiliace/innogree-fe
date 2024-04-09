import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '~/store';
import { useEffect } from 'react';
import PatientDashboard from "~/sections/patientDashboard"

export default function App() {
    const user = useAppSelector(state => state?.auth?.user)
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user])
    return (
        user &&
        <>
            < PatientDashboard />
        </>
    )
}