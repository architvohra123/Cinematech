import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
  }
  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      <div onClick={handleClick}>
        <div style={{cursor: 'pointer'}}>
          Cinema<span style={{ color: theme.palette.primary.main,  }}>Tech</span>
        </div>
      </div>
    </Typography>
  );
};

export default Logo;