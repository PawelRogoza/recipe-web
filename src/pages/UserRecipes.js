import React from "react";
import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import RecipeCard from "../components/RecipeCard";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import RefreshIcon from "@mui/icons-material/Refresh";

const useStyles = makeStyles({
  btn: {
    height: "7%",
    width: "7vh",
    // marginBottom: "px",
  },
  spacing: {
    marginTop: "100px",
  },
});

const API = `http://localhost:5000/recipes`;

export default function UserRecipes() {
  const styles = useStyles();

  const [recipes, setRecipes] = useState([]);

  // fetch from json server
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err.message));
  }, []);

  const deleteRecipe = async (id) => {
    await fetch(`${API}/` + id, {
      method: "DELETE",
    });
    const recipesUpdated = recipes.filter((recipe) => recipe.id != id);
    setRecipes(recipesUpdated);
  };

  return (
    <Container>
      <Grid container>
        {recipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} md={6} lg={6} spacing={2}>
            <RecipeCard
              recipe={recipe}
              deleteRecipe={deleteRecipe}
            ></RecipeCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
