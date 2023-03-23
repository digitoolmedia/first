<template>
    <div class="min-h-[100vsh] flex flex-col">
        <NuxtLoadingIndicator />
        <nav>
            <div class="flex justify-between m-auto py-4 px-10% text-black dark:text-white">
                <ContentNavigation v-slot="{ navigation }">
                    <ul class="flex gap-x-4 text-2xl">
                        <li class="hover:underline underline-black dark:underline-white" v-for="link of navigation" :key="link._path">
                            <NuxtLink activeClass="underline underline-black dark:underline-white" :to="link._path">{{ link.title }}</NuxtLink>
                        </li>
                    </ul>
                </ContentNavigation>
                <button @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'" >
                    <p v-if="$colorMode.value === 'light'">il tema è chiaro <span class="i-ph:sun"></span></p>
                    <p v-else>il tema è scuro <span class="i-ph:moon"></span></p>
                </button>
            </div>
        </nav>
        <slot />
    </div>
</template>

<script setup>

</script>

<style>
body {
    @apply bg-white dark:bg-#101010;
}
</style>