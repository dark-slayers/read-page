import React from 'react'

class DivPageTitle extends React.Component {
  render () {
    let divStyle={	textAlign: "center",
      fontSize: 20,
      color: "#00F",
      marginTop: 20,
      marginBottom: 20};
      return (
        <div style={divStyle}>{this.props.title}</div>
      );
    }
  }

  export default DivPageTitle;
