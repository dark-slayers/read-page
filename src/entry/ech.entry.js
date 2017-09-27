import React from 'react';
import ReactDOM from 'react-dom';
import DivTitle from 'react-ui/lib/base/PageTitle.js';
import Echarts from '../jsx/Echarts.jsx';
ReactDOM.render(<DivTitle title = "Echarts 测试"/> , document.getElementById('page-title'));
ReactDOM.render(<Echarts/>, document.getElementById('main-ui'));
