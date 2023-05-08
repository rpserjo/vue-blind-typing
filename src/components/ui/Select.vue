<script setup>
    import { toRefs } from 'vue';

    const props = defineProps({
        label: {
            type: String
        },
        options: {
            type: Array,
            required: true
        },
        value: {
            type: [String, Number],
            required: true
        }
    });

    const { label, options, value } = toRefs(props);

    defineEmits(['update']);
</script>

<template>
    <div class="select">
        <label>{{ label }}: </label>
        <select @change="$emit('update', $event.target.value)">
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
                :selected="value === option.value"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<style scoped>
    .select{

        label, select {
            font-size: 16px;
            line-height: 150%;
        }
    }
</style>
