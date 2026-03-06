

const MainHeader = () => {
    return (
        <>
            <div className="flex flex-row justify-between bg-red-300 px-4 py-4 mx-auto">
                <h1>To Do List</h1>
                <div className="flex flex-row gap-4">
                    <h1>Home</h1>
                    <h1>Lists</h1>
                </div>
            </div>
        </>
    );
}

export default MainHeader;