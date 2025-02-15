import "../index.css";
// eslint-disable-next-line react/prop-types
export default function Wrapper( { children } ) {

    return(
        <section className="w-160 min-h-130 bg-amber-50 rounded-sm flex items-center flex-col p-8" >
            {children}
        </section>
    )
}