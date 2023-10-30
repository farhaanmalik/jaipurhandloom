import { Link } from "react-router-dom"
import Carousel from 'react-material-ui-carousel'

const Hero = () => {
    var banners = [
        {
            image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/handloom-products-that-are-perfect-for-the-home/Title-Hathkargha-yellow5657.jpg"
        },
        {
            image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/handloom-products-that-are-perfect-for-the-home/Title-Hathkargha-yellow5657.jpg"
        },
        {
            image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/handloom-products-that-are-perfect-for-the-home/Title-Hathkargha-yellow5657.jpg"
        },
        {
            image: "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/handloom-products-that-are-perfect-for-the-home/Title-Hathkargha-yellow5657.jpg"
        }
    ]
    return (
        <>
            <Carousel navButtonsAlwaysVisible animation="slide" className="w-full h-full">
                {
                    banners.map((item, i) => <Link key={i}>
                        <img src={item.image} alt="" className="w-full lg:h-[75vh] md:h-[60vh] h-[30vh]" />
                    </Link>)
                }
            </Carousel>
        </>
    )
}

export default Hero

