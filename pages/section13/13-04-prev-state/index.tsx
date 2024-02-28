import { useState } from "react";

export default function CounterLetDocumentPage() {
    const [ count, setCount] = useState(0);

    function onClickCountUp(){
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)

        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    // function onClickCountDown() {
    //     setCount(count-1)
    // }

    return(
        <div>
            <div>{count}</div>
            <button onClick={onClickCountUp}>count UP</button>
            {/* <button onClick={onClickCountDown}>count DOWN</button> */}
        </div>
    )
}