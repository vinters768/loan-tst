import { MutationTree } from 'vuex'
import { IDWithName } from '~/types/types'

export const state = () => ({
  isLoanDetailsEdit: true,
  isPersonalDetailsEdit: false,
  isPEPSelected: false,
  isOnlyBeneficarySelected: false,
  selectedCounty: undefined as string | undefined,
  selectedCountry: 'ee',
  selectedCity: undefined as string | undefined,
  selectedVillage: undefined as string | undefined,
  countries: [
    { id: 'ee', name: 'Estonia' },
    { id: 'lv', name: 'Latvia' },
    { id: 'lt', name: 'Lithuania' },
  ] as IDWithName[],
  counties: [
    { id: null, name: 'County' },
    { id: 'county_1', name: 'County 1' },
    { id: 'county_2', name: 'County 2' },
    { id: 'county_3', name: 'County 3' },
    { id: 'county_4', name: 'County 4' },
    { id: 'county_5', name: 'County 5' },
  ] as IDWithName[],
  cities: [
    { id: null, name: 'City / Parish' },
    { id: 'city_1', name: 'City 1' },
    { id: 'city_2', name: 'City 2' },
    { id: 'city_3', name: 'City 3' },
    { id: 'city_4', name: 'City 4' },
    { id: 'city_5', name: 'City 5' },
  ] as IDWithName[],
  villages: [
    { id: null, name: 'Village / Township' },
    { id: 'village_1', name: 'Village 1' },
    { id: 'village_2', name: 'Village 2' },
    { id: 'village_3', name: 'Village 3' },
    { id: 'village_4', name: 'Village 4' },
    { id: 'village_5', name: 'Village 5' },
  ] as IDWithName[],
})

export type UIState = ReturnType<typeof state>

export const mutations: MutationTree<UIState> = {
  toggleLoanDetailsEdit(state) {
    state.isLoanDetailsEdit = !state.isLoanDetailsEdit
  },
  togglePersonalDetailsEdit(state) {
    state.isPersonalDetailsEdit = !state.isPersonalDetailsEdit
  },
  togglePEPSelected(state) {
    state.isPEPSelected = !state.isPEPSelected
  },
  toggleOnlyBeneficarySelected(state) {
    state.isOnlyBeneficarySelected = !state.isOnlyBeneficarySelected
  },
  setSelectedCountry(state, value) {
    state.selectedCountry = value
  },
  setSelectedCounty(state, value) {
    state.selectedCounty = value
  },
  setSelectedCity(state, value) {
    state.selectedCity = value
  },
  setSelectedVillage(state, value) {
    state.selectedVillage = value
  },
}
