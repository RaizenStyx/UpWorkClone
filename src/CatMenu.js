import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import { PRIMARY_GREEN } from "./StyledComponents";

export default function CatMenu({ catagories, selectedCat, setSelectedCat }) {
  return (
    <MenuList>
      {catagories.map((catagory) => (
        <MenuItem onClick={() => setSelectedCat(catagory)} dense disableGutters>
          <ListItemText
            sx={catagory === selectedCat ? { color: PRIMARY_GREEN } : {}}
          >
            {catagory}
          </ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
