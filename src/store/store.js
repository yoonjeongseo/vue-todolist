import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//use는 vue 플러그인, vuex를 전역으로 사용하고 싶을 때, 적음


export const store = new Vuex.Store({
  //export로 const store을 하면 store변수는 밖에서도 사용가능하다
  state: {
    headerText: 'TODO it!'
  }
});