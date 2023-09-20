import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import ConstructionIcon from '@mui/icons-material/Construction';
import Link from 'next/link';

function SiteDrawerItem({ text, icon, to }) {
  const Icon = icon;
  
  return (
    <ListItem key={text} disablePadding>
      <Link href={to}>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}

export default function SiteDrawer({ open, onClose }) {
  const routes = [
    ["hakan.candar.dev", HomeIcon, "/"],
    ["my projects", ConstructionIcon, "/projects"],
    ["my blog", BookIcon, "https://blog.hakan.candar.dev"],
  ];

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onClose}
    >
      <List>
        {
          routes.map(route => <SiteDrawerItem key={route[2]} text={route[0]} icon={route[1]} to={route[2]}/> )
        }
      </List>
    </Box>
  );
  
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}

    >
      {list}
    </Drawer>
  );
}