export default function SideBar() {
  return (
    <section className="w-[25%] h-[90vh] bg-black mt-[10vh] rounded-tr-lg pt-20 pl-10 pr-10 flex flex-col gap-10 self-center float-left">
      <h1 className="text-gray-200 font-sans text-3xl font-medium">
        YOUR PROJECTS
      </h1>
      <button className="bg-stone-700 text-gray-400 py-2 px-4 rounded-md w-40">
        + Add Project
      </button>
      <ul className="text-white flex flex-col gap-5">
        <li className="bg-slate-700 pl-5 py-1 ">Something</li>
        <li>Something</li>
      </ul>
    </section>
  );
}
    