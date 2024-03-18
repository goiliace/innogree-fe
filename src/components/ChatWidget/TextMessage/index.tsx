import React, { useState } from 'react';
import logo from '~/assets/logo.png';
// import assistantAvatar from '~/assets/assistant_avatar.png';

interface TextMessageProps {
    role: 'user' | 'assistant';
}

const TextMessage = ({ role }: TextMessageProps) => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    return (
        <div className={`flex gap-2.5 ${role == 'assistant' ? 'items-start mr-10' : 'items-end ml-10'}`}>
            {role === 'assistant' && <img className="w-8 h-8 rounded-full" src={logo} alt='User image' />}
            <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 ${role == 'assistant' ? 'rounded-e-xl rounded-es-xl bg-blue-300 dark:bg-blue-600 ' : 'rounded-s-xl rounded-se-xl bg-stone-300 dark:bg-stone-200 '}`}>
                <div className="flex items-end space-x-2 rtl:space-x-reverse">
                    <span className={`text-sm font-semibold ${role === 'assistant' ? 'text-white-900 dark:text-white' : 'text-black-900 dark:text-black'}`}>{role === 'assistant' ? 'Assistant' : 'giahung'}</span>
                    <span className={`text-sm font-normal ${role === 'assistant' ? 'text-white-900 dark:text-white' : 'text-black-900 dark:text-black'}`}>11:46</span>
                </div>
                <p className={`text-sm font-normal py-2.5 ${role === 'assistant' ? 'text-white-900 dark:text-white' : 'text-black-900 dark:text-black'}`}>That's awesome. I think our users will really appreciate the improvements.</p>
                <span className={`text-sm font-normal ${role === 'assistant' ? 'text-white-900 dark:text-white' : 'text-black-900 dark:text-black'}`}>Delivered</span>
            </div>

            {role === 'user' && <img className="w-8 h-8 rounded-full" src={logo} alt='Assistant image' />}
            {/* {role === 'user' && (
                <button
                    id="dropdownMenuIconButton"
                    className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                    onClick={toggleDropdown}
                    type="button"
                >
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                </button>
            )}
            {role === 'user' && (
                <div className={`z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600`} id="dropdownDots">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Forward</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Copy</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                        </li>
                    </ul>
                </div>
            )} */}
        </div>
    );
}

export default TextMessage;
