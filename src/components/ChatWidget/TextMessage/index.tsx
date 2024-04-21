import logo from '~/assets/logo.png';
import type { BaseChat } from "~/features/Chat/types";

// import AssistanceAvatar from '~/assets/Assistance_avatar.png';
const TextMessage = (chat: BaseChat) => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    return (
        <div className={`flex gap-2.5 ${chat.user == 'Assistance' ? 'items-start mr-10' : 'items-end ml-10'}`}>
            {chat.user === 'Assistance' && <img className="w-8 h-8 rounded-full" src={logo} alt='User image' />}
            <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 ${chat.user == 'Assistance' ? 'rounded-e-xl rounded-es-xl bg-blue-300 dark:bg-blue-600 ' : 'rounded-s-xl rounded-se-xl bg-stone-300 dark:bg-stone-200 '}`}>
                <div className="flex space-x-2 rtl:space-x-reverse">
                    <span className={`text-sm font-semibold ${chat.user === 'Assistance' ? 'text-white-900 dark:text-white' : 'text-black-900 dark:text-black'}`}>{chat.user === 'Assistance' ? 'Assistance' : 'giahung'}</span>
                    <span className={`text-sm font-normal ${chat.user === 'Assistance' ? 'text-white-900 dark:text-white' : 'text-black-900 dark:text-black'}`}>11:46 - 04/04/2024</span>
                </div>
                <p className={`text-sm font-normal py-2.5 ${chat.user === 'Assistance' ? 'text-white-900 dark:text-white' : 'text-black-900 dark:text-black'}`}>{chat.message}</p>
            </div>

            {chat.user === 'User' && <img className="w-8 h-8 rounded-full" src={logo} alt='Assistance image' />}
        </div>
    );
}

export default TextMessage;
