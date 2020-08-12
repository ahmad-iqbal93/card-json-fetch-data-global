import { action, createStore } from 'easy-peasy'

export let globalData = createStore({
    userData: [],
    setUserData: action((state, payload) => {
        state.userData = payload
    })
})