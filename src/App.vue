<script setup>
    import { useAppStore } from '@/store/appStore';
    import Header from '@/components/Header.vue';
    import TaskStatus from '@/components/TaskStatus.vue';
    import Text from '@/components/Text.vue';
    import DetailedStatistics from '@/components/DetailedStatistics.vue';
    import Spinner from '@/components/Spinner.vue';

    const store = useAppStore();
</script>

<template>
    <header class="container">
        <Header />
        <TaskStatus />
    </header>
    <main class="container">
        <Text
            :text="store.getTaskText"
            :currentIndex="store.getTaskStatus.currentIndex"
            :isMistake="store.getTaskStatus.isMistake"
        />
        <Spinner v-if="store.getSettings.isLoading" />
        <DetailedStatistics v-show="store.getSettings.showDetailedStatistics" />
    </main>
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Inter');
    :root {
        --main-color: teal;
        --second-color: #fff;
        --border-main-color: #ccc;
        --border-second-color: #eee;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        /* font-family: Avenir, Helvetica, Arial, sans-serif; */
        font-family: 'Inter', sans-serif;
        font-size: 14px;
    }

    main{
        position: relative;
    }

    .container {
        width: 1024px;
        margin: 0 auto;
    }
</style>
