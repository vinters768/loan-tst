<template>
  <section
    class="user-box d-flex flex-column justify-content-center align-items-center"
  >
    <div class="user-box__header">
      <div class="w-100">Anna Maria Tamm Rodriguez Espinosa</div>
      <IconButton title="Next" icon="pencil-fill" />
    </div>
    <div
      class="user-box__content d-flex flex-row justify-content-center align-items-center w-100 h-100"
    >
      <IconWithText text="38912052254" icon="person" />
      <IconWithText text="+372 5289 6572" icon="telephone" />
      <IconWithText text="anna.tamm@gmail.com" icon="envelope" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconWithText from '~/components/ui/IconWithText.vue'
import IconButton from '~/components/ui/IconButton.vue'

export default defineComponent({
  components: { IconWithText, IconButton },
})
</script>

<style lang="scss">
.user-box {
  width: 100%;
  height: 105px;
  border-radius: 30px;
  border: 5px solid $border;
  margin-top: 21px;

  &__header {
    display: flex;
    align-items: center;
    padding: 12px;
    background-color: $white-lilac;
    text-align: center;
    width: 100%;
    height: 55px;
    border-radius: 25px 25px 0px 0px;
    color: $tundora;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
