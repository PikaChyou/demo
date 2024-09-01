<template>
    <div>
        <h1>SalesChart</h1>
        <div id="salesChart" :style="{ width: '600px', height: '400px' }"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: 'SalesChart',
    mounted() {
        this.initChart();
    },
    methods: {
        async initChart() {
            // 基于准备好的DOM，初始化ECharts实例  
            const myChart = echarts.init(document.getElementById('salesChart'));

            // 定义新的销售数据集  
            const salesData = await fetch('http://127.0.0.1:5000/daily_sales', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json());

            console.log(salesData)

            // 提取日期和总销售额  
            const dates = salesData.map(item => {
                const date = new Date(item.date);
                const month = date.getMonth() + 1;
                const day = date.getDate();
                return `${month}月${day}日`;
            });
            const totalSales = salesData.map(item => item.total_sales);

            // 指定图表的配置项和数据  
            const option = {
                title: {
                    text: '日期与总销售额变化'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['总销售额']
                },
                xAxis: {
                    type: 'category',
                    data: dates,
                    axisLabel: {
                        formatter: function (value) {
                            return value.split(" ")[0]; // 只显示日期，例如 "Sat"  
                        }
                    }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '总销售额',
                        type: 'line',
                        data: totalSales,
                        smooth: true,
                        lineStyle: {
                            color: '#42A5F5',
                            width: 3
                        },
                        itemStyle: {
                            color: '#FF7043'
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表  
            myChart.setOption(option);
        }
    }
};  
</script>

<style scoped>
#salesChart {
    width: 100%;
    height: 100%;
}
</style>