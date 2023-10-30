import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
    return (
        <>
            <div className="w-full h-screen bg-white">
                <div className="flex items-center justify-center h-screen">
                    <FadeLoader
                        color="#ff7c00"
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            </div>
        </>
    )
}

export default Loader
