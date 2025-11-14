import bgImage from "../assets/images/bg2.jpg";
import AnimatedTitle from "../components/animated_words";

export default function Header() {
  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full relative">
        <div className="flex flex-col absolute top-0 left-0 right-0 p-5 z-20">
          <ul className="flex justify-end items-center gap-6">
            <li>
              <a
                href="#home"
                className="relative pb-1 hover:after:w-full after:absolute after:left-0 after:bottom-0 
                   after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 cursor-pointe"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="relative pb-1 hover:after:w-full after:absolute after:left-0 after:bottom-0 
                   after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#security"
                className="relative pb-1 hover:after:w-full after:absolute after:left-0 after:bottom-0 
                   after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300"
              >
                Security
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="relative pb-1 hover:after:w-full after:absolute after:left-0 after:bottom-0 
                   after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <img src={bgImage} className="object-cover h-full w-full  " />

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  flex flex-col items-center justify-center"
        >
          <AnimatedTitle />
          <button className="bg-blue-700 py-3 px-5 rounded-2xl cursor-pointer hover:bg-blue-600">
            {/* <span className="text-[20px]">Start</span> */}
            <a href="#home"> Start</a>
          </button>
        </div>
      </div>
      {/* <div className="absolute right-0 left-0 top-0 bottom-0  bg-linear-to-t from-blue-900 to-transparent "></div> */}
    </div>
  );
}
