import AppBar from "@mui/material/AppBar";
import { Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DRAWER_WIDTH } from "./constants";

interface HeaderProps {
  toggleDrawer: () => void;
}

export default function Header({ toggleDrawer }: HeaderProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            display: {
              xs: "flex",
              sm: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Github Repository Browser
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
