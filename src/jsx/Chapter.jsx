import React from 'react';
import $ from 'jquery';
class ChapterButton extends React.Component {
  handleClick=(index)=>{
    this.props.call(index);
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
          <span style={spanStyle} onClick={this.handleClick.bind(this, this.props.index-1)}>上一页</span>
          <span style={spanStyle}>目录</span>
          <span style={spanStyle} onClick={this.handleClick.bind(this, this.props.index+1)}>下一页</span>
        </span>
      </div>
    );
  }
}
class Chapter extends React.Component {
  handleCall=(index)=>{
    alert('Chapter id : '+index);
  }
  render() {
    return (
      <div>
        <div>标题</div>
        <div>正文</div>
        <div><ChapterButton index={this.props.chapter.index} call={this.handleCall}/></div>
      </div>
    );
  }
}

export default Chapter;
