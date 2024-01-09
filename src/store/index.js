import axios from 'axios'
import { createStore } from 'vuex'


export default createStore({
  state: {
    // home:null,
    // about:null,
    // resume:null,
    // projects:null,
    // testimonials:null,
    // contact:null
    jsonData: null
  },
  getters: {
    // home(state){
    //   return state.home;
    // },
  },
  mutations: {
    setJsonData(state, data){
      state.jsonData = data
    }
    // setJsonDataAbout(state, data){
    //   state.about = data
    // },
    // setJsonDataResume(state, data){
    //   state.resume = data
    // },
    // setJsonDataProjects(state, data){
    //   state.projects = data
    // },
    // setJsonDataTestimonials(state, data){
    //   state.testimonials = data
    // },
    // setJsonDataContact(state, data){
    //   state.contact = data
    // },
  },
  actions: {
    async fetchJsonData({commit}){
      try{
        const response = await axios.get('https://darrenviljoen32.github.io/vueEOMP/index.json');
        commit ('setJsonData', response.data)
      }catch (error){
        console.error('Error fetching Json Data: ', error);
      }
    },
  },
  modules: {
  }
})
