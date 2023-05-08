<script setup>
    import { toRefs } from 'vue';

    const props = defineProps({
        char: {
            type: String,
            required: true
        },
        isMistake: {
            type: Boolean,
            required: true
        },
        isTyped: {
            type: Boolean,
            required: true
        },
        isCurrent: {
            type: Boolean,
            required: true
        }
    });

    const { char, isMistake, isTyped, isCurrent } = toRefs(props);
</script>

<template>
    <span
        :class="{
            'is-typed': isTyped,
            'is-current': isCurrent,
            'is-mistake': isCurrent & isMistake
        }"
        >{{ char }}</span
    >
</template>

<style scoped>
    span {
        padding: 1px;
        font-size: 18px;
    }
    .is-typed {
        font-weight: bold;
        color: teal;
    }

    .is-current {
        background-color: teal;
        color: white;
    }
    .is-mistake {
        background-color: crimson;
        color: white;
    }
</style>
