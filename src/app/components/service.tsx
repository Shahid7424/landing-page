"use client";
import React, { useEffect } from 'react'
import { MdFlight } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { MdHolidayVillage } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';
const service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
   <>
   <section className="about-us pb-6 pt-10 bg-center" id="services">
      <div className="container mx-auto px-12" data-aos="fade-up">
        <div className="section-title mb-6 w-1/2 mx-auto text-center">
          <h2 className="text-3xl font-bold" data-aos="zoom-out" data-aos-delay="100">
            <span className="text-3xl font-bold text-blue-700">Our Services</span>
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="service">
          <div className="flex flex-wrap -mx-4">
            {/* Card 1 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="service-item group p-6 border rounded-lg shadow-md bg-white hover:bg-blue-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="service-content text-center">
                  <div className="service-icon mb-4">
                    <MdFlight className="text-orange-400 text-5xl mx-auto" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Flight Ticket Booking</h4>
                  <p className="text-md text-gray-600  group-hover:text-white transition duration-300">
                    Fly to your dream destinations at unbeatable prices. With seamless booking and 24/7 support, your next adventure is just a click away.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="service-item group p-6 border rounded-lg shadow-md bg-white hover:bg-red-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="service-content text-center">
                  <div className="service-icon mb-4">
                    <FaHotel className="text-orange-400  text-5xl mx-auto" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Hotel Booking</h4>
                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Find your perfect stay at unbeatable prices. Book your ideal hotel in just a few clicks and enjoy exclusive deals.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="about-us-item group p-6 border rounded-lg shadow-md bg-white hover:bg-blue-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="about-us-content text-center">
                  <div className="about-us-icon mb-4">
                    <FaBusAlt className="text-orange-400 text-5xl mx-auto" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Bus Booking</h4>                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Drive your way to convenience! Book a car in minutes and enjoy seamless journeys at unbeatable rates.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="service-item group p-6 border rounded-lg shadow-md bg-white hover:bg-blue-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="service-content text-center">
                  <div className="service-icon mb-4">
                    <FaTrainSubway className="text-orange-400 text-5xl mx-auto" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Train Booking</h4>
                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Access major train networks across the country with flexible scheduling and multiple comfort classes.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="service-item group p-6 border rounded-lg shadow-md bg-white hover:bg-red-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="service-content text-center">
                  <div className="service-icon mb-4">
                    <MdHolidayVillage className="text-orange-400 text-5xl mx-auto" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Holiday Package&apos;s</h4>
                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Explore curated vacation packages designed for unforgettable experiences. Enjoy exclusive deals for every destination.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 px-4">
              <div className="service-item group p-6 border rounded-lg shadow-md bg-white hover:bg-blue-500 hover:text-white ease-in-out transform hover:scale-105 transition duration-300 h-full">
                <div className="service-content text-center">
                  <div className="service-icon mb-4">
                    <FaMoneyBillWave className="text-orange-400 text-5xl mx-auto" />
                  </div>
                  <h4 className="font-bold text-xl mb-2">Recharge and Bill Pay </h4>    
                  <p className="text-gray-600 text-md group-hover:text-white transition duration-300">
                    Get expert travel guides and tips for your next adventure. Make every trip seamless and enjoyable with our advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </section>
   </>
  )
}

export default service;
