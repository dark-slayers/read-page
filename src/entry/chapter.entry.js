import React from 'react';
import ReactDOM from 'react-dom';
import DivTitle from '../jsx/DivPageTitle.jsx';
import Chapter from '../jsx/Chapter.jsx';
import $ from 'jquery';
ReactDOM.render(
  <DivTitle title="章节页面"/>, document.getElementById('page-title'));
$.get('/book/chapter/1/10', {}, function(data){
  ReactDOM.render(
    <Chapter chapter={data}/>, document.getElementById('main-ui'));
});
