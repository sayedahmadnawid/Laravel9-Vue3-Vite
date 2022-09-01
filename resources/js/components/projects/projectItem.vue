<template>
    <li
        class="col-span-1 flex flex-col rounded-lg shadow divide-y divide-gray-200 my-1 mx-1 bg-gray-50"
    >
        <div class="flex-1 flex flex-col p-2">
            <img
                class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                :src="photo"
                alt=""
            />
            <h3 class="mt-6 text-gray-900 text-sm text-center font-medium">
                {{ code }}
            </h3>
            <div class="flex flex-grow flex-col">
                <h3 class="text-gray-500 text-center text-md py-2 px-1">{{title}}</h3>
                <p class="text-gray-500 text-sm py-2">{{title}}</p>
            </div>
        </div>
        <div class="flex justify-center items-center py-1">
            <p class="leading-4 font-bold"><span class="text-lg leading-6">¥ </span>{{ estimited_budget }}</p>
        </div>
    </li>
    <!--   </ul> -->
</template>

<script>
import { MailIcon, PhoneIcon } from "@heroicons/vue/solid";

export default {
    props: [
        "id",
        "code",
        "title",
        "estimited_budget",
        "state",
        "photo",
        "description",
    ],
};
</script>
