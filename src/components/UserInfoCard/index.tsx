import logo from '~/assets/logo.png'
import { Link } from 'react-router-dom';
const UserInfoCard = () => {
    const patient = {
        name: 'Le Thanh Hoa',
        age: '3 - 6 tuoi',
        id: '123456789'
    }
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col items-center pb-10 mt-20">
                <img className="w-64 h-64 mb-3 rounded-full shadow-lg" src={logo} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Le Thanh Hoa</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">3 - 6 tuoi</span>
                <Link to={`/user/asqvn/${patient.id}`} className="inline-flex mt-4 items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Làm khảo sát ASQ-VN</Link>
            </div>
        </div>

    )
};

export default UserInfoCard;