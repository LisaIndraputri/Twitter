import axios from 'axios'



const state = {
  
}
const mutations = {

}
const actions = {
  submitlogin: function ({commit}, data) {
    return axios.post('https://vues-http-174a0.firebaseio.com/data.json', data)
      .then(response => {
        console.log(response)
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