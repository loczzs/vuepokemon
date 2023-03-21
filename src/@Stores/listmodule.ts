import { Pokemon } from "@/interFace/interface";
import axios from "axios";

interface State {
  listPokemon: Pokemon[];
  num: number;
  PokeTop: Pokemon[];
  liveAution: Pokemon[];
 
}
const listmodule = {
  state: {
    listPokemon: [] as Pokemon[],
    PokeTop: [] as Pokemon[],
    liveAution: [] as Pokemon[],
    
  },
  getters: {
    listPokemon: (state: State) => {
      return state.listPokemon;
    },

    PokeTop: (state: State) => {
      return state.PokeTop;
    },
    liveAution: (state: State) => {
      return state.liveAution;
    },
  },
  mutations: {
    SET_list(state: State, payload: Pokemon[]) {
      state.listPokemon = payload;
      state.PokeTop = payload?.filter(
        (items: Pokemon) => items?.type === "top"
      );
      state.liveAution = payload
        ?.filter(
          (items: Pokemon, index: number) => index % 2 !== 0 && index > 8
        )
        ?.reverse();
    },
    listAftercreate:function(state: State,payload: Pokemon){
      
      state.listPokemon = [...state.listPokemon,payload]
      const pokemoncreate =  JSON.parse(localStorage.getItem("pokemoncreate") || "[]") as Pokemon[]

      localStorage.setItem('pokemoncreate', JSON.stringify([...pokemoncreate,payload])); ;
      
    }
  },
  actions: {
    callPokelist: async function ({ commit }: any) {
      try {
        const res = await axios.get(
          "https://62f8549b3eab3503d1d55ce4.mockapi.io/Pokemon"
        );
              console.log(res);
              
        commit("SET_list", res.data);
      } catch (error) {
        console.log(error);
      }
    },
    // searchType: async function ({ commit }: any, payload: string) {
      
      
    //   if(payload === "all"){
    //     listmodule.actions.callPokelist({ commit })
    //     return
    //   }
      
    //   try {
    //     const res = await axios.get(
    //       "https://62f8549b3eab3503d1d55ce4.mockapi.io/Pokemon",
    //       {
    //         params: {
    //           type: payload
    //         },
    //       }
    //     );

    //     commit("SET_list", res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    
  },
};
export default listmodule;
