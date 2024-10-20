import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";

// read component to fetch and display movies
const Read = () => {

    // setting up state to hold the movie data
    const [movies, setMovies] = useState([]);

    // useEffect hook to fetch movie data from the API on component mount
    useEffect(() => {
      // sending a GET request to the json blob API
      axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
        .then((response) => {
          // storing the movies data in state when the request is successful
          setMovies(response.data.movies);
        })
        .catch((error) => {
          // logging any errors that occur during the API request
          console.log(error);
        });
    }, []); // empty dependency array to ensure it only runs once when the component mounts

    return(
        <div>
            {/* header to display a message */}
            <h3>hello from the read component</h3>;
            {/* passing the movies data to the Movies component as a prop */}
            <h3><Movies myMovie={movies}/></h3>;
        </div>
    );
};

// exporting the Read component to be used in other files
export default Read;
