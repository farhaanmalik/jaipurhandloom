/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Rating = () => {
    let stars = 3, reviews = 30;
    const rating = Array.from({ length: 5 }, (elem, index) => {
        return (
            <span key={index}>
                {stars >= index + 1 ? <FaStar /> : <AiOutlineStar className="text-xl pt-0.5" />}
            </span>
        )
    })
    return (
        <>
            <div className="flex my-1">
                <span className="flex items-center">
                    <span className="text-orange-500 mr-1 flex items-center">{rating}</span>
                    <span className="text-gray-600 ml-1">({reviews} Reviews)</span>
                </span>
            </div>
        </>
    )
}

export default Rating
