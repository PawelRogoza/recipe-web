import React from "react";
import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import RecipeCard from "../components/RecipeCard";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import RefreshIcon from "@mui/icons-material/Refresh";
import RandomRecipe from "../components/RandomRecipe";

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

export default function Recipes() {
  const styles = useStyles();
  // const API = `https://random-recipes.p.rapidapi.com/ai-quotes`;
  const API = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    fetch(`${API}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((err) => console.error(err.message, err));
  }, []);

  // Get all ingredients and format them into a string
  const getIngredients = (i, arr) => {
    if (recipes) {
      arr.push(recipes.meals[i].strIngredient1);
      arr.push(recipes.meals[i].strIngredient2);
      arr.push(recipes.meals[i].strIngredient3);
      arr.push(recipes.meals[i].strIngredient4);
      arr.push(recipes.meals[i].strIngredient5);
      arr.push(recipes.meals[i].strIngredient6);
      arr.push(recipes.meals[i].strIngredient7);
      arr.push(recipes.meals[i].strIngredient8);
      arr.push(recipes.meals[i].strIngredient9);
      arr.push(recipes.meals[i].strIngredient10);
      arr.push(recipes.meals[i].strIngredient11);
      arr.push(recipes.meals[i].strIngredient12);
      arr.push(recipes.meals[i].strIngredient13);
      arr.push(recipes.meals[i].strIngredient14);
      arr.push(recipes.meals[i].strIngredient15);
      arr.push(recipes.meals[i].strIngredient16);
      arr.push(recipes.meals[i].strIngredient17);
      arr.push(recipes.meals[i].strIngredient18);
      arr.push(recipes.meals[i].strIngredient19);
      arr.push(recipes.meals[i].strIngredient20);

      // filter and format to a string
      arr = arr.filter((ing) => ing !== "").join(", ");
      return arr;
    }
  };

  if (recipes) console.log(recipes.meals[0]);

  // Filter empty ingredients
  let ingredients1 = [];
  ingredients1 = getIngredients(0, ingredients1);
  if (ingredients1) console.log(ingredients1);

  return (
    <div className={styles.spacing}>
      {/* RANDOM RECIPE CARD */}
      {recipes && (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <RandomRecipe
              recipeName={recipes.meals[0].strMeal}
              image={recipes.meals[0].strMealThumb}
              instructions={recipes.meals[0].strInstructions}
              category={recipes.meals[0].strCategory}
              cousine={recipes.meals[0].strArea}
              ingredients={ingredients1}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
