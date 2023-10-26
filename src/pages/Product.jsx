import PageNav from "../components/PageNav";

function Product() {
  return (
    <div className="bg-[#2d3439] min-h-screen">
      <PageNav className="pt-12" />
      <section className="flex flex-col justify-evenly mt-24 lg:flex-row ">
        <div className="w-full lg:w-[50%] lg:flex lg:flex-row lg:justify-center">
          <img
            src="/img-1.jpg"
            alt="person with dog overlooking mountain with sunset"
            className="w-full lg:w-[80%] xl:h-[100%] rounded-lg"
          />
        </div>
        <div className="lg:w-[50%] lg:p-12 xl:p-32 text-center text-white flex flex-col justify-center">
          <h1 className="text-3xl mt-12 font-semibold">About World Wise</h1>
          <p className="w-[85%] pb-24 md:w-[80%] mx-auto xl:text-xl text-lg mt-10 text-[#aaa]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Corporis doloribus libero sunt expedita ratione iusto, magni,
            id sapiente sequi officiis et.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Product;
