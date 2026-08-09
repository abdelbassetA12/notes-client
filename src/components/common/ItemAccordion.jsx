import { useState } from "react";

export default function ItemAccordion({

    title,

    children,

    defaultOpen = false

}){

    const [open, setOpen] = useState(defaultOpen);

    return(

        <>
            <div className="item-accordion">

                <div
                    className="item-header"
                    onClick={() => setOpen(!open)}
                >

                    <strong>

                        {title}

                    </strong>

                    <span>

                        {open ? "−" : "+"}

                    </span>

                </div>

                {

                    open && (

                        <div className="item-content">

                            {children}

                        </div>

                    )

                }

            </div>

            <style>{`

.item-accordion{

    border:1px solid #e5e7eb;

    border-radius:12px;

    margin-top:18px;

    overflow:hidden;

    background:#fff;

}

.item-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:18px;

    cursor:pointer;

    background:#fafafa;

    transition:.2s;

}

.item-header:hover{

    background:#f3f4f6;

}

.item-content{

    padding:20px;

    border-top:1px solid #e5e7eb;

}

`}</style>

        </>

    );

}