<template>
    <div class="flex justify-center space-x-8 py-4 px-4 ">
  <div class="form-check form-check-inline">
    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" checked="true" id="in_progress" value="in progress" @change="setFilter">
    <label class="form-check-label inline-block text-gray-800" for="in_progress" >In progress</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" checked="true" id="ordered" value="ordered" @change="setFilter">
    <label class="form-check-label inline-block text-gray-800" for="ordered">Ordered</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" checked="true" id="cancelled" value="cancelled" @change="setFilter">
    <label class="form-check-label inline-block text-gray-800" for="cancelled">Cancelled</label>
  </div>
</div>
</template>

<script>
export default {
    emits:['change-filter'],
    data(){
        return {
            filters: {
                in_progress: true,
                ordered: true,
                cancelled: true
            }
        }
    },
    methods: {
        setFilter(event){
            const inputId = event.target.id
            const isActive = event.target.checked
            
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            }
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters)
        }
    }
}
</script>