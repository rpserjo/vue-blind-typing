<script setup>
    import { computed, toRefs } from 'vue';
    import Char from '@/components/Char.vue';

    const props = defineProps({
        text: {
            type: String,
            required: true
        },
        currentIndex: {
            type: Number,
            required: true
        },
        isMistake: {
            type: Boolean,
            required: true
        }
    });

    const { text, currentIndex, isMistake } = toRefs(props);

    const chars = computed(() => text.value.split(''));
</script>

<template>
    <div class="text-field">
        <template v-if="chars.length > 0">
            <Char
                v-for="(char, index) in chars"
                :key="index"
                :char="char"
                :isTyped="index < currentIndex"
                :isCurrent="index === currentIndex"
                :isMistake="isMistake"
            />
        </template>        
        <span v-else>
            <p>Нажмите <b>"Начать новое задание"</b>, чтобы загрузить текст.</p>
            <p>В настройках можно установить язык и количество предложений.</p>
            <p>Отсчет времени начнется после первой нажатой клавиши</p>
        </span>
    </div>
</template>

<style scoped>
    .text-field {
        border-radius: 5px;
        padding: 10px;
        background-color: antiquewhite;

        span {
            font-weight: 500;
            text-align: center;

            p {
                margin: 5px 0;
            }
        }
    }
</style>
