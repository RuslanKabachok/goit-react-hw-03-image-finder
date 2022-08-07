import React, { Component } from 'react';
import {
  MainHeader,
  Input,
  SearchForm,
  SearchBtn,
  SearchLabel,
} from './SearchBar.styled';

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <MainHeader>
        <SearchForm>
          <SearchBtn>
            Search
            <SearchLabel>Search</SearchLabel>
          </SearchBtn>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </MainHeader>
    );
  }
}

export default SearchBar;
