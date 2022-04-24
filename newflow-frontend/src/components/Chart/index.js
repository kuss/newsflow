import React, { useEffect, useState } from 'react';
import ECharts, { EChartsReactProps } from 'echarts-for-react';
const Chart = () => {
	const [options, setOptions] = useState({
		title: {
			text: 'GDP',
			subtext: 'Korea',
			x: 'center'
		},	
		xAxis: {
	    type: 'category',
	    data: ['2017', '2018', '2019', '2020', '2021']
	  },
	  yAxis: {
			type: 'value',
			min: 1700000,
      max: 2200000,
	  },
	  series: [
	    {
	      data: [1835698.2, 1898192.6, 1924498.1, 1933152.4, 2057447.8],
	      type: 'line'
	    }
	  ]
	});	

	return (
    <ECharts
			option={options}
      opts={{ renderer: 'svg', width: '800px', height: '600px' }}
    />
  );
}

export default Chart;