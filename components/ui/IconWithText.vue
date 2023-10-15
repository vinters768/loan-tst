<template>
  <div class="iwt d-flex flex-row align-items-center justify-content-center px-2">
    <b-icon :icon="icon" class="iwt__icon" />
    <div class="iwt__text px-2">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.iwt {
  &__text {
    color: $tundora;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  &__icon {
    width: 11px;
    height: auto;
  }
}
</style>
