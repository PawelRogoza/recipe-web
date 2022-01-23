import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ListItemButton } from "@mui/material";
import { Drawer } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddCircleOutlined } from "@mui/icons-material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { Paper } from "@mui/material";

const useStyles = makeStyles({
  flexContainer: {
    width: "100%",
    // padding: "10px",
    gap: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    width: "auto",
    // margin: "auto",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default function Shared({ children }) {
  // CUSTOM CSS
  const styles = useStyles();

  // Navigation to pages
  const navigate = useNavigate();

  return (
    <div>
      {/* DRAWER */}
      <Drawer variant="permanent" anchor="top">
        <List className={styles.flexContainer}>
          {/* ALL RECIPES */}
          <ListItem
            className={styles.listItem}
            button
            onClick={() => navigate("/")}
          >
            <ListItemIcon>
              <AutoStoriesIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Losowy przepis" />
          </ListItem>
          {/* CREATE */}
          <ListItem
            className={styles.listItem}
            button
            onClick={() => navigate("/create")}
          >
            <ListItemIcon>
              <AddCircleOutlined color="primary" />
            </ListItemIcon>
            <ListItemText primary="Dodaj przepis" />
          </ListItem>
          {/* USER RECIPIES */}
          <ListItem
            className={styles.listItem}
            button
            onClick={() => navigate("/user-recipes")}
          >
            <ListItemIcon>
              <SoupKitchenIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Własne przepisy" />
          </ListItem>
        </List>
      </Drawer>
      {/* CHILDREN COMPONENTS */}
      <div>{children}</div>
    </div>
  );
}
