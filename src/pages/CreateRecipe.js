import React, { useState } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Radio, RadioGroup } from "@material-ui/core";
import { FormControl, FormLabel } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    marginTop: "80px",
    background: "aliceblue",
    width: "30%",
    minHeight: "420px",
    padding: "40px",
  },
  formField: {
    marginTop: 15,
    marginBottom: 15,
    display: "block",
  },
  title: {
    marginTop: "20px",
  },
  button: {
    // fontSize: "12px",
    marginTop: "10px",
    width: "10vh",
  },
});

const API = `http://localhost:5000/recipes`;

export default function CreateRecipe() {
  const styles = useStyles();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [vegetarian, setVegetarian] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [ingredientsError, setIngredientsError] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (ingredients === "") {
      setIngredientsError(true);
    } else {
      setIngredientsError(false);
    }
    if (name && ingredients) {
      fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          category,
          ingredients,
          instructions,
          vegetarian,
        }),
      }).then(() => navigate("/"));
    }
    console.log("test");
  };

  return (
    <Container className={styles.container}>
      <Typography className={styles.title} variant="h4">
        Dodaj przepis
      </Typography>
      <form onSubmit={submit}>
        <TextField
          className={styles.formField}
          onChange={(e) => setName(e.target.value)}
          label="Nazwa dania"
          variant="outlined"
          color="primary"
          fullWidth
          required
        ></TextField>
        <TextField
          className={styles.formField}
          onChange={(e) => setIngredients(e.target.value)}
          label="Składniki"
          variant="outlined"
          color="primary"
          multiline
          rows={3}
          fullWidth
          required
        ></TextField>
        <TextField
          className={styles.formField}
          onChange={(e) => setIngredients(e.target.value)}
          label="Instrukcje przygotowania"
          variant="outlined"
          color="primary"
          multiline
          rows={5}
          fullWidth
          required
        ></TextField>

        <FormControl>
          <FormLabel>Danie</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="vege"
              control={<Radio color="primary" />}
              label="Wegetariańskie"
            ></FormControlLabel>
            <FormControlLabel
              value="meat"
              control={<Radio color="primary" />}
              label="Mięsne"
            ></FormControlLabel>
          </RadioGroup>
        </FormControl>

        <Button
          className={styles.button}
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<SendRoundedIcon></SendRoundedIcon>}
        >
          Dodaj
        </Button>
      </form>
    </Container>
  );
}
