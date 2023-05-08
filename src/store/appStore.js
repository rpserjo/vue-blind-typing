import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAppStore = defineStore('app', () => {
    const settings = ref({
        lang: 'en',
        length: 5,
        showDetailedStatistics: false,
        showSettings: false,
        isLoading: false
    });

    const taskText = ref('');

    const taskStatus = ref({
        currentIndex: 0,
        taps: 0,
        mistakes: 0,
        isMistake: false,
        timer: 0,
        speed: 0
    });

    const error = new Audio('/sounds/error.m4a');

    let timerId = 0;

    const getSettings = computed(() => settings.value);

    const getTaskText = computed(() => taskText.value);

    const getTaskStatus = computed(() => taskStatus.value);

    const getAccuracy = computed(() => {
        return taskStatus.value.taps > 0
            ? ((taskStatus.value.currentIndex / taskStatus.value.taps) * 100).toFixed()
            : 0;
    });

    function updateSettings(name, value) {
        settings.value[name] = value;
    }

    function setTaskText(newText) {
        taskText.value = newText;
    }

    function startTask() {
        if (timerId > 0) {
            return;
        }

        timerId = setInterval(() => {
            taskStatus.value.timer = taskStatus.value.timer + 1;
            taskStatus.value.speed = Number(
                ((taskStatus.value.currentIndex / taskStatus.value.timer) * 60).toFixed()
            );
        }, 1000);
    }

    function finishTask(keyDownHandler) {
        clearInterval(timerId);
        timerId = 0;
        document.removeEventListener('keydown', keyDownHandler);
    }

    function resetTask() {
        taskStatus.value = {
            currentIndex: 0,
            taps: 0,
            mistakes: 0,
            isMistake: false,
            timer: 0,
            speed: 0
        };
    }

    function updateTaskStatus(name, value) {
        taskStatus.value[name] = value;
    }

    function playError() {
        error.play();
    }

    return {
        settings,
        taskStatus,
        getSettings,
        updateSettings,
        getTaskText,
        setTaskText,
        getTaskStatus,
        updateTaskStatus,
        getAccuracy,
        startTask,
        finishTask,
        resetTask,
        playError
    };
});
