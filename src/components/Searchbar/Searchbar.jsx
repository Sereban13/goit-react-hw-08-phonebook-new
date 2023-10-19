// import { useDispatch } from 'react-redux';
import { SearchBlock, Input, Label } from './Searchbar.Styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <SearchBlock>
      <Label htmlFor="searchFilter">Find your contact</Label>
      <Input
        name="filter"
        id="searchFilter"
        type="text"
        onChange={event => dispatch(setFilter(event.target.value))} // onChange={event => dispatch(filterName(event.target.value))}
      />
    </SearchBlock>
  );
};
