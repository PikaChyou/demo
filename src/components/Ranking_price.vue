<!-- By Ante
    test App.vue
    <template>
        <Ranking_price/>
        <Ranking_num/>
        <SalesChart/>
    </template>

    <script setup>
        import Ranking_price from './components/Ranking_price.vue'
        import Ranking_num from './components/Ranking_num.vue'
        import SalesChart from './components/SalesChart.vue'
    </script>
    <style scoped>
    #main {
    width: 100%;
    height: 100%;
    }
    </style>
-->


<template>  
    <div>  
        <h1>商品价格折线图与柱状图</h1>  
        <div id="Ranking_price" :style="{ width: '600px', height: '400px' }"></div>  
    </div>  
</template>  

<script>  
import * as echarts from 'echarts';  

export default {  
    name: 'Ranking_price',  
    mounted() {  
        this.initChart();  
    },  
    methods: {  
        initChart() {  
            // 基于准备好的DOM，初始化ECharts实例  
            const myChart = echarts.init(document.getElementById('Ranking_price'));  

            // 定义数据  
            const ranking_price = [  
                { "goods": "厨房清洁剂", "price": 330.0 },  
                { "goods": "烹饪巧克力", "price": 250.0 },  
                { "goods": "糕点", "price": 240.0 },  
                { "goods": "罐装水果", "price": 200.0 },  
                { "goods": "超高温杀菌的牛奶", "price": 192.0 },  
                { "goods": "酸奶油", "price": 128.0 },  
                { "goods": "根茎类蔬菜", "price": 128.0 },  
                { "goods": "汉堡肉", "price": 80.0 },  
                { "goods": "坚果小吃", "price": 60.0 }  
            ];  

            // 提取商品名称和价格  
            const goods = ranking_price.map(item => item.goods);  
            const prices = ranking_price.map(item => item.price);  

            // 指定图表的配置项和数据  
            const option = {  
                title: {  
                    text: '商品价格折线图与柱状图',
                },  
                tooltip: {  
                    trigger: 'axis'  
                },  
                legend: {  
                    data: ['价格（折线图）', '价格（柱状图）']  
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
                        name: '价格（折线图）',  
                        type: 'line',  // 折线图  
                        data: prices,  
                        smooth: true,  
                        lineStyle: {  
                            color: '#42A5F5',  
                            width: 3  
                        },  
                        itemStyle: {  
                            color: '#FF7043'  
                        }  
                    },  
                    {  
                        name: '价格（柱状图）',  
                        type: 'bar',  // 柱状图  
                        data: prices,  
                        itemStyle: {  
                            color: '#FFCA28'  // 柱状图颜色  
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
#Ranking_price {  
    width: 100%;  
    height: 100%;  
}  
</style>