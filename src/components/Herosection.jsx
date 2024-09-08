import React from "react";

const Herosection = () => {
  return (
    <>
   

<section class=" bg-yellow-300 bg-blend-multiply h-[87vh] ">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-cyan-950 md:text-5xl lg:text-6xl">Ethiopian Bike Rental System</h1>
        <p class="mb-8 text-lg font-normal text-cyan-950 lg:text-xl sm:px-16 lg:px-48">Discover the beauty of Ethiopia with our premier bike rental service. Whether you're navigating the vibrant streets of Addis Ababa, exploring the stunning landscapes of the Simien Mountains, or cruising through charming rural villages, we have the perfect bike for your adventure.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-cyan-950 hover:bg-cyan-800 ">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#aboutus2" class="inline-flex justify-center hover:text-white items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-cyan-950     rounded-lg border border-white hover:bg-cyan-800 ">
                Learn more
            </a>  
        </div>
    </div>
</section>

    </>

  );
};

export default Herosection;
