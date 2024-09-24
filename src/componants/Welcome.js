import Day from './Day.js'
    const Welcome = (props) => {
        return(
            <div>
                <p>Hi {props.person.name}, welcome to my first react app. You are in {props.person.country}. You are {props.person.age} years old</p>
                <p>today is {new Date().toDateString()}</p>
                <Day short = {false}/>
            </div>
        )     
    }


export default Welcome;