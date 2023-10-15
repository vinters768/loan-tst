<template>
  <div class="c__input">
    <b-form-input :value="value" :placeholder="placeholder"></b-form-input>
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
    placeholder: {
      type: String,
      required: true,
    },
  },
  emits: ['onChange'],
})
</script>

<style lang="scss">
.c__input {
  width: 100%;
  height: 48px;

  input {
    color: $tundora;
    font-size: 16px;
    font-weight: 300;
    height: 48px;

    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(89, 72, 173, 0.25);
      border-color: $electric-purple;
    }
  }
}
</style>
