import React, { useEffect } from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { DeleteOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  spacing: {
    marginTop: "80px",
  },
  card: {
    marginTop: "80px",
    width: "400px",
  },
});

const API = `http://localhost:5000/recipes`;

// expand recipe
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeCard({ recipe, deleteRecipe }) {
  const styles = useStyles();

  const cousineCategory = `${recipe.cousine} Cousine - ${recipe.category}`;

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={styles.card}>
      <CardHeader
        className={styles.cardHeaderFont}
        action={
          <IconButton>
            <DeleteOutlined onClick={() => deleteRecipe(recipe.id)} />
          </IconButton>
        }
        title={
          <Typography variant="h6" component="h2">
            {recipe.name}
          </Typography>
        }
        subheader={cousineCategory}
      />
      {/* <CardMedia component="img" height="160" image={image} alt={recipe.name} /> */}
      <CardContent>
        <Typography variant="body2" color="textPrimary">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton></IconButton>
      </CardActions>
      {/* Handle expande */}
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
      {/* Expanded content */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5">How to cook</Typography>
          <Typography paragraph fontSize={16}>
            {recipe.description}
          </Typography>
          <Typography variant="h5">Ingredients</Typography>
          <Typography paragraph fontSize={16}>
            {recipe.ingredients}
          </Typography>
          <Typography></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
