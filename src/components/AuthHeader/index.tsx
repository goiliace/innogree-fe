import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const AuthHeader = () => {
    return (
        <div className="flex items-center mb-6 gap-4">
            <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            <div className="flex gap-2 flex-row items-end">
                <span className="text-2xl font-semibold text-gray-900 dark:text-white">Đô Đô Assistant</span>
                <span className="text-sm/[4px] italic">by Dumplings team</span>
            </div>
        </div>
    )
};
export default AuthHeader