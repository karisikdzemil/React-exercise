import { createContext, useState } from "react";

const ProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

export function ProgressContextProvider( {children} ){
    const [updateProgress, setUpdateProgress] = useState('');

    function showCart(){
        setUpdateProgress('cart');
    }

    function hideCart(){
        setUpdateProgress('');
    }

    function showCheckout(){
        setUpdateProgress("checkout");
    }

    function hideCheckout(){
        setUpdateProgress('');
    }

    const progressCtx = {
        progress: updateProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return <ProgressContext value={progressCtx}>{children}</ProgressContext>
}

export default ProgressContext;