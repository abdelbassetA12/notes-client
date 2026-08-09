 

export default function ItemCard({

    title,
    subtitle,
    children,
    actions

}){

    return(
        <>
        <div className="item-card">

            <div className="item-card-header">

                <div>

                    <h3>{title}</h3>

                    {subtitle && <p>{subtitle}</p>}

                </div>

                {actions}

            </div>

            {children}

        </div>
        <style>
            {
                `
                .item-card{

    background:white;

    border:1px solid #e5e7eb;

    border-radius:14px;

    padding:18px;

    margin-top:18px;

}

.item-card-header{

    display:flex;

    justify-content:space-between;

    align-items:flex-start;

}

.item-card h3{

    font-size:17px;

    font-weight:700;

}

.item-card p{

    margin-top:6px;

    color:#6b7280;

}`
            }
        </style>
        </>

        

    );

}