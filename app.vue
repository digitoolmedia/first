<template>
    <div>
        <div class="flex justify-between m-auto py-4 px-10% text-black dark:text-white">
            <ContentNavigation v-slot="{ navigation }">
                <ul class="flex gap-x-4 text-2xl">
                    <li class="hover:underline underline-black dark:underline-white" v-for="link of navigation" :key="link._path">
                        <NuxtLink activeClass="underline underline-black dark:underline-white" :to="link._path">{{ link.title }}</NuxtLink>
                    </li>
                </ul>
            </ContentNavigation>
            <button @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'" >
				<p v-if="$colorMode.value === 'light'">il tema è chiaro <Icon name="ph:sun"/></p>
				<p v-else>il tema è scuro <Icon name="ph:moon"/></p>
			</button>
        </div>
        <NuxtPage />
    </div>
</template>

<style>
body {
    @apply bg-white dark:bg-#101010
}
</style>

<script>
</script>