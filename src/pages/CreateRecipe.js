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
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: "100px",
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
    marginTop: "20px",
    width: "10vh",
  },
});

const API = `http://localhost:5000/recipes`;

export default function CreateRecipe() {
  const styles = useStyles();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cousine, setCousine] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [path, setPath] = useState("");
  const [time, setTime] = useState();

  const submit = (e) => {
    e.preventDefault();

    if (name && ingredients) {
      fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          category,
          cousine,
          ingredients,
          path,
          instructions,
          time,
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
          onChange={(e) => setCousine(e.target.value)}
          label="Kuchnia"
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
          onChange={(e) => setInstructions(e.target.value)}
          label="Instrukcje przygotowania"
          variant="outlined"
          color="primary"
          multiline
          rows={5}
          fullWidth
        ></TextField>

        <TextField
          className={styles.formField}
          onChange={(e) => setPath(e.target.value)}
          label="Link do zdjęcia"
          variant="outlined"
          color="primary"
          fullWidth
        ></TextField>

        <FormControl className={styles.formField}>
          <InputLabel>Czas przygotowania</InputLabel>
          <Select
            value={time}
            label="Time"
            onChange={(e) => setTime(e.target.value)}
            style={{ width: "200px" }}
          >
            <MenuItem value={"do 30 minut"}>Do 30 minut</MenuItem>
            <MenuItem value={"do godziny"}>Do godziny</MenuItem>
            <MenuItem value={"do dwóch godzin"}>Do dwóch godzin</MenuItem>
            <MenuItem value={"powyżej dwóch godzin"}>
              Powyżej dwóch godzin
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl className={styles.formField}>
          <FormLabel>Danie</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="danie wegetariańskie"
              control={<Radio color="primary" />}
              label="Wegetariańskie"
            ></FormControlLabel>
            <FormControlLabel
              value="danie z mięsem"
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
          endIcon={<SendRoundedIcon />}
        >
          Dodaj
        </Button>
      </form>
    </Container>
  );
}
