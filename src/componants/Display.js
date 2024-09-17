import image from './images/evil dog.png';

function Display() {
       return(
            <div>
                <img src={image} className="App-image" alt="second-picture" />
            </div>
        )    
}

export default Display;