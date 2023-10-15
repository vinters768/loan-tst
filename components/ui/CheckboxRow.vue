<template class="checkbox-row">
  <div class="d-flex flex-row justify-content-start align-contet-start w-100">
    <b-form-checkbox
      class="checkbox-row__checkbox"
      :v-model="value"
      value="value"
    />
    <div class="checkbox-row__text w-100">
      {{ text }}
    </div>
    <b-icon
      icon="info-circle"
      class="checkbox-row__icon"
      @click="$emit('click')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    value: {
      type: [Boolean, String],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  emits: ['click'],
})
</script>

<style lang="scss">
.checkbox-row {
  &__checkbox {
    padding: 0;

    input,
    .custom-control-label::before,
    .custom-control-label::after {
      width: 24px;
      height: 24px;
      border-color: $tundora;
      top: 0;
    }
    .custom-control-input:focus:not(:checked) ~ .custom-control-label::before,
    input:focus {
      border-color: $electric-purple;
    }
    .custom-control-input:focus ~ .custom-control-label::before {
      box-shadow: 0 0 0 0.2rem rgba(89, 72, 173, 0.25);
    }
    .custom-control-input:checked ~ .custom-control-label::before {
      color: $electric-purple;
      border-color: $electric-purple;
      background-color: transparent;
    }

    .custom-control-input:checked ~ .custom-control-label::after {
      background-image: url('~/assets/icons/check.svg');
    }
  }

  &__text {
    color: $tundora;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    padding: 0 16px;
  }
  &__icon {
    color: $royal-purple;
    width: 16px;
    height: auto;

    &:hover,
    &:focus {
      cursor: pointer;
      color: $tundora;
    }
  }
}
</style>
