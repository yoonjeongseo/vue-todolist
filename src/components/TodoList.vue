<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <!-- todoItem.item은 todoItem을 문자가 아닌 객체로 지정해놔서 todoItem객체의 item값을 가져온다 -->
        
        <i class="chkBtn fas fa-check" v-bind:class="{chkBtnCom: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
        <!-- v-bind:class="{chkBtnCom: todoItem.completed}": todoItem의 속성인 completed가 false면 실행이 안되고, true면 실행이 되도록한다 -->

        <span v-bind:class="{textCom: todoItem.completed}">{{ todoItem.item }}</span> <!-- todoItem의 item값만 가져오기 -->
        <!-- <button v-on:click="removeTodo">Delete</button> -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
      //새로 담을 데이터 아이템을 선언 
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index); 
      //todoItems의 값과 인덱스를 받아올 수 있다
      localStorage.removeItem(todoItem.item);
      // vue의 API인  removeItem을 통해서 로컬스토리지의 todoItems의 배열에서 클릭한 removeItem을 지워준다
      this.todoItems.splice(index, 1);
      // Javascript의 배열 API인 splice를 이용해 splice(index, 1) 특정인덱스에서 1개를 지운다
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed; 
      //체크버튼을 클릭할 경우 completed의 블린 값을 변경해준다. 

      localStorage.removeItem(todoItem.item);
       //로컬스토리지로 체크된 아이템을 바로 업데이트하는 API가 없기 떄문에 삭제 후,
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
       //todoItem.item에 있는 변경값을 다시 추가해준다.
    }
  },
  created: function() {
    // vue 인스턴스가 생성되는 시점에 한번 호출된다  
    if(localStorage.length > 0) {
      // 로컬스토리지에 데이터가 있다면,
      for(var i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          //로컬스토리지내에 loglevel:webpack-dev-server가 자동으로 저장되는데 이것을 제외시키고 내가 입력한 데이터만 받기위한 if문

          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //localStorage.key(i): 로컬스토리지의 값을 하나씩 가져온다.
          // 빈배열(todoItems)에 하나씩 담는다.
        }
      }
    }
  }
}
</script>


<style scoped>
  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;  
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #fff;
    border-radius: 5px;
  }
  .chkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .chkBtnCom {
    color: #b3adad;
  }
  .textCom {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, .03);
  }
</style>