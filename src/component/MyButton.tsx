import React, { useState } from "react";
import {useCounter} from '../provider/Counter';

interface MyButtonProps{
    text: string | number;
    onClick?: () => void
    disable?: boolean 
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    // return <button onClick={props.onClick} disabled={props.disable} >{props.text}</button>
    
    /* destructuring props */
    // const {text, onClick, disable} = props;
    // return <button onClick={onClick} disabled={disable} >{text}</button>

    /* use useState hook with number type */
    // const [value, setValue] = useState(1);
    // const counter = () => {
    //     setValue(value+1)
    // }
    // return (
    //     <>
    //     <button onClick={counter} disabled={disable} >{text}</button>
    //     <div>{value}</div>
    //     </>
    // )

    /* use useState hook with object */
    // interface Mobile{
    //     name: string;
    //     price: number
    // }
    // const [mobile, setMobile] = useState<Mobile>({
    //     name: "X",
    //     price: 10.000
    // });
        
    // return (
    //     <>
    //     <div>Name: {mobile.name}</div>
    //     <div>Price: {mobile.price}</div>
    //     </>
    // )

    /* use useContext hook */
    const context = useCounter();
    return (
        <div>
            <h6 onClick={(e) => context?.setCount(context?.value + 1) }>{context?.value}</h6>
        </div>
    );

}

export default MyButton;