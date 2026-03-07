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

                    <p className="text-gray-500 mt-[24px]"
                    >
                        Stay focused, organized, and in control of your day. Our to-do list helps 
                        you turn your ideas into clear, actionable tasks so nothing slips through the cracks. 
                        Whether you're planning your work, managing personal goals, or tracking daily habits, 
                        everything you need is in one simple place.
                    </p>
                </div>

                
            </div>
        </>
    );
} 

export default LandingPage;