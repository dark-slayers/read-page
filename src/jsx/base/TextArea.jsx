import React, {PropTypes} from 'react'
/**基本的多行文本输入区域，输入框需要提供：label、name、obj三个属性
*label为输入框标签，name对应obj对象state参数相应KEY,
*obj为调用此输入框的组件，obj需要有handleChange方法或者继承handleChange方法
* rows行数、cols列数两个属性为可选数值，如果没有提供这两个属性，行数为5，列数为100
*/

class TextArea extends React.Component {
    render() {
        let obj = this.props.obj;
        const name = this.props.name;
        const label = this.props.label;
        const r = this.props.rows == null
            ? "5"
            : this.props.rows;
        const c = this.props.cols == null
            ? "100"
            : this.props.cols;
        return (
            <label>{label}<br/>
                <textarea rows={r} cols={c} name={name} value={obj.state[name]} onChange={obj.handleTextChange}></textarea>
            </label>
        );
    }
}

export default TextArea;
