
 

export default function Row({ children }) {

    return (
        <>
        <div className="form-row">

            {children}

        </div>
        <style>
            {`
            .form-row{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:15px;

    margin-bottom:18px;

}`}
        </style>
        </>

        

    );

}