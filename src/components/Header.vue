<script setup>
    import { useAppStore } from '@/store/appStore';
    import { keyDownHandler } from '@/utils/keyDownHandler';
    import TaskController from '@/controllers/TaskController';
    import Button from '@/components/ui/Button.vue';
    import Settings from '@/components/Settings.vue';
    import Icon from '@/components/ui/Icon.vue';

    const store = useAppStore();

    const taskController = new TaskController();

    const handleStart = async (e) => {
        await taskController.loadNewTask();
        handleRestart(e);
    };

    const handleRestart = (e) => {
        store.finishTask(keyDownHandler);
        store.resetTask();
        store.updateSettings('showSettings', false);
        store.updateSettings('showDetailedStatistics', false);
        e.target.blur();
        document.addEventListener('keydown', keyDownHandler);
    };
</script>

<template>
    <div class="header-wrapper">
        <div class="header">
            <div class="logo">
                <img src="/logo.png" />
            </div>
            <h1>Тренажер слепой печати</h1>
            <div class="btn-line">
                <Button @click="handleStart">Начать новое задание</Button>
                <Button @click="handleRestart" :outlined="true">Перезапуск задания</Button>
                <Button
                    @click="store.updateSettings('showSettings', !store.getSettings.showSettings)"
                >
                    <Icon icon="settings" />
                </Button>
            </div>
        </div>
        <Settings />
    </div>
</template>

<style scoped>
    .header-wrapper {
        border-radius: 3px;
        box-shadow: 2px 3px 14px #888888;
    }
    .header {
        height: 64px;
        display: flex;
        align-items: center;
        padding: 15px;
        gap: 15px;

        .logo {
            & img {
                height: 48px;
            }
        }

        & h1 {
            font-size: 36px;
            font-weight: 500;
            line-height: 36px;
            flex-grow: 1;
        }

        .btn-line {
            display: flex;
            justify-items: start;
            align-items: center;
            gap: 10px;
            margin: 5px;
        }
    }
</style>
