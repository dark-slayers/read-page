import React from 'react';
import ReactDOM from 'react-dom';
import DivTitle from '../jsx/DivPageTitle.jsx';
import SearchBook from '../jsx/SearchBook.jsx';
import $ from 'jquery';
ReactDOM.render(
  <DivTitle title="书籍搜索"/>, document.getElementById('page-title'));
ReactDOM.render(
  <SearchBook/>, document.getElementById('main-ui'));
