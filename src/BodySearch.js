import SearchIcon from "@mui/icons-material/Search";
import {
  BodySearchBar,
  SearchStyledInputBase,
  SearchIconWrapperRight
} from "./StyledComponents";

export default function BodySearch() {
  return (
    <BodySearchBar sx={{ marginBottom: "30px" }}>
      <SearchIconWrapperRight>
        <SearchIcon sx={{ color: "white" }} />
      </SearchIconWrapperRight>
      <SearchStyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </BodySearchBar>
  );
}
