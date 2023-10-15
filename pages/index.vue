<template>
  <section class="content">
    <LoanDetails />
    <template v-if="isPreview">
      <UserInfoBox />
      <PersonalInfoForm />
      <AddressToggleRow />
      <div
        class="content__bottom row d-flex flex-column align-items-center justify-content-center"
      >
        <div class="w-100 pb-4">
          <CheckboxRow
            text="Neither I nor my family member is PEP"
            :value="isPEPSelected"
            @click="modalShow = !modalShow"
          />
        </div>
        <div class="w-100 pb-4">
          <CheckboxRow
            text="I’m the ultimate beneficiary"
            :value="isOnlyBeneficarySelected"
            @click="modalShow = !modalShow"
          />
        </div>
        <div class="w-100 py-4">
          <CommonButton title="Confirm" @click="onConfirm" />
        </div>
      </div>
    </template>
    <b-modal v-model="modalShow" centered hide-footer class="custom_modal">
      <div class="title pb-3">PEP</div>
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </b-modal>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UIState } from '~/store/ui'
import LoanDetails from '~/components/LoanDetails.vue'
import UserInfoBox from '~/components/UserInfoBox.vue'
import CheckboxRow from '~/components/ui/CheckboxRow.vue'
import PersonalInfoForm from '~/components/forms/PersonalInfoForm.vue'
import AddressToggleRow from '~/components/ui/AddressToggleRow.vue'
import CommonButton from '~/components/ui/CommonButton.vue'

export default defineComponent({
  components: {
    LoanDetails,
    UserInfoBox,
    CheckboxRow,
    PersonalInfoForm,
    AddressToggleRow,
    CommonButton,
  },
  data() {
    return {
      modalShow: false,
    }
  },
  computed: {
    isPreview() {
      return !(this.$store.state.ui as UIState).isLoanDetailsEdit
    },
    isPEPSelected() {
      return (this.$store.state.ui as UIState).isPEPSelected
    },
    isOnlyBeneficarySelected() {
      return (this.$store.state.ui as UIState).isOnlyBeneficarySelected
    },
  },
  methods: {
    togglePEPSelected() {
      this.$store.commit('ui/togglePEPSelected')
    },
    toggleOnlyBeneficarySelected() {
      this.$store.commit('ui/toggleOnlyBeneficarySelected')
    },
    onConfirm() {
      console.log('CONFIRM++')
    },
  },
})
</script>

<style lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  &__bottom {
    max-width: 372px;
    width: 100%;
    padding: 46px 0;
  }
}
</style>
