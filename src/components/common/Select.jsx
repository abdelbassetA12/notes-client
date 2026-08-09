 

export default function Select({

    label,

    value,

    options,

    onChange

}){

    return(
        <>
        <div className="select-group">

            <label>

                {label}

            </label>

            <select

                value={value}

                onChange={onChange}

            >

                {

                    options.map(option=>(

                        <option

                            key={option.value}

                            value={option.value}

                        >

                            {option.label}

                        </option>

                    ))

                }

            </select>

        </div>
        <style>
            {`
            .select-group{

    display:flex;

    flex-direction:column;

    gap:8px;

    margin-bottom:18px;

}

.select-group select{

    padding:14px;

    border-radius:12px;

    border:1px solid #d1d5db;

}`}
        </style>
        </>

        

    );

}