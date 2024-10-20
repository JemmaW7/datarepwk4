// create.js
import { useState } from "react";

function Create() {
  // setting up state variables to store the title, year, and poster url of the movie
  const [title, setTitle] = useState('');  // state for the movie title
  const [year, setYear] = useState('');    // state for the movie year
  const [poster, setPoster] = useState(''); // state for the movie poster url

  // function to handle form submission
  const handleSubmit = (e) => {
    // prevent the default form submission behavior (which would reload the page)
    e.preventDefault();
    
    // log the values of title, year, and poster url to the console for testing
    console.log(title);
    console.log('year:', year);
    console.log('poster url:', poster);
  }

  return (
    <div>
      {/* header to display the title of the create component */}
      <h2>This is my Create Component.</h2>

      {/* form for entering the movie details */}
      <form onSubmit={handleSubmit}>
        {/* form group for the movie title input */}
        <div className="form-group">
          <label>add movie title: </label>
          {/* text input for the movie title, with onChange to update the state */}
          <input type="text"
            className="form-control"
            value={title}
            // update the title state whenever the input value changes
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>

        {/* form group for the movie year input */}
        <div className="form-group">
          <label>add movie year: </label>
          {/* text input for the movie year, with onChange to update the state */}
          <input
            type="text"
            className="form-control"
            value={year}
            // update the year state whenever the input value changes
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        {/* form group for the movie poster url input */}
        <div className="form-group">
          <label>add movie poster url: </label>
          {/* url input for the movie poster url, with onChange to update the state */}
          <input
            type="url"
            className="form-control"
            value={poster}
            // update the poster state whenever the input value changes
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>

        {/* submit button to trigger form submission */}
        <input type="submit" value="add movie" />
      </form>
    </div>
  );
}

export default Create; 
