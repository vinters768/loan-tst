<template>
  <div class="custom-input">
    <label class="custom-input__label" :for="name">
      {{ label }}
      <span v-if="isFocused && hint" class="custom-input__hint">
        {{ hint }}
      </span>
    </label>
    <div
      :class="[
        'custom-input__wrapper',
        { 'custom-input__wrapper--baseline': isBaselineUnits },
      ]"
    >
      <input
        :id="name"
        ref="input"
        class="custom-input__field"
        type="text"
        maxlength="5"
        :value="value"
        @input="handleInput"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <span class="custom-input__units">{{ units }}</span>
      <span class="custom-input__border" />
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
    units: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    isBaselineUnits: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input'],
  data() {
    return {
      isFocused: false,
    }
  },
  methods: {
    handleInput(event: Event) {
      const { value } = event.target as HTMLInputElement

      this.$emit('input', value)
    },
  },
})
</script>

<style lang="scss">
.custom-input {
  $root: &;

  display: flex;
  align-items: center;
  gap: 8px;
  color: $pale-white;

  &__wrapper {
    display: flex;
    position: relative;
    padding: 2px 4px;
    gap: 4px;
    font-weight: 400;

    &--baseline {
      align-items: baseline;
    }
  }

  &__border {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.5px;
    background-color: $pale-white;
  }

  &__field {
    all: unset;
    appearance: textfield;
    text-align: center;
    font-size: 20px;
    line-height: 1.2;
    max-width: 60px;

    &:hover ~ #{$root}__border,
    &:focus ~ #{$root}__border {
      height: 1px;
    }
  }

  &__units {
    font-size: 14px;
    line-height: 1;
  }

  &__label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0;
    min-width: 70px;
    line-height: 1;
    color: $grey;
    text-align: right;
  }

  &__hint {
    font-size: 10px;
  }
}
</style>
