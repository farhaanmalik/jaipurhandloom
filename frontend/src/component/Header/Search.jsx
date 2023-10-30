/* eslint-disable react/prop-types */

const Search = ({searchSubmitHandler, setKeyword}) => {
    
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <form onSubmit={searchSubmitHandler} className="max-w-[500px] w-full flex">
                    <input type="text" className="w-full border border-orange-400 rounded"
                        placeholder="Search a Product ..."
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <input type="submit" className="bg-orange-500 hover:bg-orange-400 cursor-pointer px-5 text-white ml-2 rounded" value="Search" />
                </form>
            </div>
        </>
    )
}

export default Search
