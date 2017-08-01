import React from 'react';
import $ from 'jquery';
class ChapterButton extends React.Component {
  handleClick = (index) => {
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
          <span style={spanStyle} onClick={this.handleClick.bind(this, this.props.index - 1)}>
            <a href="javascript:;">上一页</a>
          </span>
          <span style={spanStyle}>目录</span>
          <span style={spanStyle} onClick={this.handleClick.bind(this, this.props.index + 1)}>
            <a href="javascript:;">下一页</a>
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
    let newURL='/book/chapter/'+this.state.chapter.bookId+'/'+index;
    let self=this;
    $.get(newURL, {}, function(data){
      self.setState({chapter:data});
    });
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
