 

export default function Checkbox({

    checked,

    onChange,

    label

}){

    return(
        <>
        <label className="checkbox">

            <input

                type="checkbox"

                checked={checked}

                onChange={onChange}

            />

            <span>

                {label}

            </span>

        </label>
        <style>
            {`
            .checkbox{

    display:flex;

    align-items:center;

    gap:10px;

    margin-top:10px;

}`}
        </style>
        </>

        

    );

}