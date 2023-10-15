<template>
  <b-button
    :class="['common-button', 'w-100', `common-button--${variant}`]"
    @click="$emit('click')"
  >
    <span>{{ title }}</span>
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
.common-button {
  display: flex;
  padding: 8px;
  line-height: 1;
  border: none;
  height: 48px;

  span {
    color: $pale-white;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    width: 100%;
    line-height: 32px;
  }

  &--primary {
    background-color: $royal-purple;
    color: $pale-white;

    &:hover,
    &:focus {
      background-color: $royal-purple;
      filter: drop-shadow(0px 1px 25px #5948ad);
    }
  }
}
</style>
