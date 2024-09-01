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
        initChart() {  
            // 基于准备好的DOM，初始化ECharts实例  
            const myChart = echarts.init(document.getElementById('salesChart'));  

            // 定义新的销售数据集  
            const salesData = [  
                { "date": "Sat, 31 Aug 2024 00:00:00 GMT", "total_sales": 707.0 },  
                { "date": "Tue, 20 Aug 2024 00:00:00 GMT", "total_sales": 271.0 },  
                { "date": "Sun, 18 Aug 2024 00:00:00 GMT", "total_sales": 144.0 },  
                { "date": "Thu, 15 Aug 2024 00:00:00 GMT", "total_sales": 125.0 },  
                { "date": "Fri, 02 Aug 2024 00:00:00 GMT", "total_sales": 125.0 },  
                { "date": "Mon, 19 Aug 2024 00:00:00 GMT", "total_sales": 72.0 },  
                { "date": "Wed, 14 Aug 2024 00:00:00 GMT", "total_sales": 64.0 },  
                { "date": "Thu, 29 Aug 2024 00:00:00 GMT", "total_sales": 60.0 },  
                { "date": "Mon, 26 Aug 2024 00:00:00 GMT", "total_sales": 40.0 }  
            ];  

            // 提取日期和总销售额  
            const dates = salesData.map(item => item.date);  
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