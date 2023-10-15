<template>
  <section class="loan">
    <template v-if="isEdit">
      <div class="loan__content">
        <CustomInput
          v-model.number="amount"
          units="€"
          label="Amount"
          name="amount"
          hint="200 - 10 000 €"
        >
          <ValuesDropdown
            :items="amountSuggestions"
            units="€"
            @pick="updateAmount"
          />
        </CustomInput>
        <CustomInput
          v-model.number="term"
          units="months"
          label="Duration"
          name="term"
          hint="12 - 60 months"
          is-baseline-units
        >
          <ValuesDropdown
            :items="termSuggestions"
            units="mth."
            @pick="updateTerm"
          />
        </CustomInput>
        <div class="loan__monthly">
          Monthly Payment
          <ValueDisplay
            :value="monthlyPayment"
            label="€"
            size="large"
            alignment="top"
          />
        </div>
      </div>
      <IconButton title="Next" icon="chevron-right" @click="toggleEdit" />
    </template>
    <template v-else>
      <IconButton title="Back" icon="chevron-left" @click="toggleEdit" />
      <div class="loan__content">
        <h2 class="loan__title">Your loan application</h2>
        <div class="loan__summary">
          <ValueDisplay :value="amount" label="€" alignment="top" />
          /
          <ValueDisplay :value="term" label="months" />
        </div>
      </div>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UIState } from '~/store/ui'
import { LoanState } from '~/store/loan'
import CustomInput from '~/components/ui/CustomInput.vue'
import IconButton from '~/components/ui/IconButton.vue'
import ValueDisplay from '~/components/ui/ValueDisplay.vue'
import ValuesDropdown from '~/components/ui/ValuesDropdown.vue'

export default defineComponent({
  components: { CustomInput, ValueDisplay, ValuesDropdown, IconButton },
  computed: {
    isEdit() {
      return (this.$store.state.ui as UIState).isLoanDetailsEdit
    },
    amount: {
      get() {
        return String((this.$store.state.loan as LoanState).amount)
      },
      set(newValue: number) {
        this.updateAmount(newValue)
      },
    },
    term: {
      get() {
        return String((this.$store.state.loan as LoanState).term)
      },
      set(newValue: number) {
        this.updateTerm(newValue)
      },
    },
    monthlyPayment() {
      return this.$store.getters['loan/monthlyPayment']
    },
    amountSuggestions() {
      return this.$store.getters['loan/amountSuggestions']
    },
    termSuggestions() {
      return this.$store.getters['loan/termSuggestions']
    },
  },
  methods: {
    toggleEdit() {
      this.$store.commit('ui/toggleLoanDetailsEdit')
    },
    updateAmount(newValue: number) {
      this.$store.commit('loan/setAmount', newValue)
    },
    updateTerm(newValue: number) {
      this.$store.commit('loan/setTerm', newValue)
    },
  },
})
</script>

<style lang="scss">
.loan {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 32px;
  background-color: $royal-purple;
  width: 100%;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 8px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 300;
    color: $pale-white;
    margin: 0 auto;

    @media (min-width: 768px) {
      align-items: center;
      flex-direction: row;
    }
  }

  &__monthly {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    min-width: 232px;
    padding: 4px 8px;
    border-radius: 32px;
    background-color: $purple;
    color: $grey;
  }

  &__title {
    font-size: 20px;
    line-height: 34px;
    margin: 0;
  }

  &__summary {
    display: flex;
    gap: 8px;
  }
}
</style>
