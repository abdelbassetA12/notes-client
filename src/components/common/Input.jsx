 

export default function Input({

    label,
    value,
    onChange,
    placeholder,
    type = "text"

}) {

    return (
        <>
        <div className="input-group">

            {label && (
                <label className="input-label">

                    {label}

                </label>
            )}

            <input

                className="input"

                type={type}

                value={value}

                placeholder={placeholder}

                onChange={onChange}

            />

        </div>
        <style>
            {`
            .input-group{

    display:flex;

    flex-direction:column;

    gap:8px;

    margin-bottom:18px;

}

.input-label{

    font-size:14px;

    font-weight:600;

    color:#374151;

}

.input{

    width:100%;

    padding:14px 16px;

    border:1px solid #d1d5db;

    border-radius:12px;

    outline:none;

    transition:.2s;

}

.input:focus{

    border-color:#2563eb;

}`}
        </style>
        </>

        

    );

}