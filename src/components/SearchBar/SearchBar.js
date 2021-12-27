import React, {useRef} from "react";
import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = () => {
  const ref = useRef();
  return (
    <div className="searchbar">
      {console.log(ref?.current?.value)}
      <InputBase
        ref={ref}
        sx={{ml: 2, flex: 1, fontSize: "16px", width: 400}}
        placeholder="Search"
        inputProps={{"aria-label": "Search meal"}}
      />
      <IconButton type="submit" aria-label="search" sx={{mr: 1}}>
        <SearchIcon sx={{color: "#b6c1de"}} />
      </IconButton>
    </div>
  );
};

export default SearchBar;
