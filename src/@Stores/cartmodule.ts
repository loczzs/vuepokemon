import { Pokemon } from "@/interFace/interface";
import listmodule from "./listmodule"

interface State {
  cart: Pokemon[];
  userCoin: number;
  myPokemon: Pokemon[];
  total: number;
  cartfilter:Pokemon[]
  
}
const cartmodule = {
  state: {
    userCoin:  JSON.parse(localStorage.getItem("userCoinz")  || "20000") , 
    cart: [] as Pokemon[],
    total: 0,
    myPokemon: JSON.parse(localStorage.getItem("myPokemon") || "[]") as Pokemon[],
    cartfilter:listmodule.state.listPokemon
  },
  getters: {
    cart: (state: State) => {
      return state.cart;
    },
    total: (state: State) => {
      return state.total;
    },

    userCoin: (state: State) => {
      return state.userCoin;
    },
    myPokemon: (state: State) => {
      return state.myPokemon;
    },
  },
  mutations: {
    setUsercoinz(state:State,payload:number){ 
      console.log(payload);
      state.userCoin = payload;
      
      localStorage.setItem('userCoinz', JSON.stringify(payload)) ;
    },
    addTocart(state: State, payload: Pokemon) {
      state.cart = [...state.cart, payload];
     
      state.total = state.total + payload.price;
    },
    Purchase(state: State) {
      state.userCoin = state.userCoin - state.total;
      
      
      state.myPokemon = [...state.myPokemon,...state.cart];
      localStorage.setItem("myPokemon", JSON.stringify([...state.myPokemon]));
      cartmodule.mutations.setUsercoinz(state,state.userCoin)
      cartmodule.mutations.clearCart(state);
    },
    clearCart(state: State) {
      state.cart = [];
      state.total = 0;
    },
    deLetecart(state: State, payload: Pokemon) {
      const cart = [...state.cart];
      const index = cart.findIndex((items: any) => items.id === payload.id);
      cart.splice(index, 1);
      state.cart = cart;
      state.total = state.total - payload.price;
    },
    pluscoin:async function(state: State){
      const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
      for (var i = 0; i < 200; i=i+2) {
        state.userCoin = state.userCoin + 2
       
        await sleep(0.7);
      }
      cartmodule.mutations.setUsercoinz(state,state.userCoin)
    },
    
  },
  actions: {},
};
export default cartmodule;
