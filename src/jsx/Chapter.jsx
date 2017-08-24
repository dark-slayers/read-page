import React from 'react';
import $ from 'jquery';
import PageUtil from 'react-ui/lib/base/PageUtil.js';
import RequestUrl from '../js/RequestUrl.js';

class ChapterButton extends React.Component {
  handleClick = (index) => {
    localStorage.bookId = this.props.bookId;
    localStorage.chapterIndex = index;
    PageUtil.reload();
  }
  handleClickTitle = () => {
    PageUtil.redirect("title.html");
  }
  handleClickButton = () => {
    PageUtil.redirect("update_chapter.html");
  }
  componentDidMount() {
    let self=this;
    window.addEventListener('keyup', function(e) {
      switch (e.keyCode) {
        case 37:
          {
            e.preventDefault();
            self.handleClick(self.props.index - 1);
            break;
          }
        case 39:
          {
            e.preventDefault();
            self.handleClick(self.props.index + 1);
            break;
          }
        default:
          {
            break;
          }
      }
    });
  }
  componentWillUnmount(){
    window.removeEventListener("keyup");
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
          <span style={spanStyle} onClick={this.handleClickTitle}>
            <a href="javascript:;">目录</a>
          </span>
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
  render() {
    var rawHTML = {
      __html: this.props.chapter.content.replace(/\n/g, "<br />")
    };
    return (
      <div>
        <div>{this.props.chapter.title}</div>
        <div dangerouslySetInnerHTML={rawHTML}></div>
        <div><ChapterButton index={this.props.chapter.index} bookId={this.props.chapter.bookId}/></div>
      </div>
    );
  }
}

export default Chapter;
