import React from 'react';
import $ from 'jquery';
import EmptyForm from 'react-ui/lib/form/EmptyForm.js';
import TextInput from 'react-ui/lib/form/TextInput.js';
import TextArea from 'react-ui/lib/form/TextArea.js';
import PageUtil from 'react-ui/lib/base/PageUtil.js';
import RequestUrl from '../js/RequestUrl.js';

class UpdateChapter extends EmptyForm {
  state = {
    bookId: this.props.chapter.bookId,
    index: this.props.chapter.index,
    title: this.props.chapter.title,
    content: this.props.chapter.content,
  };
  handleClick = () => {
    console.log("UPDATE Chapter !");
    let url=RequestUrl.chapter;
    $.ajax({
      url: url,
      type: 'PUT',
      contentType:'application/json',
      async: true,
      data: JSON.stringify(this.state),
      timeout: 5000,
      // beforeSend: function(xhr) {
      //   console.log(xhr)
      //   console.log('发送前')
      // },
      success: function(data){
        PageUtil.redirect("chapter.html");
      },
      error: function(data){
        console.log(JSON.stringify(data));
      },
      // complete: function() {
      //   console.log('结束')
      // }
    });

  }
  render() {
    return (
      <div>
        <div>
          <TextArea rows={20} cols={80} obj={this} name="content" label=""/>
        </div>
        <div>
          <button onClick={this.handleClick}>保存</button>
        </div>
      </div>
    );
  }
}

export default UpdateChapter;
