<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="px-4 sm:px-6 lg:px-8 px-auto">
        <div
            class="flex flex-col justify-between items-center md:flex-row md:space-y-0"
        >
            <base-button>Add Project</base-button>
            <base-text-box v-model="search" label="Search" type="text" />
        </div>
        <div class="mt-8 flex flex-col">
            <project-filter @change-filter="setFilters"></project-filter>
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        
                        <ul v-if="hasProjects" role="list" class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <project-item v-for="project in allProjects" :key="project.id" 
                            :id="project.id" 
                            :title="project.title" 
                            :code="project.code"
                            :estimited_budget="project.estimited_budget"
                            :state="project.state"
                            :photo="project.photo"
                            :description="project.description"
                            ></project-item>
                        </ul>
                        <base-alert v-else :description="description" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ChevronDownIcon } from "@heroicons/vue/solid";
import ProjectItem from "../../components/projects/projectItem.vue";
import ProjectFilter from "../../components/projects/ProjectFilter.vue";
export default {
    components: {
        ProjectItem,
        ProjectFilter
    },  
    computed: {
        allProjects(){
            //the first [projects/projects] is the namespace the second is the getter 
            const projects =  this.$store.getters['projects/projects'];
            
            return projects.filter(project => {
                
                if(this.activeFilters.in_progress && project.state.includes('In Progress')){
                    return true;
                }
                if(this.activeFilters.ordered && project.state.includes('ordered')){
                    return true;
                }
                if(this.activeFilters.cancelled && project.state.includes('cancelled')){
                    return true;
                }
                return false;
            });
        }, 
        hasProjects(){
            return this.$store.getters['projects/hasProjects'];
        }
    },
    data() {
        return { 
            search: "",
            description: "There is not project available",
            activeFilters: {
                in_progress: true,
                ordered: true,
                cancelled: true
            }
        };
    },
    methods:{
        setFilters(updatedFilters){
            this.activeFilters = updatedFilters
            console.log('after mounted' + this.activeFilters);
        }
    },
    mounted(){
        console.log(this.activeFilters);
    }
};
</script>
