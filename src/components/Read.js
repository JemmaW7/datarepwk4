import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
        .then((response) => {
          setMovies(response.data.movies);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return(
        <div>
            <h3>Hello from the Read component</h3>;
            <h3><Movies myMovie={movies}/></h3>;
        </div>
      
    ) 
  };



  
  
  export default Read;