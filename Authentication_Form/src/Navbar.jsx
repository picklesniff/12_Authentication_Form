import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";
import NavbarStyles from "./styles/NavbarStyles";

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
};

function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { search, flag } = content[language];

  return (
    <>
   <NavbarStyles />
   <div className="root">
  <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
    <Toolbar>
      <IconButton className="menuButton" color="inherit">
        <span>{flag}</span>
      </IconButton>
      <Typography className="title" variant="h6" color="inherit">
        App Title
      </Typography>
      <Switch onChange={toggleTheme} />
      <div className="grow" />
      <div className="search">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <InputBase
          placeholder={`${search}...`}
          classes={{
            root: "inputRoot",
            input: "inputInput"
          }}
        />
      </div>
    </Toolbar>
  </AppBar>
</div>

    </>
  );
}

export default Navbar;
