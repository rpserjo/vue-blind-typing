import { useAppStore } from '@/store/appStore';

const apiEndpoints = {
    ru: (length) => {
        return `https://fish-text.ru/get?type=sentence&number=${length}&format=json`;
    },
    en: (length) => {
        return `https://baconipsum.com/api/?type=all-meat&sentences=${length}`;
    }
};

class TaskController {
    #store;
    
    constructor() {
        this.#store = useAppStore();
    }

    async loadNewTask() {
        const { lang, length } = this.#store.getSettings;
        try {
            this.#store.getSettings.isLoading = true;
            let newTask = '';
            if (lang === 'ru') {
                newTask = await this.#loadRuText(length);
            }

            if (lang === 'en') {
                newTask = await this.#loadEnText(length);
            }

            this.#store.setTaskText(newTask);
        } catch (e) {
            console.log(e);
            alert('Произошла ошибка. Попробуйте еще раз');
        } finally {
            this.#store.getSettings.isLoading = false;
        }
    }

    async #loadRuText(length) {
        const response = await fetch(apiEndpoints.ru(length)).then((result) => result.json());
        return response.text.split('\n\n').join(' ');
    }

    async #loadEnText(length) {
        const response = await fetch(apiEndpoints.en(length)).then((result) => result.json());
        return response.join(' ');
    }
}

export default TaskController;
