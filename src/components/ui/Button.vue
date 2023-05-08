<script setup>
    import { toRefs } from 'vue';

    const props = defineProps({
        label: {
            type: String
        },
        outlined: {
            type: Boolean,
            default: false
        }
    });

    const { label, outlined } = toRefs(props);
</script>

<template>
    <button class="btn" :class="{ outlined: outlined }">
        <slot />
    </button>
</template>

<style>
    .btn {
        border: 1px solid var(--main-color);
        border-radius: 5px;
        background-color: var(--main-color);
        color: var(--second-color);
        cursor: pointer;
        padding: 5px 10px;

        &:hover {
            box-shadow: 0px 0px 5px 1px var(--main-color);
        }

        &.outlined {
            background-color: var(--second-color);
            color: var(--main-color);
        }

        .icon {
            height: 16px !important;
            width: 16px !important;
        }
    }
</style>
