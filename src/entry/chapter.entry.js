import React from 'react';
import ReactDOM from 'react-dom';
import DivTitle from '../jsx/DivPageTitle.jsx';
import Chapter from '../jsx/Chapter.jsx';
import RequestUrl from '../js/RequestUrl.js';
import $ from 'jquery';
ReactDOM.render(
  <DivTitle title="章节页面"/>, document.getElementById('page-title'));
let bookId = '1';
let chapterIndex = '1';
if (localStorage.bookId) {
  bookId = localStorage.bookId;
}
if (localStorage.chapterIndex) {
  chapterIndex = localStorage.chapterIndex;
}
let url = RequestUrl.chapter + bookId + '/' + chapterIndex;
$.get(url, {}, function(data) {
  ReactDOM.render(
    <Chapter chapter={data}/>, document.getElementById('main-ui'));
});
