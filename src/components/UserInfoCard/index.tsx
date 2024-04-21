import logo from '~/assets/logo.png'
import { Link } from 'react-router-dom';
import { Patient } from '~/features/Patient/types';

import { useAppSelector } from '~/store';
import Avatar from '@mui/material/Avatar';
const UserInfoCard = () => {
    const user = useAppSelector(state => state?.auth?.user)
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col items-center pb-10 mt-20">
                <img className="w-64 h-64 mb-3 rounded-full shadow-lg" src={logo} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.full_name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{user?.role}</span>

            </div>
        </div>

    )

};
const PatientInfoCard: React.FC<{ patient: Patient }> = ({ patient }) => {

    return (
        patient && patient.id_patients &&
        <div className="w-full bg-white">
            <div className="flex flex-col items-center pb-10 mt-20">
                {/* <img className="w-64 h-64 mb-3 rounded-full shadow-lg" src={`data:image/png;base64,${patient.avatar}`} alt="Bonnie image" /> */}
                <Avatar
                    alt={patient.name_patient}
                    src={`data:image/png;base64,${patient.avatar}`}
                    sx={{ width: 264, height: 264, mb: 2 }}
                    className='shadow-lg'
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{patient.name_patient}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{patient.dob}</span>
                <Link to={`/asqvn/${patient.id_patients}`} className="inline-flex mt-4 items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Làm khảo sát ASQ-VN</Link>
            </div>
        </div>

    )
};


export { UserInfoCard, PatientInfoCard };