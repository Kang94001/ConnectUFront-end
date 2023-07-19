<template lang="">
    <div class="wrap">
        <Header v-if="$route.meta.showHeader" />
<<<<<<< HEAD
        <router-view :class="{ 'router-view': $route.meta.showHeader }"></router-view>
=======
        <div class="content">
            <router-view :class="{ 'router-view': $route.meta.showHeader }"></router-view>
        </div>
>>>>>>> dev
        <Footer />
    </div>
</template>
<script>
<<<<<<< HEAD
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';

export default {
    name: 'IndexView',
    components: {
        Header,
        Footer
    }
}
</script>
<style lang="css" scoped>
.wrap {
    background-color: var(--background-main);
}

.router-view {
    padding-top: 84px;
}
=======
    import Header from '../../components/Header.vue';
    import Footer from '../../components/Footer.vue';

    export default {
        name: 'IndexView',
        components: {
            Header,
            Footer
        }
    }
</script>
<style lang="css" scoped>
    .wrap {
        background-color: var(--background-main);
    }

    .content {
        width: 95%;
        margin: 0 auto;
    }

    .router-view {
        padding-top: 84px;
    }
>>>>>>> dev
</style>