<template class="atr-row">
  <div
    class="atr-row__content d-flex flex-column justify-content-center align-items-center w-100"
  >
    <div
      class="d-flex flex-row justify-content-center align-items-center w-100"
    >
      <div class="divider"></div>
      <div class="divider-text">Or</div>
      <div class="divider"></div>
    </div>
    <div class="py-4">
      <b-form-checkbox
        v-model="checked"
        class="atr-row__checkbox"
        name="check-button"
        switch
      >
        Add address manually
      </b-form-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      checked: false,
    }
  },
})
</script>

<style lang="scss">
.atr-row {
  &__content {
    width: 100%;

    border-bottom: 1px solid $grey;

    .divider-text {
      color: $grey;
      font-size: 14px;
      font-style: italic;
      font-weight: 400;
      padding: 0 100px;
    }
    .divider {
      width: 100%;
      height: 1px;
      background: $grey;
    }
  }

  &__checkbox {
    padding: 0;

    .custom-control-label::before {
      width: 31px;
      height: 20px;
      border-radius: 20px;
      background-color: #9c9c9c;
    }

    .custom-control-label::after {
      top: calc(0.25rem + 2px);
      left: calc(-2.25rem + 2px);
      width: 16px;
      height: 16px;
      background-color: #fff;
      border-radius: 16px;
      transition:
        transform 0.15s ease-in-out,
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    }

    .custom-control-input:focus:not(:checked) ~ .custom-control-label::before,
    input:focus {
      border-color: transparent;
    }
    .custom-control-input:focus ~ .custom-control-label::before {
      box-shadow: 0 0 0 0.2rem rgba(89, 72, 173, 0.25);
    }
    .custom-control-input:checked ~ .custom-control-label::before {
      color: transparent;
      border-color: transparent;
      background-color: #53cba0;
    }

    .custom-control-input:checked ~ .custom-control-label::after {
      background-image: none;
      color: transparent;
      border-color: transparent;
      background-color: #fff;
    }

    label {
      color: $tundora;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      padding: 0 16px;
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
