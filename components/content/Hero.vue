<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <h1 class="text-4xl fw-bold m-0">
        <ContentSlot :use="$slots.title" unwrap="p">
          Hero title
        </ContentSlot>
      </h1>
      <p class="mt-3 text-xl">
        <ContentSlot :use="$slots.description" unwrap="p">
          Hero description
        </ContentSlot>
      </p>
    </div>
    <NuxtPicture
      v-if="image"
      :class="imagePosition"
      class="b-1"
      :src="image"
      :alt="imageAlt"
      sizes="xs:512px md:1024px xl:2048px xxl:4096px"
      :imgAttrs="{ class:'object-cover aspect-video', }"
      fetchpriority="high"
    />
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
 img.left {
    @apply order--1;
}
</style>