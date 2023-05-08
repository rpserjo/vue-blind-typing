import { useAppStore } from '@/store/appStore';

function keyDownHandler(event) {
    const store = useAppStore();
    if (event.key.length === 1) {
        if (store.getTaskStatus.currentIndex === 0) {
            store.startTask();
        }
        store.updateTaskStatus('taps', store.getTaskStatus.taps + 1);
        if (event.key === store.getTaskText.charAt(store.getTaskStatus.currentIndex)) {
            store.updateTaskStatus('isMistake', false);
            store.updateTaskStatus('currentIndex', store.getTaskStatus.currentIndex + 1);
        } else {
            store.playError();
            store.updateTaskStatus('mistakes', store.getTaskStatus.mistakes + 1);
            store.updateTaskStatus('isMistake', true);
        }

        if (store.getTaskStatus.currentIndex === store.getTaskText.length) {
            store.finishTask(keyDownHandler);
            store.updateSettings('showDetailedStatistics', true);
        }
    }
}

export { keyDownHandler };
