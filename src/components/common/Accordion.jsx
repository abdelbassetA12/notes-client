 import { useState } from "react";

export default function Accordion({

    title,

    subtitle,

    children

}){

    const [open,setOpen]=useState(false);

    return(
        <>
            <div className="accordion">

                <div
                    className="accordion-header"
                    onClick={()=>setOpen(!open)}
                >

                    <div>

                        <h3>{title}</h3>

                        <p>{subtitle}</p>

                    </div>

                    <span>

                        {open ? "-" : "+"}

                    </span>

                </div>

                {

                    open && (

                        <div className="accordion-content">

                            {children}

                        </div>

                    )

                }

            </div>

             <style>
            {`
            .accordion{

    border:1px solid #e5e7eb;

    border-radius:14px;

    margin-top:18px;

    overflow:hidden;

}

.accordion-header{

    padding:18px;

    cursor:pointer;

    display:flex;

    justify-content:space-between;

    align-items:center;

    background:#fff;

}

.accordion-content{

    padding:20px;

    border-top:1px solid #ececec;

}`}
        </style>

        </>
    );

}
/*
export default function Accordion({

    title,

    subtitle,

    open,

    onToggle,

    children

}){

    return(
        <>
        <div className="accordion">

            <div

                className="accordion-header"

                onClick={onToggle}

            >

                <div>

                    <h3>{title}</h3>

                    <p>{subtitle}</p>

                </div>

                <span>

                    {

                        open

                        ? "-"

                        : "+"

                    }

                </span>

            </div>

            {

                open && (

                    <div

                        className="accordion-content"

                    >

                        {children}

                    </div>

                )

            }

        </div>
        <style>
            {`
            .accordion{

    border:1px solid #e5e7eb;

    border-radius:14px;

    margin-top:18px;

    overflow:hidden;

}

.accordion-header{

    padding:18px;

    cursor:pointer;

    display:flex;

    justify-content:space-between;

    align-items:center;

    background:#fff;

}

.accordion-content{

    padding:20px;

    border-top:1px solid #ececec;

}`}
        </style>
        </>

        

    );

}*/