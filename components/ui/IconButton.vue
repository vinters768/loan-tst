<template>
  <b-button
    pill
    :class="['button', `button--${variant}`]"
    @click="$emit('click')"
  >
    <b-icon :icon="icon" class="button__icon">
      <span class="sr-only">{{ title }}</span>
    </b-icon>
  </b-button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

const Variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}
type Variant = (typeof Variants)[keyof typeof Variants]

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    variant: {
      type: String as PropType<Variant>,
      default: Variants.PRIMARY,
    },
  },
  emits: ['click'],
})
</script>

<style lang="scss">
.button {
  display: flex;
  padding: 8px;
  line-height: 1;
  border: none;

  &--primary {
    background-color: $pale-white;
    color: $royal-purple;

    &:hover,
    &:focus {
      background-color: $pale-white;
      color: $royal-purple;
      filter: drop-shadow(0px 1px 25px #5948ad);
    }
  }

  &--secondary {
    background-color: $royal-purple;
    color: $pale-white;
  }

  &__icon {
    width: 16px;
    height: auto;
  }
}
</style>
