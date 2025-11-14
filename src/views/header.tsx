import bgImage from "../assets/images/bg_image.jpg";

export default function Header() {
  return (
    <div className="w-full h-screen text-white">
      <div className="w-full h-full relative">
        <div className="flex flex-col absolute top-0 bottom-0 left-0 right-0">
          <ul className="flex justify-end items-end gap-3">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <img src={bgImage} className="object-cover h-full w-full  " />

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl text-white">Welcome to Our web site</h1>
          <button className="bg-blue-600 py-3 px-5 rounded-2xl">
            <span className="text-[20px]">Start</span>
          </button>
        </div>
      </div>
      <div className="absolute right-0 left-0 top-0 bottom-0  bg-linear-to-t from-blue-900 to-transparent "></div>
    </div>
  );
}
