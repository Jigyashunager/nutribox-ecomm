import React, {useEffect} from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const ProgressCircleBar = () => {

    useEffect(() => {
 
        
    }, [])
    
  return (
    <div>
        <CircularProgress variant="determinate" value={50} className='circle-progress-bar'/>
        <p className='rating-circle'>2.5</p>
    </div>
  )
}

export default ProgressCircleBar