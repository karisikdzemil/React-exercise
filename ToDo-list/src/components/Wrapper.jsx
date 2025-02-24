// eslint-disable-next-line react/prop-types
export default function Wrapper( {children} ) {

  return (
    <section className="w-[100%] min-h-[100vh] bg-indigo-500 flex flex-col items-center justify-center gap-7">
      <h1 className="text-sky-300 text-5xl font-bold">ToDo List</h1>
      {children}
    </section>
  );
}
