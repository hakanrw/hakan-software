import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function Navbar({ onOpen }) {
  return (
    <Box sx={{flexGrow: 1, mb: 4}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Typography variant="h6" component="div" sx={{ cursor: "pointer" }}>
              hakan.candar.dev
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
