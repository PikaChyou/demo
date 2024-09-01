<template>  
    <div>  
        <h1>商品销售数量</h1>  
        <div class="chart-container">  
            <div id="barChart" :style="{ width: '100%', height: '400px' }"></div>  
            <div id="pieChart" :style="{ width: '100%', height: '400px' }"></div>  
        </div>  
    </div>  
</template>  

<script>  
import * as echarts from 'echarts';  

export default {  
    name: 'RankingNum',  
    mounted() {  
        this.initCharts();  
    },  
    methods: {  
        initCharts() {  
            // 初始化图表实例  
            const barChart = echarts.init(document.getElementById('barChart'));  
            const pieChart = echarts.init(document.getElementById('pieChart'));  

            // 定义新的数据集  
            const ranking_num = [  
                { "goods": "罐装水果", "num": 25 },  
                { "goods": "超高温杀菌的牛奶", "num": 24 },  
                { "goods": "厨房清洁剂", "num": 22 },  
                { "goods": "酸奶油", "num": 16 },  
                { "goods": "根茎类蔬菜", "num": 16 },  
                { "goods": "糕点", "num": 16 },  
                { "goods": "烹饪巧克力", "num": 10 },  
                { "goods": "坚果小吃", "num": 5 },  
                { "goods": "汉堡肉", "num": 4 }  
            ];  

            // 提取商品名称和数量  
            const goods = ranking_num.map(item => item.goods);  
            const nums = ranking_num.map(item => item.num);  

            // 指定柱状图的配置项和数据  
            const barOption = {  
                title: {  
                    text: '商品销售数量柱状图'  
                },  
                tooltip: {  
                    trigger: 'axis'  
                },  
                legend: {  
                    data: ['数量']  
                },  
                xAxis: {  
                    type: 'category',  
                    data: goods  
                },  
                yAxis: {  
                    type: 'value'  
                },  
                series: [  
                    {  
                        name: '数量',  
                        type: 'bar',  
                        data: nums,  
                        itemStyle: {  
                            color: '#42A5F5'  
                        }  
                    }  
                ]  
            };  

            // 指定饼状图的配置项和数据  
            const pieOption = {  
                title: {  
                    text: '商品销售数量饼状图',  
                    left: 'center'  
                },  
                tooltip: {  
                    trigger: 'item'  
                },  
                legend: {  
                    orient: 'vertical',  
                    left: 'left'  
                },  
                series: [  
                    {  
                        name: '数量',  
                        type: 'pie',  
                        radius: '50%',  
                        data: ranking_num.map(({ goods, num }) => ({ name: goods, value: num })),  
                        emphasis: {  
                            itemStyle: {  
                                shadowBlur: 10,  
                                shadowOffsetX: 0,  
                                shadowColor: 'rgba(0, 0, 0, 0.5)'  
                            }  
                        }  
                    }  
                ]  
            };  

            // 使用指定的配置项和数据显示柱状图  
            barChart.setOption(barOption);  
            // 使用指定的配置项和数据显示饼状图  
            pieChart.setOption(pieOption);  
        }  
    }  
};  
</script>  

<style scoped>  
.chart-container {  
    display: flex;  
    justify-content: space-around; /* 可根据需求调整间距 */  
    flex-direction: row; /* 横向排列 */  
}  
#barChart, #pieChart {  
    flex: 1; /* 每个图表占据相等的宽度 */  
    margin: 10px; /* 添加间距 */  
}  
</style>