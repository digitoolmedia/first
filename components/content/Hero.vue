<template>
    <div class="hero">
        <div class="layout">
          <div class="content">
            <div class="title">
              <ContentSlot :use="$slots.title" unwrap="p">
                Hero title
              </ContentSlot>
            </div>
            <div class="description">
              <ContentSlot :use="$slots.description" unwrap="p">
                Hero description
              </ContentSlot>
            </div>
          </div>
          <NuxtImg
            v-if="image"
            :class="imagePosition"
            :src="image"
            :alt="imageAlt"
            :width="16"
            :height="9"
          />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: null
  },
  imageAlt: {
    type: String,
    default: 'Hero Image'
  },
  imagePosition: {
    type: String,
    default: 'right'
  }
})
</script>

<style scoped>
.hero .layout {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: var(--space-8);
}

@media (min-width: 1024px) {
    .hero .layout {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

.hero .layout .title {
    @apply text-4xl fw-bold;
}

.hero .layout .description {
    @apply mt-3 text-xl;
}

.hero .layout img {
    @apply w-100% b-1 object-cover aspect-video;
}

.hero .layout img.left {
    @apply order--1;
}

</style>