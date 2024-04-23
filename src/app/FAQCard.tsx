
const FAQCard = (props:{description: string}) =>{
    return(
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
                    <p>{props.description}</p>
            </div>
        </div>
    );
}

export default FAQCard;