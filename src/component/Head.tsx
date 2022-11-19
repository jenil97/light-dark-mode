import { HiMoon, HiOutlineSun } from "react-icons/hi";

const Head = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100 px-8 dark:bg-slate-800">
      <div className="max-w-[600px] shadow-md p-6 rounded-md bg-white dark:bg-slate-700 dark:text-white">
        <div className="flex items-start sm:items-center mb-4">
          <h1 className="text-4xl flex-1 font-semibold">Light / Dark Mode</h1>
          <HiOutlineSun className="sun" size={30} />
          <HiMoon className="moon" size={30} />
        </div>
        <p className="text-lg font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis cum
          doloribus, deleniti harum quam modi pariatur dignissimos, vel
          necessitatibus aliquid amet placeat fugiat quod ducimus, sed aliquam
          blanditiis. Pariatur, neque.
        </p>
        <button className="py-2 px-4 bg-black text-white rounded-md dark:bg-white dark:text-slate-800">
          Learn More !
        </button>
      </div>
      <script src="../change.js"></script>
    </div>
  );
};

export default Head;
