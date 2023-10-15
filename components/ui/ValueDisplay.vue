<template>
  <p
    :class="[
      'value-display',
      ,
      `value-display--${size}`,
      `value-display--${color}`,
    ]"
  >
    {{ value }}
    <span
      :class="['value-display__label', `value-display__label--${alignment}`]"
      >{{ label }}</span
    >
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

const Alignments = {
  TOP: 'top',
  BOTTOM: 'bottom',
} as const
type Alignment = (typeof Alignments)[keyof typeof Alignments]

const Sizes = {
  NORMAL: 'normal',
  LARGE: 'large',
} as const
type Size = (typeof Sizes)[keyof typeof Sizes]

const Colors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const
type Color = (typeof Colors)[keyof typeof Colors]

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    alignment: {
      type: String as PropType<Alignment>,
      default: Alignments.BOTTOM,
    },
    size: {
      type: String as PropType<Size>,
      default: Sizes.NORMAL,
    },
    color: {
      type: String as PropType<Color>,
      default: Colors.PRIMARY,
    },
  },
})
</script>

<style lang="scss">
.value-display {
  margin: 0;

  &--normal {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
  }

  &--large {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;
  }

  &--primary {
    color: $pale-white;
  }

  &--secondary {
    color: $tundora;
  }

  &__label {
    display: inline;
    font-size: 14px;
    line-height: 1;

    &--top {
      vertical-align: text-top;
    }

    &--bottom {
      vertical-align: initial;
    }
  }
}
</style>
