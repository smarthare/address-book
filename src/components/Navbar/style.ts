import { Drawer as MuiDrawer, ListItemIcon, ListItemText } from "@mui/material";
import { styled, Theme, CSSObject } from "@mui/material/styles";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(9)} + 1px)`,
});

export const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "20px 0 42px 22px",
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const StyledListItemIcon = styled(ListItemIcon)(() => ({
  minWidth: "38px",
  height: "38px",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }: { open: boolean }) => ({
  opacity: open ? 1 : 0,
  paddingLeft: "1rem",

  "& span": {
    fontSize: "1.125rem",
    fontFamily: "Gotham",
  },
}));
