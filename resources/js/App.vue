<template>
    <div>
        <the-left-nav-bar></the-left-nav-bar>
        <div class="md:pl-64 flex flex-col">
            <TheHeader />
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheLeftNavBar from "./components/layout/TheLeftNavBar.vue";
export default {
    components: {
        TheLeftNavBar,
        TheHeader,
        
    }
};
</script>
