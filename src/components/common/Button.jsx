 

export default function Button({

    children,

    onClick,

    variant = "primary",

    type = "button"

}){

    return(
        <>
        <button

            className={`btn ${variant}`}

            type={type}

            onClick={onClick}

        >

            {children}

        </button>
        <style>
            {`
            .btn{

    border:none;

    cursor:pointer;

    border-radius:12px;

    padding:12px 18px;

    font-size:14px;

    font-weight:600;

}

.btn.primary{

    background:#2563eb;

    color:white;

}

.btn.secondary{

    background:white;

    border:1px solid #d1d5db;

}

.btn.danger{

    background:#dc2626;

    color:white;

}`}
        </style>
        </>

        

    );

}