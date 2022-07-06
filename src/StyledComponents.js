import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import Input from "@mui/material/Input";
import InputBase from "@mui/material/InputBase";

export const PRIMARY_GREEN = "#39B54A";
export const SECONDARY_NAVY = "#2B5468";

export const MainBody = styled(Box)(() => ({
  padding: "50px 10%",
  height: "500px",
  display: "flex",
  textAlign: "left",
  justifyContent: "space-between"
}));

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  borderRadius: "30px",
  color: "white"
}));

export const SecondButton = styled(Button)(() => ({
  background: "none",
  borderRadius: "30px",
  color: PRIMARY_GREEN,
  border: `1px solid ${PRIMARY_GREEN}`
}));

export const LoginBox = styled(Box)(() => ({
  background: "white",
  height: "325px",
  width: "500px",
  padding: "40px",
  boxSizing: "border-box"
}));

export const JobDetailBox = styled(Box)(() => ({
  padding: "20px"
}));

export const LoginContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export const LoginInput = styled(Input)(() => ({
  border: `1px solid ${PRIMARY_GREEN}`,
  borderRadius: "5px",
  margin: "8px 0",
  padding: "2px 5px",
  width: "100%"
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

export const BodySearchBar = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#f1f1f1"
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto"
  }
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export const SearchIconWrapperRight = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  right: 0,
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: PRIMARY_GREEN
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export const SearchStyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0.2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));
