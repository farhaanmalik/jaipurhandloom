import { useEffect } from "react";
import FeaturedProducts from "../component/Home/FeaturedProducts"
import Hero from "../component/Home/Hero"

const Home = () => {

  useEffect(() => {
    document.title = 'Jaipur Handloom Store';
  }, []);

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Home
