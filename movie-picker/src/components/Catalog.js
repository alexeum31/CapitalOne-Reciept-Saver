import {useEffect, useState} from 'react'
import Receipt from './Receipt'
import './Catalog.css'

const Catalog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/movies')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])
    return (
        <div>
            <h1 className="title">Catalog</h1>
            <div className="movies">
                {data.map((receipt) => (
                    <Receipt name={receipt.id} genre={receipt.store} image={receipt.img}/>
                ))}
            </div>
        </div>
    )
}

export default Catalog