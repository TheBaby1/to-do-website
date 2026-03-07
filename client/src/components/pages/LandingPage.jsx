import MainHeader from "../headers/MainHeader";

const LandingPage = () => {
    return (
        <>
            <MainHeader></MainHeader>

            <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-row overflow-y-auto mt-[28px]">
                <div className="flex flex-col mx-auto -space-y-[24px] mt-[32px]">
                    <h1 className="font-extrabold text-[56px]">COMPLETE</h1>
                    <h1 className="font-extrabold text-[56px]">YOUR</h1>
                    <h1 className="font-extrabold text-[56px]">TASKS</h1>

                    
                </div>

                
            </div>
        </>
    );
} 

export default LandingPage;