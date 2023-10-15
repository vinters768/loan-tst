<template class="pif">
  <b-container class="w-100 p-0">
    <b-row class="pb-3 px-4 pt-5">
      <div class="title">Personal Information</div>
    </b-row>
    <b-row class="pb-3">
      <b-col cols="6">
        <InputDropdown
          id="country"
          :data="countries"
          :selected="selectedCountry"
          @onChange="setSelectedCounty"
        />
      </b-col>
      <b-col cols="6">
        <InputDropdown
          id="county"
          :data="counties"
          :selected="selectedCounty"
          @onChange="setSelectedCounty"
        />
      </b-col>
    </b-row>

    <b-row class="pb-3">
      <b-col cols="6">
        <InputDropdown
          id="city"
          :data="cities"
          :selected="selectedCity"
          @onChange="setSelectedCounty"
        />
      </b-col>
      <b-col cols="6">
        <InputDropdown
          id="village"
          :data="villages"
          :selected="selectedVillage"
          @onChange="setSelectedVillage"
        />
      </b-col>
    </b-row>

    <b-row class="pb-3">
      <b-col cols="6">
        <InputText placeholder="Street" value="" />
      </b-col>
      <b-col cols="6">
        <div class="d-flex flex-row">
          <div class="">
            <InputText placeholder="House" value="" />
          </div>
          <div class="px-3">
            <InputText placeholder="Apartment" value="" />
          </div>
          <div class="">
            <InputText placeholder="Postal Code" value="" />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UIState } from '~/store/ui'
import InputDropdown from '~/components/ui/InputDropdown.vue'
import InputText from '~/components/ui/InputText.vue'

export default defineComponent({
  components: { InputDropdown, InputText },
  data() {
    return {}
  },
  computed: {
    selectedCounty() {
      return (this.$store.state.ui as UIState).selectedCounty
    },
    selectedCountry() {
      return (this.$store.state.ui as UIState).selectedCountry
    },
    selectedCity() {
      return (this.$store.state.ui as UIState).selectedCity
    },
    selectedVillage() {
      return (this.$store.state.ui as UIState).selectedVillage
    },
    countries() {
      return (this.$store.state.ui as UIState).countries
    },
    counties() {
      return (this.$store.state.ui as UIState).counties
    },
    cities() {
      return (this.$store.state.ui as UIState).cities
    },
    villages() {
      return (this.$store.state.ui as UIState).villages
    },
  },

  methods: {
    togglePEPSelected() {
      this.$store.commit('ui/togglePEPSelected')
    },
    toggleOnlyBeneficarySelected() {
      this.$store.commit('ui/toggleOnlyBeneficarySelected')
    },
    setSelectedCountry(value: any) {
      this.$store.commit('ui/setSelectedCountry', value)
    },
    setSelectedCounty(value: any) {
      this.$store.commit('ui/setSelectedCounty', value)
    },
    setSelectedCity(value: any) {
      this.$store.commit('ui/setSelectedCity', value)
    },
    setSelectedVillage(value: any) {
      this.$store.commit('ui/setSelectedVillage', value)
    },
  },
})
</script>

<style lang="scss">
.pif {
  &__title {
    color: $tundora;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
