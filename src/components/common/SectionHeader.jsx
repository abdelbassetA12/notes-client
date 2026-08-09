 

export default function SectionHeader({

    title,

    action

}){

    return(
        <>
        <div className="section-header">

            <h2>

                {title}

            </h2>

            {action}

        </div>
        <style>
            {`
            .section-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:22px;

}

.section-header h2{

    font-size:20px;

    font-weight:700;

}`}
        </style>
        </>

        

    );

}