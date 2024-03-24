import { ReactElement } from 'react'
import Nav from '~/components/Nav';
import ChatWidget from '~/components/ChatWidget';
const DefaultLayout = ({ children }: { children: ReactElement }) => {
    const pageTypes = ['Login', 'SignUp']
    console.log(children.type.toString())
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