export function Course(props){

    function formatDate(date){
        return date.toLocaleDateString();

    }
    const myStyle = {
        color    : "red",
        fontSize :  30,
    };

   

    return (
        <div className="Comment" >
            <div className="UserInfo">
                <img className="Avatar"  src={props.info.author.avatarUrl} alt={props.info.author.name}  />
                <div className="UserInfo-name"> {props.info.author.name} </div>
            </div>
                <div  style={myStyle} className="Comment-text">{props.info.text}</div>
            <div>
                {formatDate(props.info.date)}
            </div>
            <div>
                <p style={myStyle} >{props.children}</p>
            </div>
        </div>
    )

}

