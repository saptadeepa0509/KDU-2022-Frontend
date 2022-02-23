import React from 'react'
import './Profile.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Avatar, Box, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user';

const Profile = () => {
  const [active, setActive] = React.useState<string>('tweets');

  const user = useSelector((state: any) => state.user.value);


  

  const handleActive = (text: string) => {
    setActive(text);
  }

  return (
    <Box className='profile' title="profile">
      <Box className="profile__header">
        {/* <Link to="/"> */}
          <ArrowBackIcon className='back-btn' />
        {/* </Link> */}
        <Box className="profile__header__title">
          <Typography variant='h4'>{user.name}</Typography>
          <Typography variant='subtitle2'>0 Tweets</Typography>
        </Box>
      </Box>

      <Box className="profile-background">
        <Box className="profile-background__upper">
          <Box className="profile-avatar" title="avatar-box">
            <Avatar className='profile-avatar-img' title="avatar" sx={{ width: '4vw', height: '4vw' }} src={user.avatar} />
          </Box>
        </Box>
        <Box className="profile-background__lower">

          {/* "https://images.news18.com/ibnlive/uploads/2022/02/kacha-badam.png" */}
          <Box className="profile-title">
            <Typography variant='h4'>{user.name}</Typography>
            <span>{user.id}</span>
          </Box>
          <Box className="profile-calendar">
            <DateRangeIcon /><span>Joined October 2021</span>
          </Box>
          <Box className="profile-counts">
            <Box className="profile-counts following">
              <h3>1</h3><span>Following</span>
            </Box>
            <Box className="profile-counts followers">
              <h3>1000</h3><span>Followers</span>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="profile-data-options">
        <Box className="profile-data__tweets">
          <h3>Tweets</h3>
        </Box>

        <Box className="profile-data__replies"><h3>Tweets & Replies</h3></Box>
        <Box className="profile-data__media"><h3>Media</h3></Box>
        <Box className="profile-data__likes"><h3>Likes</h3></Box>
      </Box>
      <Outlet />
    </Box>
  )
}

export default Profile