import { ReactElement } from 'react'
import Nav from '~/components/Nav';
import ChatWidget from '~/components/ChatWidget';
import { useAppDispatch, useAppSelector } from '~/store'
import { validateUser } from '~/features/Auth/thunks'

const DefaultLayout = ({ children }: { children: ReactElement }) => {
    const pageTypes = ['Login', 'SignUp']
    const user = useAppSelector(state => state?.auth?.user)
    const dispatch = useAppDispatch()
    if (!user) {
        // get from cookie
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(validateUser(token));
        }
    }
    return (
        <div className="flex flex-col min-h-screen">
            <div className={`relative flex flex-grow ${!pageTypes.some(pageType => children.type.toString().includes(pageType)) && 'space-y-[72px]'}`}>
                <Nav />
                <main className={`flex flex-col w-full flex-1`}>
                    {children}
                </main>
            </div>
            <ChatWidget />
        </div>
    );
};


export default DefaultLayout;