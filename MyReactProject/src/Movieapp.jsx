import { useState } from 'react';
import { Counter } from "./Counter";
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import IconButton from '@material-ui/core/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// function Movieapp({name, poster, summary, rating}) {  
export function Movieapp({ movies }) {

  const styles = {

    color: movies.rating > 8.5 ? "green" : "red",

    // color:rating > 8.5 ? "green" : "red",

  };

  const [show, setShow] = useState(true);

  //  const summaryStyles={
  //   display : show ? "block" : "none",
  //  };

  return (
    <Card className='movieContainer'>

      <img className='moviePoster' src={movies.poster} alt={movies.name} />
      <CardContent>
        <div className='wrap'>
          <h3 className='movieName'>
            {/* {name} */}
            {movies.name}
            {/* <IconButton onClick={() => setShow(!show)} aria-label="Toggle summary" color="primary">
              { show ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
            </IconButton> */}
          </h3>

          <p style={styles} className='movieRating'>
            {/* ✨{rating} */}
            ✨{movies.rating}
          </p>

        </div>

        <button onClick={() => setShow(!show)}>Toggle summary</button>

      {/* Conditional Styling: */}
        {/* <p style={summaryStyles} className="movieSummary">{summary}</p> */}

      {/* Conditional Rendering: */}
        {show ? <p className='movieSummary'>{movies.summary}</p> : null}
      
        {/* {show ? <p className= 'movieSummary'>{summary}</p> : null} */}
      </CardContent>

      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}
