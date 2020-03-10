<template>
    <div class="home">

        <div class="content">
            <div class="content-title">最新博文</div>
            <el-card class="articles-card" shadow="hover" style="background-color:rgba(255,255,255,0.7);">
                <div class="article-title">i am a title</div>
                <div class="article-info">
                    <img class="article-image" src="../images/background.png">
                    <div class="article-detail">
                        <div class="article-desc">some descriptions about the article</div>
                        <div class="article-tags">some tags about the article</div>
                    </div>
                </div>
            </el-card>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>
<style>
    html{
        background: url('../images/background.png') no-repeat center center;
        background-size: cover;
        height: 100%;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
    }
    .content{
        width: 50rem;
        margin-left: 25rem;
        margin-right: 25rem;
    }
    .articles-card{
        height: 13rem;
    }
    .article-image{
        height: 7rem;
        width: 10rem;
    }
    .article-title{
        margin: 0 0.5rem 1rem 0.5rem;
        font-size: 1.5rem;
    }
    .article-detail{
        padding: 1rem;
    }
    .article-info{
        display: flex;
    }
    .article-desc{
        margin: 0.5rem 2rem 0.5rem 2rem;
    }
    .article-tags{
        margin: 1.5rem 2rem 0.5rem 2rem;
    }
    .content-title{
        margin-bottom: 0.5rem;
    }
</style>