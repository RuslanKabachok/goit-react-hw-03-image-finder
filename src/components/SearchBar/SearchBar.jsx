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
    console.log(this.state.search);
    this.props.onSubmit(this.state);
    this.setState({ search: '' });
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
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

//https://pixabay.com/api/?q=cat&page=1&key=25284059-64aa950e28f1ef43b7bf646a1&image_type=photo&orientation=horizontal&per_page=12
