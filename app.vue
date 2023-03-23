<template>
    <div>
        <NuxtLayout>
            <SeoKit />
            <!-- Generates browser screenshots for every page -->
            <OgImageScreenshot />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
</style>

<script>
useSeoMeta({
  title: 'Home',
  description: 'My awesome home page.',
})
</script>