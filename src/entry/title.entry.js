import React from 'react';
import ReactDOM from 'react-dom';
import DivTitle from 'react-ui/lib/base/PageTitle.js';
import TitlePage from '../jsx/TitlePage.jsx';
import RequestUrl from '../js/RequestUrl.js';
import $ from 'jquery';
ReactDOM.render(<DivTitle title = "目录"/> , document.getElementById('page-title'));
let bookId = '1';
if (localStorage.bookId) {
  bookId = localStorage.bookId;
}
let url = RequestUrl.titles + bookId;
console.log(JSON.stringify(RequestUrl));
console.log(url);
$.get(url, {}, function(data) {
  ReactDOM.render(<TitlePage list = {data} step={5}/>, document.getElementById('main-ui'));
});
