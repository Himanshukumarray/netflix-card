import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./Seriescard";
const Socialmedia = () => { //name ka phla latter capital latter hoga 'S' Socialmedia
    //dynamic value change 

    // const name = "Rahul kumar";


    return (
        <ul className = "grid grid-three-cols">
            {seriesData.map((currElem) => (
                <SeriesCard key = {currElem.id} data = {currElem} />
                /*{ <li>
                    <div>
                        <img
                            src={seriesData[1].img_url}
                            alt="lr.jpg"
                            width="60%"
                            height="40%"
                        />
                    </div>
                    <h2>Name : {seriesData[1].name}</h2>
                    <h3>Ratting : {seriesData[1].rating}</h3>
                    <p> Summary : {seriesData[1].description}</p>
                    <p> Cast : {seriesData[1].cast}</p>
                    <p> Genre : {seriesData[1].genre}</p>
                    <a href={seriesData[1].watch_url} target="_blank">
                        <button>Watch Now</button></a>
                </li>
    
                <li>
                    <div>
                        <img
                            src={seriesData[2].img_url}
                            alt="lr.jpg"
                            width="60%"
                            height="40%"
                        />
                    </div>
                    <h2>Name : {seriesData[2].name}</h2>
                    <h3>Ratting : {seriesData[2].rating}</h3>
                    <p> Summary : {seriesData[2].description}</p>
                    <p> Cast : {seriesData[2].cast}</p>
                    <p> Genre : {seriesData[2].genre}</p>
                    <a href={seriesData[2].watch_url} target="_blank">
                        <button>Watch Now</button></a>
                </li>
    
                <li>
                    <div>
                        <img
                            src={seriesData[3].img_url}
                            alt="lr.jpg"
                            width="60%"
                            height="40%"
                        />
                    </div>
                    <h2>Name : {seriesData[3].name}</h2>
                    <h3>Ratting : {seriesData[3].rating}</h3>
                    <p> Summary : {seriesData[3].description}</p>
                    <p> Cast : {seriesData[3].cast}</p>
                    <p> Genre : {seriesData[3].genre}</p>
                    <a href={seriesData[3].watch_url} target="_blank">
                        <button>Watch Now</button></a>
                </li>
    
                <li>
                    <div>
                        <img
                            src={seriesData[4].img_url}
                            alt="lr.jpg"
                            width="60%"
                            height="40%"
                        />
                    </div>
                    <h2>Name : {seriesData[4].name}</h2>
                    <h3>Ratting : {seriesData[4].rating}</h3>
                    <p> Summary : {seriesData[4].description}</p>
                    <p> Cast : {seriesData[4].cast}</p>
                    <p> Genre : {seriesData[4].genre}</p>
                    <a href={seriesData[4].watch_url} target="_blank">
                        <button>Watch Now</button></a>
                </li>
    
                <li>
                    <div>
                        <img
                            src={seriesData[5].img_url}
                            alt="lr.jpg"
                            width="60%"
                            height="40%"
                        />
                    </div>
                    <h2>Name : {seriesData[5].name}</h2>
                    <h3>Ratting : {seriesData[5].rating}</h3>
                    <p> Summary : {seriesData[5].description}</p>
                    <p> Cast : {seriesData[5].cast}</p>
                    <p> Genre : {seriesData[5].genre}</p>
                    <a href={seriesData[5].watch_url} target="_blank">
                        <button>Watch Now</button></a>
                </li>
    
                <li>
                    <div>
                        <img
                            src={seriesData[6].img_url}
                            alt="lr.jpg"
                            width="60%"
                            height="40%"
                        />
                    </div>
                    <h2>Name : {seriesData[6].name}</h2>
                    <h3>Ratting : {seriesData[6].rating}</h3>
                    <p> Summary : {seriesData[6].description}</p>
                    <p> Cast : {seriesData[6].cast}</p>
                    <p> Genre : {seriesData[6].genre}</p>
                    <a href={seriesData[6].watch_url} target="_blank">
                        <button>Watch Now</button></a>
                </li> }*/

            ))}
        </ul>
    )
};
// export const Footer = () =>{
//     return <p>copyright @himanshuray</p>
// };
export default Socialmedia;