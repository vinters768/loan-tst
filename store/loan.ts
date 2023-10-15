import { GetterTree, MutationTree } from 'vuex'
import generateNeighboringNumbers, {
  normalizeValue,
} from '~/utils/generateNeighboringNumbers'

const validations = {
  amount: { min: 200, max: 10000, default: 2500 },
  term: { min: 12, max: 60, default: 36 },
}

export const state = () => ({
  amount: validations.amount.default,
  term: validations.term.default,
})

export type LoanState = ReturnType<typeof state>

export const getters: GetterTree<LoanState, LoanState> = {
  monthlyPayment: (state) => {
    const payment = state.amount / state.term

    return Number.isNaN(payment) ? '-' : String(payment.toFixed(2))
  },
  amountSuggestions: (state) =>
    generateNeighboringNumbers(
      state.amount,
      validations.amount.min,
      validations.amount.max,
    ),
  termSuggestions: (state) =>
    generateNeighboringNumbers(
      state.term,
      validations.term.min,
      validations.term.max,
    ),
}

export const mutations: MutationTree<LoanState> = {
  setAmount(state, newAmount: number) {
    state.amount = normalizeValue(
      newAmount,
      validations.amount.min,
      validations.amount.max,
    )
  },
  setTerm(state, newTerm: number) {
    state.term = normalizeValue(
      newTerm,
      validations.term.min,
      validations.term.max,
    )
  },
}
