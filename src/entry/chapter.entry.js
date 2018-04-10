import React from 'react';
import ReactDOM from 'react-dom';
import DivTitle from 'react-ui/lib/base/PageTitle.js';
import Chapter from '../jsx/Chapter.jsx';
import RequestUrl from '../js/RequestUrl.js';
import AjaxUtil from '../js/AjaxUtil.js';
ReactDOM.render(
  <DivTitle title="章节页面"/>, document.getElementById('page-title'));
let bookId = 1;
let chapterIndex = 1;
if (!isNaN(localStorage.bookId)){
  bookId = localStorage.bookId;
}else{
  localStorage.bookId=bookId;
}
if (!isNaN(localStorage.chapterIndex)) {
  chapterIndex = localStorage.chapterIndex;
}else{
  localStorage.chapterIndex=chapterIndex;
}
let url = RequestUrl.chapter(bookId,chapterIndex);
AjaxUtil.get(url,(data)=>{
  ReactDOM.render(
    <Chapter chapter={data}/>, document.getElementById('main-ui'));
});
