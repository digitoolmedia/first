<template>
    <div>
        <NuxtLayout>
            <SeoKit />
            <!-- a. Generates browser screenshots for every page -->
            <OgImageScreenshot />
            <!-- b. Generate saotir images for every page (uses the default template) -->
            <OgImageStatic />
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
</style>