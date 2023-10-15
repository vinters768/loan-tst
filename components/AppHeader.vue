<template>
  <header class="d-flex p-3 justify-content-center">
    <NuxtLink to="/"><LogoIcon /></NuxtLink>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoIcon from '~/assets/icons/logo.svg?inline'

export default defineComponent({
  components: { LogoIcon },
})
</script>
