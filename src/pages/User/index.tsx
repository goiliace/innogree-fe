import { useAppSelector } from '~/store';
import PatientDashboard from "~/sections/patientDashboard"

export default function App() {
    const user = useAppSelector(state => state?.auth?.user)

    return (
        user ?
            <>
                < PatientDashboard />
            </>
            : (
                <div className="flex justify-center items-center h-full">
                    <h1 className="text-2xl font-bold">Vui long dang nhap...</h1>
                </div>
            )
    )
}