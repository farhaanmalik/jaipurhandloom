import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        document.title = 'Contact Us - Jaipur Handloom Store';
    }, []);

    return (
        <>
            <section className="text-gray-600 body-font relative lg:px-20">
                <div className="container md:px-5 px-2 py-5 md:py-12 mx-auto flex md:flex-nowrap flex-wrap md:flex-row flex-col-reverse">
                    <div className="w-full h-[75vh] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-5 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" style={{ frameBorder: "0", title: "map", marginHeight: "0", marginWidth: "0", scrolling: "no" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.587589020591!2d80.9590355!3d26.884840999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd647d3fff95%3A0xec7c23710c012c8b!2sJaipur%20Handloom%20Imporium!5e0!3m2!1sen!2sin!4v1694453604928!5m2!1sen!2sin"></iframe>
                        <div className="md:w-1/2 w-full bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Rahim Nagar Rd, opp. Hewett Polytechnic, Dandiya Bazar, Mahanagar, Lucknow, Uttar Pradesh 226006.</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-blue-600 leading-relaxed">example@email.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <a href="tel:09450111327" className="leading-relaxed">09450111327</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
