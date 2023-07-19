<template lang="">
    <div class="container">
        <div class="sidebar">
            <SideBar/>
        </div>
        <div class="main-content">
<<<<<<< HEAD
            主內容區域
        </div>
        <div class="sidebar">
            右側欄內容
=======
            <ArticleItem/>
        </div>
        <div class="sidebar">
            <AuthorRank/>
            <HotArticle />
>>>>>>> dev
        </div>
    </div>
</template>
<script>
<<<<<<< HEAD
import SideBar from './components/sideBar.vue';
export default {

    components: {
        SideBar
=======
import SideBar from '../../components/SideBar.vue';
import AuthorRank from './components/AuthorRank.vue';
import HotArticle from './components/HotArticle.vue'
import ArticleItem from './components/ArticleItem.vue'

export default {

    components: {
        SideBar,
        AuthorRank,
        HotArticle,
        ArticleItem
>>>>>>> dev
    }

}
</script>
<style lang="css" scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    /* 定義三欄佈局的比例，1fr等於分配剩餘空間 */
    grid-gap: 20px;
    /* 欄與欄之間的寬度 */
<<<<<<< HEAD
    width: 100;
    width: 100%;
    height: 100vh;
}

.sidebar {
    background-color: #EAEAEA;
=======
    width: 100%;
    height: 100%;
}

.sidebar {
    /* background-color: #EAEAEA; */
>>>>>>> dev
    width: 100%;
}

.main-content {
<<<<<<< HEAD
    background-color: #EAEAEA;
=======
    /* background-color: #EAEAEA; */
>>>>>>> dev
    width: 100%;
}
</style>