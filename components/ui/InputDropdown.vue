<template>
  <div class="c__dropdown">
    <b-form-select
      :id="id"
      :options="data"
      :value="selected"
      value-field="id"
      text-field="name"
      required
    ></b-form-select>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { IDWithName } from '~/types/types'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    data: {
      type: Array as PropType<Array<IDWithName>>,
      required: true,
    },
    selected: {
      type: String,
      required: false,
      default: null
    },
  },
  emits: ['onChange'],
})
</script>

<style lang="scss">
.c__dropdown {
  width: 100%;
  height: 48px;

  select {
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
