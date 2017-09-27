import React from 'react';
import echarts from 'echarts';
class Echarts extends React.Component {
  render() {
    let info = [1, 10];
    return (
      <div className="mt15 xui-financialAnalyse-page">
        <div className="xui-general">
          <Chart data={info} data-info={info}/>
        </div>
      </div>
    );
  }
}
class Chart extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  componentWillMount() {
    var info = this.props.data;
    //HTML5规定自定义属性要以data-开头，这样的可以如下取
    console.log(this.props['data-info'])

  }
  componentDidMount() {
    this.showChart(this.state.data)
  }
  onChangeData() {
    var data = Store.getData();
    this.setState({data: data['info']['data'] //后台返回的数据
    });
  }
  showChart(dataSet) {
    var myChart = echarts.init(this.refs.mainEch);
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: [
          "衬衫",
          "羊毛衫",
          "雪纺衫",
          "裤子",
          "高跟鞋",
          "袜子"
        ]
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [
            5,
            20,
            36,
            10,
            10,
            20
          ]
        }
      ]
    });
  }
  render() {
    return (
      <div ref="mainEch" style={{
        width: 600,
        height: 600
      }}></div>
    )
  }
}
export default Echarts;
