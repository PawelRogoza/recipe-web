import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/";
import RandomRecipes from "./pages/RandomRecipes";
import Shared from "./components/Shared";
import CreateRecipe from "./pages/CreateRecipe";
import { indigo } from "@mui/material/colors";
import UserRecipes from "./pages/UserRecipes";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: indigo,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Shared>
          <Routes>
            <Route exact path="/" element={<RandomRecipes />}></Route>
            <Route exact path="/create" element={<CreateRecipe />}></Route>
            <Route exact path="/user-recipes" element={<UserRecipes />}></Route>
          </Routes>
        </Shared>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
