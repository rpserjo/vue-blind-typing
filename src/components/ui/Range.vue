<script setup>
    import { toRefs } from 'vue';

    const props = defineProps({
        label: {
            type: String
        },
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        value: {
            type: Number,
            required: true
        }
    });

    const { min, max, value } = toRefs(props);

    defineEmits(['update']);
</script>

<template>
    <div class="range">
        <div class="row">
            {{ label }}
        </div>
        <div class="row">
            <div class="min">{{ min }}</div>
            <input
                type="range"
                :min="min"
                :max="max"
                :value="value"
                @change="$emit('update', Number($event.target.value))"
            />
            <div class="max">{{ max }}</div>
        </div>
        <div class="row current">{{ value }}</div>
    </div>
</template>

<style scoped>
    .range {
        width: auto;

        .row {
            display: flex;
            justify-content: center;
            line-height: 150%;
            font-size: 16px;

            .current {
                font-weight: 700;
            }
        }

        & .min,
        .max {
            padding: 0 3px;
        }
    }
</style>
