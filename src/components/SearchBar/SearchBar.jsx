import React, { Component } from 'react';
import {
  MainHeader,
  Input,
  SearchForm,
  SearchBtn,
  SearchLabel,
} from './SearchBar.styled';

class SearchBar extends Component {
  state = {
    search: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.search.trim() === '') {
      alert('Search cannot be empty.');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <MainHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            Search
            <SearchLabel>Search</SearchLabel>
          </SearchBtn>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </SearchForm>
      </MainHeader>
    );
  }
}

export default SearchBar;
