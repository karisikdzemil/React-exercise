export default function Button( {children, textBtn, className, ...props} ) {
    let cssClass = textBtn ? 'text-button' : 'button';
    cssClass += ' ' + className;
    return(
        <button className={cssClass} {...props}>{children}</button>
    )
}