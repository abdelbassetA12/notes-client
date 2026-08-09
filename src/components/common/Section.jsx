 

export default function Section({

    children

}){

    return(
        <>
        <section className="section">

            {children}

        </section>
        <style>
            {`
            .section{

    padding:28px 0;

    border-bottom:1px solid #ececec;

}`}
        </style>
        </>

        

    );

}