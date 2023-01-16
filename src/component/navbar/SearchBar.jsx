import React from "react";

import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import { useDispatch } from "react-redux";
import { getProductBySearch } from "../../actions/productSlice"; 

const useStyles = makeStyles(theme => ({
  searchBar: {
    margin: theme.spacing(2),
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: theme.spacing(2),
    transform: 'translateY(-50%)'
  }
}));

function SearchBar() {
  const classes = useStyles();
  const dispatch  = useDispatch();
  const [searchValue, setSearchValue] = React.useState('');
  const debouncedSearch = _.debounce((value) => {
    setSearchValue(value);
    dispatch(getProductBySearch(value))
 console.log(searchValue)
  }, 1000);

  const handleSearch = event => {
    const value = event.target.value;
    debouncedSearch(value);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        className={classes.searchBar}
        onChange={handleSearch}
      />
      {/* <SearchIcon className={classes.searchIcon} /> */}
    </div>
  );
}


export default SearchBar;