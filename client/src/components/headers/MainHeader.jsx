

const MainHeader = () => {
    return (
        <>
            <div className="flex flex-row justify-between bg-white px-[24px] py-[24px] border-b border-gray-100 mx-auto">
                <h1>To Do List</h1>
                <div className="flex flex-row gap-4">
                    <h1 className="cursor-pointer">Home</h1>
                    <h1 className="cursor-pointer">Lists</h1>
                    <h1 className="cursor-pointer">Sign In</h1>
                </div>
            </div>
        </>
    );
}

export default MainHeader;