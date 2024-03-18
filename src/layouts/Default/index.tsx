import { ReactElement } from 'react'
import Nav from '~/components/Nav';
import ChatWidget from '~/components/ChatWidget';
const DefaultLayout = ({ children }: { children: ReactElement }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex flex-col w-full flex-1 mt-[64px]">
                {children}
            </main>
            <ChatWidget />
        </div>
    );
};
export default DefaultLayout;