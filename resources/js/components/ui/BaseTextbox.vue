<template>
<label for="{{label}}" class="ml-px pl-4 block text-sm font-medium text-gray-700">{{label}}</label>
<div class="mt-1">
    <input
        :placeholder="label"
        :value="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue, $event.target.value')"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full"
    />
    </div>
</template>

<script>
export default{
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue:{
            type: [String, Number],
            default: ''
        }
    }
}
</script>
