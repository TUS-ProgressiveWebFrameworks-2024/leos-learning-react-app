const Grade = (props) => {
    return(
        <div>
            <p>Name: {props.person.name}</p>  
            <p>Math: {props.person.grade.math}</p>
            <p>Geography: {props.person.grade.geography}</p>
        </div>
    )     
}


export default Grade;