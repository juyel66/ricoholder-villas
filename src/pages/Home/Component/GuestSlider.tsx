
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";



const testimonialData = [
    {
        id: 1,
        name: "Jessica Smith",
        location: "UK",
        title: "CEO, TechNova",
        text: "The stay exceeded every expectation. The personalized concierge service was seamless, and the villa itself felt like a private paradise. A truly unmatched luxury experience.",
        rating: 5.0,
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "David Chen",
        location: "Singapore",
        title: "Venture Capitalist",
        text: "Impeccable attention to detail. Every aspect, from the booking process to the tailored local tours, was handled with the utmost professionalism. Highly recommended for elite travellers.",
        rating: 4.8,
        image: "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
        id: 3,
        name: "Maria Rodriguez",
        location: "Spain",
        title: "Architect",
        text: "The architecture and setting of the villa were breathtaking. It was the perfect blend of modern luxury and local charm. We appreciated the privacy and serenity.",
        rating: 4.9,
        image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        id: 4,
        name: "Omar Hassan",
        location: "Dubai",
        title: "Hotelier",
        text: "As a fellow professional in the hospitality industry, I was thoroughly impressed. The service level sets a new global benchmark for luxury villa rentals.",
        rating: 5.0,
        image: "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
        id: 5,
        name: "Emily White",
        location: "USA",
        title: "Travel Blogger",
        text: "My family trip was unforgettable. The local experiences arranged by the concierge were the highlight. This is truly luxury travel redefined. Can't wait to return!",
        rating: 4.7,
        image: "https://randomuser.me/api/portraits/women/8.jpg"
    }
];








const TestimonialCard = ({ testimonial }) => {
    return (
 
        <div className="bg-white p-6 rounded-3xl border border-teal-200 shadow-lg min-h-[350px] flex flex-col justify-between">
        
            <div className="flex items-center mb-6">
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-teal-400"
                />
            </div>

         
            <p className="text-gray-800 text-lg leading-relaxed mb-6 flex-grow">
                {testimonial.text}
            </p>

        
            <div className="flex items-center justify-between mt-auto">
                <div>
                    <h4 className="font-bold text-gray-900 text-base">{testimonial.name}, {testimonial.location}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
                {testimonial.rating && (
                    <div className="flex items-center bg-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        <span>{testimonial.rating}</span>
                        <svg className="w-4 h-4 ml-1 fill-current text-white" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};






export default function GuestSlider() {
    return (
       
        <div className="w-full h-[450px] p-8  flex flex-col">
            
        
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-shrink-0">
              
            </div>

     
            <div className="w-full flex-grow">
                <Swiper
       
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper pt-6 pb-12 h-full" 
                    style={{ paddingLeft: '1rem', paddingRight: '1rem' }} 
                    breakpoints={{
                        320: { slidesPerView: 1.1, spaceBetween: 10, paddingLeft: '1rem', paddingRight: '1rem' },
                        640: { slidesPerView: 2.1, spaceBetween: 20, paddingLeft: '1.5rem', paddingRight: '1.5rem' },
                        1024: { 
                            slidesPerView: 3, 
                            spaceBetween: 30, 
                            paddingLeft: '2rem', 
                            paddingRight: '2rem'
                        }, 
                        1280: { slidesPerView: 3, spaceBetween: 30, paddingLeft: '2rem', paddingRight: '2rem' }
                    }}
                >
                    {testimonialData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}