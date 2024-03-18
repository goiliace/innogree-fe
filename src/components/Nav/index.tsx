import { useState, useEffect, useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const Nav = () => {
    const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const handleUserMenu = () => {
        setIsOpenUserMenu(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
            setIsOpenUserMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const user = {
        name: 'Do Do',
        email: 'dodo@dodo.com'
    };
    const [navItems, setNavItems] = useState([
        {
            name: 'Trang chủ',
            url: '/',
            current: true
        },
        {
            name: 'Hồ sơ người dùng',
            url: '/user',
            current: false
        },
        {
            name: 'Hỏi đáp',
            url: '/contact',
            current: false
        },
        {
            name: 'Về chúng tôi',
            url: '/about',
            current: false
        }
    ]);
    const handleNavItemClick = (index: number) => {
        console.log(index);

        const newNavItems = navItems.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    current: true
                };
            } else {
                return {
                    ...item,
                    current: false
                };
            }
        });
        setNavItems(newNavItems);
    };
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Đô Đô Assistant</span>
                </a>

                {/* user */}
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button"
                        onClick={handleUserMenu}
                    >
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src={logo} alt="user photo" />
                    </button>
                    {isOpenUserMenu && (
                        <div ref={userMenuRef} className="absolute top-10 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 " id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* nav main */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navItems.map((item, index) => (
                            <li key={index} onClick={() => handleNavItemClick(index)} className="relative">
                                <Link to={item.url} color="white" className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${item.current ? 'bg-gray-100 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-gray-700 dark:text-white md:dark:bg-transparent dark:border-gray-700' : ''}`} >
                                    {item.name}
                                </Link>
                            </li>
                            // block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;