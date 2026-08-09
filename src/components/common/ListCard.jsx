 

export default function ListCard({

    title,

    subtitle,

    onEdit,

    onDelete

}){

    return(
        <>
        <div className="list-card">

            <div>

                <h3>

                    {title}

                </h3>

                <p>

                    {subtitle}

                </p>

            </div>

            <div className="list-card-actions">

                <button onClick={onEdit}>

                    Edit

                </button>

                <button onClick={onDelete}>

                    Delete

                </button>

            </div>

        </div>
        <style>
            {`
            .list-card{

    border:1px solid #ddd;

    border-radius:14px;

    padding:18px;

    margin-bottom:15px;

}

.list-card-actions{

    display:flex;

    gap:10px;

    margin-top:15px;

}`}
        </style>
        </>

        

    );

}