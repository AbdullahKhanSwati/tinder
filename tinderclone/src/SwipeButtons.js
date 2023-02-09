import React from 'react'
import { IconButton } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import StarRateTwoToneIcon from '@mui/icons-material/StarRateTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import "./Swipebtn.css";

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
<IconButton>
<ReplyIcon  fontSize='large' className='fir'/>
</IconButton>

<IconButton>
<CloseIcon  fontSize='large' className='sec'/>
</IconButton>

<IconButton>
<StarRateTwoToneIcon  fontSize='large' className='thi'/>
</IconButton>

<IconButton>
<FavoriteIcon  fontSize='large' className='fou'/>
</IconButton>

<IconButton>
<FlashOnIcon  fontSize='large' className='fif'/>
</IconButton>

    </div>
  )
}

export default SwipeButtons