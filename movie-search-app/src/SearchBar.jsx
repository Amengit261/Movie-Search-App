import { useState } from "react";

function SearchBar() {
const [movieTitle, setMovieTitle] = useState("");

return (
<> <h1>Movie Search App</h1>

```
  <input
    type="text"
    placeholder="Enter movie title"
    value={movieTitle}
    onChange={(event) => setMovieTitle(event.target.value)}
  />

  <button>Search</button>
</>


);
}

export default SearchBar;
