<template>
  <div>
    <CommenSection title="MarketPlace" />
    <section class="m-auto h-full h-full w-[90%] ">
      <div class="mb-[3rem] px-3">
        <div
          className="market__product__filter flex items-center justify-between"
        >
          <div className="filter__left flex items-center gap-5">
            <div className="all__category__filter">
              <select
                @change="(e:any)=>{
                  typeFilter = 'listPokemonz'
                  searchType(e.target.value)
              }"
              >
                <option value="all">All Categories</option>
                <option value="Fire">Fire</option>
                <option value="electric">Electric</option>
                <option value="water">Water</option>
                <option value="fight">Fight</option>
                <option value="top">Top</option>
                <option value="grass">Grass</option>
              </select>
            </div>

            <div className="all__items__filter">
              <select
                @change=" (e:any)=>{ 
                 typeFilter = 'myPokemon'
                filterowned(e)
              }"
              >
                <option value="All">All Items</option>
                <option value="owned">Owned</option>
                <option value="notownde">not owned yet</option>
              </select>
            </div>
          </div>

          <div className="filter__right">
            <select>
              <option>Sort By</option>
              <option>High Rate</option>
              <option>Mid Rate</option>
              <option>Low Rate</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-wrap  ">
        <div
          class="mb-[3.5rem] w-[25%] px-3"
          v-for="item in listPokemonz.reverse()"
          :key="item?.id"
        >
          <PokeCard :PokeinFo="item" />
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import PokeCard from "../components/PokeCard.vue";
import { CIcon } from "@coreui/icons-vue";
import { cilList, cilShieldAlt, cilLeaf } from "@coreui/icons";
import CommenSection from "../components/CommenSection.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { Pokemon } from "@/interFace/interface";

export default {
  data() {
    return {
      listPokemonz: [] as Pokemon[],
      typeFilter: "listPokemonz",
    };
  },
  async mounted() {
    await this.callPokelist();
   const pokemoncreate =  JSON.parse(localStorage.getItem("pokemoncreate") || "[]") as Pokemon[]
    this.listPokemonz = [...this.listPokemon,...pokemoncreate]
    
   
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  methods: {
    ...mapActions(["callPokelist"]),
    filterowned: function (e: any) {
      if (e.target.value === "All") {
        this.listPokemonz = this.listPokemon;
      } else if (e.target.value === "owned") {
        this.listPokemonz = this.myPokemon;
      } else {
        const notOwnded = this.listPokemon.filter((itemfind: Pokemon) => {
          const index = this.myPokemon.findIndex((item: Pokemon) => {
           return itemfind.id === item.id
          });
       
          if(index === -1) return itemfind
        });
        this.listPokemonz = notOwnded
      }
    },
    searchType: function (type: string) {
      const pokemoncreate =  JSON.parse(localStorage.getItem("pokemoncreate") || "[]") as Pokemon[]

      if (type === "all") {
        this.listPokemonz = [...this.listPokemon,...pokemoncreate];
        return;
      }
      
      
      this.listPokemonz = [...this.listPokemon,...pokemoncreate]?.filter((item: Pokemon) => {
        return item.type === type;
      });
       
    },
  },
  computed: {
    ...mapGetters(["listPokemon", "myPokemon"]),

    // chuyển store.state.name => this.name
  },
  components: {
    CIcon,
    CommenSection,
    PokeCard,
  },
  watch: {
    listPokemon() {
      this.listPokemonz = this.listPokemon.reverse();
    },
  },
  setup() {
    return {
      cilList,
      cilShieldAlt,
      cilLeaf,
    };
  },
};
</script>
<style scoped>
.all__category__filter select,
.all__items__filter select,
.filter__right select {
  padding: 7px 25px;
  font-size: 0.9rem;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #343444;
  border-radius: 5px;
}
</style>
