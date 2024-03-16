import { ReactElement } from 'react'
const DualLayout = ({ childrenA, childrenB }: { childrenA: ReactElement, childrenB: ReactElement }) => {
    return (
        <div className="flex flex-col">
            <main className="flex flex-row w-full flex-1 px-20  gap-2">
                {/* // a is 70% and b irounded-mds 30% */}
                <div className="w-3/4 p-2 border rounded-md">
                    {childrenA}
                </div>
                <div className="w-1/4 p-2 border rounded-md">
                    {childrenB}
                </div>
            </main>
        </div>
    );
};
export default DualLayout;

