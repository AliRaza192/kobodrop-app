import Carousel from "../common/Carousel";
import StoreLinksBtn, { BtnTypes } from "../common/StoreLinksBtn";

const Review = () => {
  const slides = [
    {
      src: "https://plus.unsplash.com/premium_photo-1665203512084-ae59cba0b316?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwd2l0aCUyMHBob25lfGVufDB8fDB8fHww",
      text: "Kobodrops has helped me send and recive money with little to no complications. It is what everyone who wants to be on top of their money needs,",
      name: "Haradu Sada",
      country: "Japan",
    },
    {
      src: "https://images.unsplash.com/photo-1542321888-8a6abb3ec824?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMHdpdGglMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
      text: "Kobodrops has helped me send and recive money with little to no complications. It is what everyone who wants to be on top of their money needs,",
      name: "Haradu Sada",
      country: "Spain",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1666298863696-8e8da5d85f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbiUyMHdpdGglMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
      text: "Kobodrops has helped me send and recive money with little to no complications. It is what everyone who wants to be on top of their money needs,",
      name: "Mister Best",
      country: "USA",
    },
  ];

  return (
    <section
      id="reviews"
      className="flex flex-col items-center justify-between max-w-7xl px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
    >
      <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-center">
        <h2 className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left">
          Join others thousands of people growing with Kobodrop.
        </h2>
        <StoreLinksBtn type={BtnTypes.Standard} />
      </article>
      <Carousel slides={slides} />
    </section>
  );
};

export default Review;
