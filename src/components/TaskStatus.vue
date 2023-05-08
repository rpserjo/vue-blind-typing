<script setup>
    import { useAppStore } from '@/store/appStore';
    import { formatTime } from '@/utils/formatTime';
    import Icon from '@/components/ui/Icon.vue';

    const store = useAppStore();
</script>

<template>
    <div class="task-status">
        <div class="element">
            <Icon icon="taps" :secondary="true" title="Количество нажатий" />
            <span>{{ store.getTaskStatus.taps }}</span>
        </div>
        <div class="element">
            <Icon icon="speed" :secondary="true" title="Скорость" />
            <span>{{ store.getTaskStatus.speed }}</span>
        </div>
        <div class="element">
            <Icon icon="timer" :secondary="true" title="Время" />
            <span>{{ formatTime(store.getTaskStatus.timer) }}</span>
        </div>
        <div class="element">
            <Icon icon="accuracy" :secondary="true" title="Точность" />
            <span>{{ store.getAccuracy }}</span>
        </div>
    </div>
</template>

<style scoped>
.task-status {
    gap: 15px;
    display: flex;
    justify-content: center;
    padding: 10px 5px;

    .element {
        display: flex;
        align-items: center;

        & span {
            margin-left: 5px;
            font-size: 20px;
            font-weight: 600;
            width: 50px;
        }
    }
}
</style>
