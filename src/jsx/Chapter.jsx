import React from 'react';
import $ from 'jquery';
import PageUtil from 'react-ui/lib/base/PageUtil.js';
import RequestUrl from '../js/RequestUrl.js';

class ChapterButton extends React.Component {
  handleClick = (index) => {
    this.props.call(index);
  }
  handleClickButton = () => {
    PageUtil.redirect("update_chapter.html");
  }
  render() {
    let divStyle = {
      display: 'flex',
      justifyContent: 'center'
    };
    let itemStyle = {
      display: 'flex'
    };
    let spanStyle = {
      marginLeft: 10,
      marginRight: 10
    };
    return (
      <div style={divStyle}>
        <span style={itemStyle}>
          <span style={spanStyle} onClick={this.handleClick.bind(this, this.props.index - 1)}>
            <a href="javascript:;">上一页</a>
          </span>
          <span style={spanStyle}><a href="javascript:;">目录</a></span>
          <span style={spanStyle} onClick={this.handleClick.bind(this, this.props.index + 1)}>
            <a href="javascript:;">下一页</a>
          </span>
          <span style={spanStyle} onClick={this.handleClickButton}>
            <button>修改章节内容</button>
          </span>
        </span>
      </div>
    );
  }
}
class Chapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  handleCall = (index) => {
    localStorage.bookId=this.state.chapter.bookId;
    localStorage.chapterIndex=index;
    PageUtil.reload();
  }
  render() {
    var rawHTML={
           __html:this.state.chapter.content.replace(/\n/g, "<br />")
       };
    return (
      <div>
        <div>{this.state.chapter.title}</div>
        <div dangerouslySetInnerHTML={rawHTML}></div>
        <div><ChapterButton index={this.state.chapter.index} call={this.handleCall}/></div>
      </div>
    );
  }
}

export default Chapter;
