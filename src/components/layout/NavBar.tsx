import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { Toolbar, IconButton, Divider, List } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { navBarItems } from "./navBarItems";
import { DRAWER_WIDTH } from "./constants";

interface NavBarProps {
  open: boolean;
  toggleDrawer: () => void;
}

export default function NavBar(props: NavBarProps) {
  const drawer = (
    <>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton
          onClick={props.toggleDrawer}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">{navBarItems}</List>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={props.open}
        onClose={props.toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
          },
        }}
        open
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        ></Toolbar>
        <Divider />
        <List component="nav">{navBarItems}</List>
      </Drawer>
    </>
  );
}
