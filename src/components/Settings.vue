<script setup>
    import { useAppStore } from '@/store/appStore';
    import Range from '@/components/ui/Range.vue';
    import Select from '@/components/ui/Select.vue';

    const store = useAppStore();

    const handleRangeChange = (value) => {
        store.updateSettings('length', value || 5);
    };

    const handleSelectChange = (value) => {
        store.updateSettings('lang', value || 'ru');
    };
</script>

<template>
    <Transition>
        <div v-if="store.getSettings.showSettings" class="settings">
            <Select
                :options="[
                    { value: 'ru', label: 'Русский' },
                    { value: 'en', label: 'Английский' }
                ]"
                :value="store.getSettings.lang"
                label="Язык текста"
                @update="handleSelectChange"
            />
            <Range
                label="Количество предложений"
                :min="1"
                :max="10"
                :value="store.getSettings.length"
                @update="handleRangeChange"
            />
        </div>
    </Transition>
</template>

<style scoped>
    .settings {
        background-color: var(--border-second-color);
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border-top: 1px solid var(--border-main-color);
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.3s ease;
    }
    .v-enter-from,
    .v-leave-to {
        overflow: hidden;
        max-height: 0;
    }
    .v-enter-to,
    .v-leave-from {
        max-height: 120px;
        overflow: hidden;
    }
</style>
