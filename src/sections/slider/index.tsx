import React, { useState, useEffect } from 'react';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full">
            {/* Your carousel content */}
            <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className={`carousel-item absolute top-0 left-0 w-full h-full ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
                        <div className='block w-full h-full object-cover bg-gray-800 text-slate-100 inline-flex items-center self-center' >
                            <h1 className='text-5xl'>LIÊN HỆ QUẢNG CÁO VUI LÒNG GỌI: 03478250xyz</h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons for changing slides */}
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full" onClick={prevSlide}>
                <MdNavigateBefore />
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full" onClick={nextSlide}>
                <MdNavigateNext />
            </button>
        </div>
    );
}

export default Slider;
