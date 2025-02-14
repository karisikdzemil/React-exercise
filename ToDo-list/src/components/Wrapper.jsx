import "../index.css";
export default function Wrapper( { children } ) {

    return(
        <section className="w-160 min-h-130 bg-center bg-amber-50 rounded-sm absolute top-30 right-100 flex items-center flex-col p-8" >
            {children}
        </section>
    )
}