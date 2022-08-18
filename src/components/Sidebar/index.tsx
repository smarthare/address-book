import * as React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  IconButton,
} from "@mui/material";
import { ChevronLeft, Contacts, ChevronRight } from "@mui/icons-material";

import logo from "assets/logo.svg";
import logoIcon from "assets/logo-icon.svg";
import {
  Drawer,
  DrawerHeader,
  StyledListItemIcon,
  StyledListItemText,
} from "./style";

export default function Sidebar() {
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
                <Contacts />
              </StyledListItemIcon>
              <StyledListItemText primary="Address Book" open={open} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem sx={{ flexDirection: "row-reverse" }}>
            <IconButton onClick={handleDrawerToggle} sx={{ p: "12px" }}>
              {open ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </>
  );
}
