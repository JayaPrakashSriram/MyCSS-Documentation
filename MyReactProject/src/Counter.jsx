import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
// import Badge from '@material-ui/core/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      {/* <button onClick={() => setLike(like + 1)} >👍{like}</button>
      <button onClick={() => setDisLike(disLike + 1)} >👎{disLike}</button> */}
       <IconButton 
          onClick={() => setLike(like + 1)} 
          aria-label="like movie" 
          color="primary">
            👍{like}
            {/* <Badge badgeContent={like} color="primary">
              👍
            </Badge> */}
      </IconButton>

      <IconButton 
          onClick={() => setDisLike(disLike + 1)} 
          aria-label="dislike movie" 
          color="error">
            👎{disLike}
            {/* <Badge badgeContent={disLike} color="error">
              👎
            </Badge> */}
      </IconButton>
    </div>
  );
}
