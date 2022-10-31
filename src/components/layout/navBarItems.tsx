import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  Search as SearchIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Link = (props: any) => (
  <RouterLink style={{ textDecoration: "none", color: "black" }} {...props} />
);

export const navBarItems = (
  <>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Search repositories" />
      </ListItemButton>
    </Link>
    <Link to="/user/navivix">
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="User's repositories" />
      </ListItemButton>
    </Link>
  </>
);
