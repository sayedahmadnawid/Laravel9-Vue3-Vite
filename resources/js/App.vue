
<template>
  <div>
    <TheLeftNavBar/>
    <div class="md:pl-64 flex flex-col">
     <TheHeader/>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheLeftNavBar from './components/layout/TheLeftNavBar.vue'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'
import BaseContent from './components/ui/BaseContent.vue';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]


const sidebarOpen = ref(false)
</script>