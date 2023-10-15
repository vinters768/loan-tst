<template>
  <b-dropdown size="sm" toggle-class="toggle" variant="transparent">
    <b-dropdown-item-button
      v-for="item in items"
      :key="item.value"
      :button-class="[
        'toggle__item',
        { 'toggle__item--underlined': item.isMin || item.isMax },
      ]"
      :disabled="item.isCurrent"
      @click="$emit('pick', item.value)"
    >
      <ValueDisplay
        :value="String(item.value)"
        :label="units"
        color="secondary"
      />
      <span v-if="item.isMin" class="toggle__hint">Min. allowed</span>
      <span v-if="item.isMax" class="toggle__hint">Max. allowed</span>
    </b-dropdown-item-button>
  </b-dropdown>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ValueDisplay from './ValueDisplay.vue'
import { NeighboringNumber } from '~/utils/generateNeighboringNumbers'

export default defineComponent({
  components: { ValueDisplay },
  props: {
    items: {
      type: Array as PropType<NeighboringNumber[]>,
      required: true,
    },
    units: {
      type: String,
      required: true,
    },
  },
  emits: ['pick'],
})
</script>

<style lang="scss">
.toggle {
  color: white;
  border: none;

  &:hover,
  &:focus {
    color: inherit;
    background-color: $purple;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    position: relative;
    padding: 4px 16px;

    &--underlined::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 80%;
      height: 1px;
      background-color: $tundora;
    }
  }

  &__hint {
    font-size: 10px;
    line-height: 1;
    font-weight: 300;
    color: $tundora;
  }
}
</style>
