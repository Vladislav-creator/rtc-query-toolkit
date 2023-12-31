import { useDispatch, useSelector } from 'react-redux';

import { setContactsFilter } from '../../redux/filtersSlice';
import { selectContactsFilter } from '../../redux/selectors';

import { Label, Input, FilterTitle } from './Filter.styled';

 const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    const normalizedValue = value.toLowerCase().trim();
    dispatch(setContactsFilter(normalizedValue));
  };

  return (
    <Label>
      <FilterTitle>Find contacts by name</FilterTitle>
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};
export default Filter