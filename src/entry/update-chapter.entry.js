import React from 'react';
import ReactDOM from 'react-dom';
import DivTitle from 'react-ui/lib/base/PageTitle.js';
import UpdateChapter from '../jsx/UpdateChapter.jsx';
import RequestUrl from '../js/RequestUrl.js';
import $ from 'jquery';
ReactDOM.render(
  <DivTitle title="章节修改页面"/>, document.getElementById('page-title'));
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
    <UpdateChapter chapter={data}/>, document.getElementById('main-ui'));
});
