import React from 'react';
import ReactDOM from 'react-dom';
import PageTitle from 'react-ui/lib/base/PageTitle.js';
import AddBook from '../jsx/AddBook.jsx';
ReactDOM.render(
  <PageTitle title="添加书籍页面"/>, document.getElementById('page-title'));
ReactDOM.render(
  <AddBook/>, document.getElementById('main-ui'));
