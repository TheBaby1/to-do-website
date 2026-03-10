import MainHeader from "../headers/MainHeader";
import CreateListButton from "../buttons/CreateListButton";

import LandingImage from "../../assets/images/landing_page_logo.png"
import LandingImageLogo from "../../assets/images/landing_logo.jpg"

const LandingPage = () => {
    return (
        <>
            <MainHeader></MainHeader>

            <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-row overflow-y-auto mt-[28px]">
                <div className="flex flex-col mx-auto mt-[32px]">
                    <div className="-space-y-[24px]">
                        <h1 className="font-extrabold text-[56px]">COMPLETE</h1>
                        <h1 className="font-extrabold text-[56px]">YOUR</h1>
                        <h1 className="font-extrabold text-[56px]">TASKS</h1>
                    </div>

                    <p className="text-gray-500 mt-[24px]"
                    >
                        Stay focused, organized, and in control of your day. Our to-do list helps
                        you turn your ideas into clear, actionable tasks so nothing slips through the cracks.
                        Whether you're planning your work, managing personal goals, or tracking daily habits,
                        everything you need is in one simple place.
                    </p>

                    <CreateListButton></CreateListButton>
                </div>

                <div className="flex items-center justify-center">
                    <img
                        className="w-full max-w-[600px] h-auto object-cover"
                        src={LandingImageLogo}
                        alt="LandingImage"
                    >
                    </img>
                </div>

            </div>
        </>
    );
}

export default LandingPage;