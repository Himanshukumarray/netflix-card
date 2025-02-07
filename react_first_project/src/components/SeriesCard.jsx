export const SeriesCard = (props) => {
    const { img_url, name, rating, description, cast, genre, watch_url } = props.data;
    return (
        <li className="card">
            <div>
                <img
                    src={img_url}
                    alt={name}
                    width="80%"
                    height="80%"
                />
            </div>

            <div className="card_content">
                <h2>Name : {name}</h2>
                <h3>Ratting : {rating}</h3>
                <p> Summary : {description}</p>
                <p> Cast : {cast}</p>
                <p> Genre : {genre}</p>
                <a href={watch_url} target="_blank">
                    <button>Watch Now</button></a>
            </div>
        </li>
    );
}