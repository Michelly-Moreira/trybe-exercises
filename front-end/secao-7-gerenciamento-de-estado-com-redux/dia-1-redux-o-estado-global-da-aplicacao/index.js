import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// 1.criando o reducer com o estado inicial
const initialState = { count: 0 }

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "incrementCounter":
      return {
        count: state.count +1
      }
  /* if(action.type === "incrementCounter"){
    return { count: state.count +1};
  } 
return state; */
default:
  return state;
}
}

// 2.criando a store já com redux dev tools
const store = createStore(reducer, composeWithDevTools())

// 3.criando a action
const action = { type: "incrementCounter"}

// 4.disparando a action
const incrementButton = document.querySelector("button");
incrementButton.addEventListener("click", () => {
store.dispatch(action);//o que precisamos fazer quando usar o reducer, dispara a action
});

// 5.lendo as alterações do estado
store.subscribe(() => {
  const globalState = store.getState();
  const counterElement = document.querySelector("h2");
  counterElement.innerHTML = globalState.count; //atualizando o html na tela de acordo com a alteração do estado
})