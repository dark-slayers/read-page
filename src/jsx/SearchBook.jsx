import React from 'react';
import EmptyForm from './base/EmptyForm.jsx';
import TextInput from './base/TextInput.jsx';
import RequestUrl from '../js/RequestUrl.js';
import PageUtil from '../js/base/PageUtil.js';
import $ from 'jquery';
class SearchForm extends EmptyForm {
  state = {
    bookName: ''
  };
  handleClick = () => {
    const bookName = this.state.bookName;
    this.props.call(bookName);
  }
  render() {
    return (
      <div>
        <div>
          <TextInput obj={this} name="bookName" label="书籍名称："/>
        </div>
        <div>
          <button type="button" onClick={this.handleClick}>查询</button>
        </div>
      </div>
    );
  }
}
class SearchBook extends React.Component {
  state = {
    bookName: '',
    bookId: 0
  };
  handleSearch = (bookName) => {
    let url = RequestUrl.bookInfo + '?name=' + bookName;
    let self = this;
    $.get(url, {}, function(data) {
      self.setState({bookName: data.name, bookId: data.id});
    });
  }
  handleClick = () => {
    localStorage.bookId=this.state.bookId;
    localStorage.chapterIndex=0;
    PageUtil.redirect("chapter.html");
  }
  render() {
    return (
      <div>
        <SearchForm call={this.handleSearch}/>
        <div onClick={this.handleClick}><a href="javascript:;">{this.state.bookName}</a></div>
      </div>
    );
  }
}

export default SearchBook;
