import { HiSearchCircle } from 'react-icons/hi';
import { SearchBoxContainer } from './styles';

export default function SearchBox() {
  return (
    <SearchBoxContainer>

      <label htmlFor="seach">
        <input type="text" placeholder='Procure seu modelo desejado'/>
        <HiSearchCircle className='search-icon'/>
      </label>

    </SearchBoxContainer>);
}
