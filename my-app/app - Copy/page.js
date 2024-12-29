import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <img className="md:object-fill object-fill w-full md:max-h-[60vh] h-auto absolute opacity-80 size-auto" src="https://cdn.pixabay.com/photo/2018/11/26/16/38/hunger-3839782_960_720.jpg" alt="image" /> */}
      <div className=" text-blue-900 flex flex-col md:h-[60vh] h-1/3 justify-center pb-8 pt-14 items-center ">
        

        <h1 className=" md:text-4xl text-2xl relative  bg-white my-4 text-center p-1 font-bold"><span className="">FeedMeFood : </span>Nourishing Lives, One Meal at a Time.</h1>

        <p className="text-center text-lg bg-white p-1 relative">
        Join our mission to end hunger. Your support today can light up countless lives tomorrow.
        </p>
        <div className="my-4 mt-14 ">
          <Link href="/dashboard">
            <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Start here
              </span>
            </button>
          </Link>
          <Link href="/read">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Read more
              </span>

            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-700  flex-row h-1 flex opacity-10"></div>

      <div className=" text-blue-950 mx-auto container pb-32 pt-8 ">
        <h1 className="font-bold  text-blue-950 text-2xl bg-white text-center my-14"> </h1>

        <div className="md:flex-row flex flex-col md:gap-40 gap-2 md:justify-center justify-around">

          <div className="flex space-y-2 flex-col text-center justify-center gap-3 items-center">

            <lord-icon
              src="https://cdn.lordicon.com/ndxfekjh.json"
              trigger="hover"
              style={{ "width": "170px", "height": "170px" }}>
            </lord-icon>
            <h1 className="font-bold bg-white">Join Our Community</h1>
            <p className="bg-white">Almost 2000 people have already joined</p>
          </div>
          <div className="flex space-y-2 text-center flex-col justify-center gap-3 items-center">
            <Link href="/dashboard">
            <lord-icon 
              src="https://cdn.lordicon.com/dypzookn.json"
              trigger="hover"
              colors="primary:#121331,secondary:#3080e8,tertiary:#b26836,quaternary:#ffc738"
              style={{ "width": "170px", "height": "170px" }}>
            </lord-icon>
            </Link>
              
            <h1 className="font-bold bg-white">Donate here</h1>
            <p className=" bg-white">All types of online payments accepted</p>
          </div>
          <div className="flex space-y-2 flex-col text-center justify-center gap-3 items-center">

            <lord-icon
              src="https://cdn.lordicon.com/nqisoomz.json"
              trigger="hover"
              colors="primary:#121331,secondary:#e4e4e4,tertiary:#4bb3fd,quaternary:#545454"
              style={{ "width": "170px", "height": "170px" }}>
            </lord-icon>
            <h1 className="bg-white font-bold">Send your queries</h1>
            <p className="bg-white">You'll get response within 24 hours</p>
            
          </div>
        </div>
      </div>

      <div className="bg-gray-700 h-1 flex opacity-10"></div>

      <div className=" text-blue-950 mx-auto container flex justify-center pb-32 pt-14  items-center ">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/3MQkPs_r0r4?si=J74D1upQSqHV-l0b" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </div>
    </>
  );
}

