import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//use는 vue 플러그인, vuex를 전역으로 사용하고 싶을 때, 적음


const storage = {
  fetch() {
    const arr = []; //state에 todoItems이 다른 레벨이라 접근할 수 없어서 배열 선언을 해서 담아 반환하려고 배열 만듬.
    if(localStorage.length > 0) { //App.vue에서 가져온 created 안에 내용
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){

          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr; //arr배열 반환
  }
}

export const store = new Vuex.Store({
  //export로 const store을 하면 store변수는 밖에서도 사용가능하다
  state: {
    todoItems: storage.fetch()
    //App.vue에서 가져온 todoItems를 위에 storage,fetch의 내용을 담는다.
  }
});