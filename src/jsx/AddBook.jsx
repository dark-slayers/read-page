import React from 'react';
import EmptyForm from 'react-ui/lib/form/EmptyForm.js';
import TextInput from 'react-ui/lib/form/TextInput.js';
import TextArea from 'react-ui/lib/form/TextArea.js';
import RequestUrl from '../js/RequestUrl.js';
import AjaxUtil from '../js/AjaxUtil.js';
class AddBook extends EmptyForm {
  state = {
    name: '',
    path: '',
    type: 'DIR'
  };
  handleClick = () => {
    AjaxUtil.post(RequestUrl.addBook, this.state, function(data) {
      alert("添加成功！");
    });
  }
  render() {
    let pageStyle = {
      display: 'flex',
      justifyContent: 'center',
      color: '#42b983'
    };
    const lineStyle={
      marginBottom:10
    };
    return (
      <div style={pageStyle}>
        <div>
          <div style={lineStyle}><TextInput obj={this} name="name" label="书籍名称："/></div>
          <div style={lineStyle}><TextInput obj={this} name="path" label="书籍路径："/></div>
          <div style={lineStyle}><TextInput obj={this} name="type" label="保存类型："/></div>
          <div style={pageStyle}>
            <button onClick={this.handleClick}>添加</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBook;
