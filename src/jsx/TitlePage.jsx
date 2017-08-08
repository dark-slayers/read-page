import React from 'react';

class TitleLine extends React.Component {
  render() {
    const step=this.props.step;
    const widthPercent = Math.round(10000 / step ) / 100.0+'%';
    console.log(widthPercent);
    const spanStyle =
    {
      marginLeft: 10,
      marginRight: 10,
      width:widthPercent,
      textAlign: "center",
    };
    const divStyle={display: 'flex'};
    return (
      <div style={divStyle}>
        {
          this.props.titleList.map(function(title)
          {
            return (<span style={spanStyle}>{title}</span>);
          })
        }</div>
    );
  }
}

class TitlePage extends React.Component {
  render() {
    const step=3;
    let list = [];
    for (let i = 0, len = this.props.list.length; i < len; i += step) {
      list.push(this.props.list.slice(i, i + step));
    }
    return (
      <div>
      {
        list.map(function(titleList)
        {
          return (<TitleLine titleList={titleList} step={step}/>);
        })
      }
      </div>
    );
  }
}

export default TitlePage;
