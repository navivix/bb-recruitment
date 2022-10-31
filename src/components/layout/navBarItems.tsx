import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  Search as SearchIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import Link from "../Link";

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
