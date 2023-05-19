// import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
    // let navigate = useNavigate();

    // const [name, setName] = useState('')
    // const [genre, setGenre] = useState('')
    // const [image, setImage] = useState('')

    // const nameHandler = (event) => {
    //     setName(event.target.value);
    // }

    // const storeHandler = (event) => {
    //     setStore(event.target.value);
    // }

    // const costHandler = (event) => {
    //     setCost(event.target.value);
    // }

    // const dateHandler = (event) => {
    //     setDate(event.target.value);
    // }
    
    // const idHandler = (event) => {
    //     setID(event.target.value);
    // }

    // const descriptionHandler = (event) => {
    //     setDescription(event.target.value);
    // }

    // const imageHandler = (event) => {
    //     setImage(event.target.value);
    // }

    // const addMovieHandler = () => {
    //     const newMovie = {
    //         name: name,
    //         genre: genre,
    //         img: image
    //     }

    //     fetch('http://localhost:8080/api/movies', {
    //         method: "post",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(newMovie)
    //     }).then(navigate("../", ({replace: true})))
    // }

    return (
        <div className="rectangle-25">
            <label className="welcome-back-user">Welcome Back, User!</label>            <p clasName="circle-1"></p>
            <div className="rectangle-5">Total Receipts</div>
            <div className="rectangle-17"></div>
            <div className="rectangle-22"></div>
            <div className="rectangle-18"></div>
            {/* <label className="total-receipts">Total Receipts</label> */}
            {/* <label>Image</label>
            <input onChange={imageHandler}></input>
            <button onClick={addMovieHandler}>Add Movie</button> */}
        </div>
    )
}

export default Dashboard