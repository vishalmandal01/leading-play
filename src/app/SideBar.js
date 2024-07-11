import { CrossIcon } from "../../public/SVG/CommonIcons";
import ToolSection from "./tools/ToolSection";

export default function SideBar({ handleSideBar, openSidebar }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-40  backdrop-blur-[3px] duration-700 inset-0 top-0 transform ease-in-out " +
        (openSidebar
          ? " transition-opacity opacity-100  -translate-x-0"
          : " -transition-all delay-500 opacity-0 -translate-x-full")
      }
    >
      {/* bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 */}
      {/* bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 */}
      <section
        className={
          " h-screen ml-2 w-[320px] left-0 absolute rounded-[20px] bg-gradient-to-tr from-gray-950 via-violet-950/80 to-purple-900/10 shadow-xl delay-400 duration-500 ease-in-out transition-all transform  "
          //  +(isOpen ? " -translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="flex flex-col p-5">
          <div className=" flex justify-end">
            <CrossIcon
              className=" cursor-pointer scale-90 hover:scale-100"
              onClick={handleSideBar}
            />
          </div>
          <ToolSection />
         
        </div>
      </section>
    </main>
  );
}
