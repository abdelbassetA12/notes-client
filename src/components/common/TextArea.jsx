 

export default function TextArea({
    label,
    value,
    placeholder,
    onChange
}) {

    return (
        <>
        <div className="textarea-group">

            {label && (
                <label className="textarea-label">
                    {label}
                </label>
            )}

            <textarea
                className="textarea"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />

        </div>
        <style>
            {`
            .textarea-group{

    display:flex;
    flex-direction:column;
    gap:8px;

    margin-bottom:20px;

}

.textarea-label{

    font-size:14px;
    font-weight:600;

    color:#374151;

}

.textarea{

    width:100%;

    min-height:140px;

    resize:none;

    padding:16px;

    border-radius:12px;

    border:1px solid #d1d5db;

    outline:none;

    transition:.2s;

}

.textarea:focus{

    border-color:#2563eb;

}`}
        </style>
        </>

        

    );

}