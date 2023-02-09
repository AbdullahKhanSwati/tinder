import React from 'react'
import "./Header.css"
import Person2Icon from '@mui/icons-material/Person2';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
    <div className='header'>

   <IconButton>
    <Person2Icon fontSize='large' className='header_icon' />
    </IconButton>

    <IconButton>
    <img className='img_style' src='https://i.pinimg.com/originals/c0/59/3c/c0593cff936104990a9dcf6d41cc9d36.png' />
    </IconButton>

    <IconButton>
    <ForumIcon fontSize='large' className='header_icon' />
    </IconButton>
</div>
  )
}

export default Header