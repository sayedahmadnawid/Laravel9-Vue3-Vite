<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8 px-auto">
    <div class="flex flex-col justify-between items-center md:flex-row md:space-y-0">
      <base-button>Add Project</base-button>
      <base-text-box></base-text-box>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    <a href="#" class="group inline-flex">
                      ID
                      <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" class="group inline-flex">
                      Title
                      <span class="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" class="group inline-flex">
                      Code
                      <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" class="group inline-flex">
                      Budget
                      <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <a href="#" class="group inline-flex">
                      Edit
                      <span class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon class="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="project in projects" :key="project.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ project.id }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.title }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.code }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.budget }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ project.description }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/solid'

const projects = [
  { id: '1', title: 'ネ百安へりてけ昇詳キサ神計セヲ浜交示けげひ', code: 'P-22-0018', budget: '35,000,000', state: 'In Progress', description: '三だ抗増8行神石ハマム正説課レりさ雄枚オエア判将仙幅月ヲ', Action: 'action' },
  { id: '2', title: 'ネ百安へりてけ昇詳キ浜交示けげひ', code: 'P-22-0018', budget: '35,000,000', state: 'In Progress', description: '三だ抗増8行事ぶだり神石ハりさ雄枚オエア判将仙幅月ヲ', Action: 'action' },
  // More projects...
]
</script>