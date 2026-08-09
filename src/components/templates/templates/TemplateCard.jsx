import Button from "../../common/Button";

export default function TemplateCard({

    id,

    name,

    description,

    preview,

    active,

    onSelect

}){

    return(

        <div className={`template-card ${active ? "active" : ""}`}>

            <div className="template-preview">

                {preview}

            </div>

            <div className="template-info">

                <h3>{name}</h3>

                <p>{description}</p>

                <Button onClick={onSelect}>

                    {active ? "✓ Active" : "Use"}

                </Button>

            </div>
            <style>
                {`
                .template-card{
    border:1px solid #ddd;
    border-radius:12px;
    overflow:hidden;
    background:#fff;
    margin-bottom:20px;
}

.template-preview{
    height:220px;
    overflow:hidden;
    background:#f5f5f5;
}

.template-info{
    padding:15px;
}

.template-card.active{
    border:2px solid #2563eb;
}`}
            </style>

        </div>

    );

}