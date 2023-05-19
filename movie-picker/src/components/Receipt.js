import './Receipt.css';

const Receipt = ({store, cost, date, id, description, image}) => {
    return (
        <div className="movie">
            <img src={image} alt={date + "receipt"}></img>
            <p className="cost">{cost}</p>
            <p className="date">{date}</p>
            <p className="id">{id}</p>
            <p className="description">{description}</p>
        </div>
    );
}

export default Receipt;
