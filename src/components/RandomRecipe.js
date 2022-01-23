import React from "react";
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

// TODO -> refresh random card component only
const refresh = () => {
  window.location.reload();
};

const useStyles = makeStyles({
  spacing: {
    marginTop: "80px",
  },
  card: {
    width: "400px",
    margin: "auto",
  },
});

export default function RecipeCard({
  recipeName,
  category,
  image,
  instructions,
  cousine,
  ingredients,
}) {
  const styles = useStyles();

  const cousineCategory = `${cousine} Cousine - ${category}`;

  console.log(instructions);

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={styles.card}>
      <CardHeader
        className={styles.cardHeaderFont}
        action={
          <IconButton onClick={refresh} variant="outlined" color="primary">
            <RefreshIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6" component="h2">
            {recipeName}
          </Typography>
        }
        subheader={cousineCategory}
      />
      <CardMedia component="img" height="160" image={image} alt={recipeName} />
      <CardContent>
        <Typography variant="body1" color="textPrimary">
          Losowy przepis - rozwiń aby zobaczyć instrukcję przygotowania oraz
          listę potrzebnych składników.
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
          <Typography variant="h5">Sposób przygotowania</Typography>
          <Typography paragraph fontSize={16}>
            {instructions}
          </Typography>
          <Typography variant="h5">Składniki</Typography>
          <Typography paragraph fontSize={16}>
            {ingredients}
          </Typography>
          <Typography></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
