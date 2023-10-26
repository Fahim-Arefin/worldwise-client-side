import React from "react";
import PageNav from "../components/PageNav";

function Pricing() {
  return (
    <main className="bg-[#2d3439]">
      <PageNav className="pt-12" />
      <section className="flex flex-col-reverse mt-32 lg:flex-row xl:w-[80%] mx-auto min-h-screen">
        <div className=" p-12 xl:p-24 text-white text-center space-y-4 flex flex-col xl:h-[100%]">
          <h2 className="text-3xl xl:text-5xl">
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p className="w-[80%] mx-auto xl:text-xl text-[#aaa]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <div className="">
          <img
            className="w-[80%] xl:w-full xl:h-[60%] mx-auto rounded-lg"
            src="/img-2.jpg"
            alt="overview of a large city with skyscrapers"
          />
        </div>
      </section>
    </main>
  );
}

export default Pricing;
