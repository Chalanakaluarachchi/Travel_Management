import React from 'react';

const About = () => {
    return (
        <div className="bg-white text-gray-800">
            <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">About Us</h1>
                </div>
            </header>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Journey</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Explore the World with Us
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        We are passionate about traveling and discovering new places. Join us as we explore the most beautiful destinations around the globe.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Meet the Team</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Our Passionate Travelers
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                        <div className="flex flex-col items-center text-center">
                            <img className="h-40 w-40 rounded-full object-cover" src="https://source.unsplash.com/1600x900/?portrait,man" alt="Team member" />
                            <h3 className="mt-4 text-lg font-medium text-gray-900">John Doe</h3>
                            <p className="mt-2 text-base text-gray-600">Adventure Specialist</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <img className="h-40 w-40 rounded-full object-cover" src="https://source.unsplash.com/1600x900/?portrait,woman" alt="Team member" />
                            <h3 className="mt-4 text-lg font-medium text-gray-900">Jane Smith</h3>
                            <p className="mt-2 text-base text-gray-600">Cultural Enthusiast</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <img className="h-40 w-40 rounded-full object-cover" src="https://source.unsplash.com/1600x900/?portrait,person" alt="Team member" />
                            <h3 className="mt-4 text-lg font-medium text-gray-900">Alex Johnson</h3>
                            <p className="mt-2 text-base text-gray-600">Nature Lover</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase text-center">Our Favorite Destinations</h2>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                        <div className="relative">
                            <img className="h-72 w-full object-cover rounded-lg" src="https://source.unsplash.com/1600x900/?beach" alt="Destination" />
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
                                <h3 className="text-lg font-medium text-white">Tropical Paradise</h3>
                            </div>
                        </div>

                        <div className="relative">
                            <img className="h-72 w-full object-cover rounded-lg" src="https://source.unsplash.com/1600x900/?mountains" alt="Destination" />
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
                                <h3 className="text-lg font-medium text-white">Mountain Retreat</h3>
                            </div>
                        </div>

                        <div className="relative">
                            <img className="h-72 w-full object-cover rounded-lg" src="https://source.unsplash.com/1600x900/?city" alt="Destination" />
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
                                <h3 className="text-lg font-medium text-white">Urban Exploration</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;