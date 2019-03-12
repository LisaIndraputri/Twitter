import axios from 'axios'



const state = {
  user: {
    name: '',
    password: '',
  },
}
const mutations = {
  login: function(state, user) {
    state.user = user
  }

}
const actions = {
  submitlogin: function ({commit}, data) {
    return axios.post('https://vues-http-174a0.firebaseio.com/data.json', data)
      .then(response => {
        console.log(response)
        commit('login', response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export default {
  state,
  mutations,
  actions
}