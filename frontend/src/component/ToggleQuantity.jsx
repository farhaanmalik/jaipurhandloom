/* eslint-disable react/prop-types */
import { useState } from "react";


const ToggleQuantity = () => {
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    const setIncrease = () => {
        amount < 10 ? setAmount(amount + 1) : setAmount(10);
    };

    return (
        <>
            <div className="flex items-center mt-3 bg-slate-50 w-fit rounded">
                <button className="text-lg font-bold cursor-pointer border rounded border-slate-200 w-5 hover:bg-slate-100"
                    onClick={() => setDecrease()} >-</button>
                <div className="w-8 text-center">{amount}</div>
                <button className="text-lg font-bold cursor-pointer border rounded border-slate-200 w-5 hover:bg-slate-100" onClick={() => setIncrease()}>+</button>
            </div>
        </>
    )
}

export default ToggleQuantity
