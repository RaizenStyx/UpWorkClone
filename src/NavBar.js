import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import {
  SECONDARY_NAVY,
  Search,
  StyledInputBase,
  SearchIconWrapper
} from "./StyledComponents";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ padding: "0 10%", background: SECONDARY_NAVY }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 !important"
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: "flex" }}>
            <Button color="inherit">Find a Job</Button>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
