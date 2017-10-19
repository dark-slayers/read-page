import React from 'react';
import PageUtil from 'react-ui/lib/base/PageUtil.js';
class TitleSpan extends React.Component {
  handleClick = () => {
    console.log(this.props.title.index + " : " + this.props.title.title);
    localStorage.chapterIndex = this.props.title.index;
    PageUtil.redirect("chapter.html");
  }
  render() {
    const spanStyle = {
      marginLeft: 10,
      marginRight: 10,
      width: this.props.width,
      textAlign: "center"
    };
    return (
      <span style={spanStyle} onClick={this.handleClick}>
        <a href="javascript:;">{this.props.title.title}</a>
      </span>
    );
  }
}
class TitleLine extends React.Component {
  render() {
    const step = this.props.step;
    const widthPercent = Math.round(10000 / step) / 100.0 + '%';
    const divStyle = {
      display: 'flex'
    };
    return (
      <div style={divStyle}>
        {this.props.titleList.map(function(title) {
          return (<TitleSpan title={title} width={widthPercent}/>);
        })
}</div>
    );
  }
}

class TitlePage extends React.Component {
  handleDownload = () => {
    let bookId = localStorage.bookId;
    let url=`/book/txt/${bookId}`;
    window.open(url);
  }
  render() {
    let array = [];
    for (var i = 0; i < this.props.list.length; i++) {
      array[i] = {
        index: i,
        title: this.props.list[i]
      }
    }
    let step = 3;
    if (this.props.step) {
      step = this.props.step;
    }
    let list = [];
    for (let i = 0, len = array.length; i < len; i += step) {
      list.push(array.slice(i, i + step));
    }
    return (
      <div>
        <div onClick={this.handleDownload}>
          <a href="javascript:;">下载txt</a>
        </div>
        <div>
          {list.map(function(titleList) {
            return (<TitleLine titleList={titleList} step={step}/>);
          })}
        </div>
      </div>

    );
  }
}

export default TitlePage;
