import Button from "./Button";

 

export default function ActionButtons({

    onEdit,

    onDelete

}){

    return(
        <>
        <div className="action-buttons">

            <Button

                variant="secondary"

                onClick={onEdit}

            >

                Edit

            </Button>

            <Button

                variant="danger"

                onClick={onDelete}

            >

                Delete

            </Button>

        </div>
        <style>
            {`
            .action-buttons{

    display:flex;

    gap:10px;

}`}
        </style>
        </>

        

    );

}