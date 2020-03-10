<template>
    <div class="head">
        <el-row class="head-el">
            <el-col :span="6">首页</el-col>
            <el-col :span="6">日记</el-col>
            <el-col :span="6">周报</el-col>
            <el-col :span="6">关于我</el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name : 'MyHead',
    }
</script>

<style>
    .head{
        height: 3rem;
        background: darkgray;
        padding: 0.3rem;
        text-align: center;
        margin: -1rem -1rem 1rem -1rem;
    }
    .head-el{
        width: 30%;
        font-size: 1.5rem;
        margin: 0.75rem 22rem 0.75rem 22rem;


    }
</style>