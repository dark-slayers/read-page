import React from 'react';
import ReactDOM from 'react-dom';
import DivTitle from '../jsx/DivPageTitle.jsx';
import TitlePage from '../jsx/TitlePage.jsx';
import $ from 'jquery';
ReactDOM.render(<DivTitle title = "目录"/> , document.getElementById('page-title'));
const list = ['ASDFAS', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH', '245SDRGS', 'FBXCBV', 'FDFHG', 'ERTY56', 'NBCVGH', 'MJHK', 'CXFBSFGH', 'CVBFH'];
ReactDOM.render(<TitlePage list = {list}/>, document.getElementById('main-ui'));
