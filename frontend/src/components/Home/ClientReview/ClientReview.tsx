import React from "react";
import ClientReviewCard from "./ClientReviewCard";

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-950 text-center">
        What Our Students Say
      </h1>
      {/* Sub heading */}
      <p className="text-lg text-gray-600 text-center mt-2 max-w-xl mx-auto">
        Hear from our students about their experience with Sstudize
      </p>
      {/* grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[90%] md:w-[80%] mx-auto">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <ClientReviewCard
            image="/images/Student1.jpg"
            name="John Doe"
            rating="4.7"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ClientReviewCard
            image="/images/Student2.jpg"
            name="Jasica Doe"
            rating="4.5"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ClientReviewCard
            image="/images/Student3.jpg"
            name="Sasuke Uchiha"
            rating="4.3"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ClientReviewCard
            image="/images/Student4.jpg"
            name="Boruto Uzumaki"
            rating="4.9"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
