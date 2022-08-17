import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ContactsIcon from "@mui/icons-material/Contacts";

import logo from "../../assets/logo.svg";
import logoIcon from "../../assets/logo-icon.svg";
import {
  Drawer,
  DrawerHeader,
  StyledListItemIcon,
  StyledListItemText,
} from "./style";

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img src={open ? logo : logoIcon} alt="Bequest logo" height={30} />
        </DrawerHeader>

        <List>
          <ListItem key="Address Book" disablePadding>
            <ListItemButton sx={{ p: "10px 16px" }}>
              <StyledListItemIcon>
                <ContactsIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Address Book" open={open} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem sx={{ flexDirection: "row-reverse" }}>
            <IconButton onClick={handleDrawerToggle} sx={{ p: "12px" }}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </>
  );
}
