<template>
    <!-- Background color split screen for large screens -->
    <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
    <div class="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"/>
    <div class="relative min-h-full flex flex-col">
        <the-header></the-header>
        <!-- 3 column wrapper -->
        <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
            <div class="flex-1 min-w-0 bg-white xl:flex">
                <!-- Left sidebar & main wrapper -->
                <the-left-nav-bar></the-left-nav-bar>
                <!-- Content List -->
                <div class=" p-3 my-2  ">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <!-- The Footer -->
        <the-footer></the-footer>
    </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheLeftNavBar from "./components/layout/TheLeftNavBar.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
    components: {
        TheLeftNavBar,
        TheHeader,
        TheFooter
    },
    data() {
        return {
            projects: [
                {
                    name: "Workcation",
                    href: "#",
                    siteHref: "#",
                    repoHref: "#",
                    repo: "debbielewis/workcation",
                    tech: "Laravel",
                    lastDeploy: "3h ago",
                    location: "United states",
                    starred: true,
                    active: true,
                },
                {
                    name: "Workcation",
                    href: "#",
                    siteHref: "#",
                    repoHref: "#",
                    repo: "debbielewis/workcation",
                    tech: "Laravel",
                    lastDeploy: "3h ago",
                    location: "United states",
                    starred: true,
                    active: true,
                },
                // More projects...
            ],
            activityItems: [
                {
                    project: "Workcation",
                    commit: "2d89f0c8",
                    environment: "production",
                    time: "1h",
                },
            ],
        };
    },
};
</script>
