<template>
    <the-header></the-header>
    <the-left-nav-bar></the-left-nav-bar>
    <router-view></router-view>
</template>

<script>
import TheLeftNavBar from "./components/layout/TheLeftNavBar.vue";
import TheHeader from "./components/layout/TheHeader.vue";
export default {
    components: {
        TheLeftNavBar,
        TheHeader,
    },
};
</script>
