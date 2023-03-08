<template>
  <div>
    <CommenSection title="MarketPlace" />
    <section class="m-auto h-full h-full w-[90%] px-3">
      <div class="mb-[3rem]" >
        <div
          className="market__product__filter flex items-center justify-between"
        >
          <div className="filter__left flex items-center gap-5">
            <div className="all__category__filter">
              <select @change="(e:any)=>{
                  searchType(e.target.value)
              }">
                <option value="all">All Categories</option>
                <option value="Fire">Fire</option>
                <option value="electric">Electric</option>
                <option value="water">Water</option>
                <option value="fight">Fight</option>
                <option value="top">Top</option>
              </select>
            </div>

            <div className="all__items__filter">
              <select >
                <option>All Items</option>
                <option>Single-item</option>
                <option>Bundle</option>
              </select>
            </div>
          </div>

          <div className="filter__right">
            <select >
              <option>Sort By</option>
              <option>High Rate</option>
              <option>Mid Rate</option>
              <option>Low Rate</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-wrap justify-between">
        <div class="mb-[3.5rem] w-[23.75%]" v-for="item in listPokemon" :key="item.id">
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
import av1 from "../images/ava-01.png" 
export default {
  mounted() {
    this.callPokelist();
    window.scrollTo({
          top:0,
          behavior:"smooth"
      })
  },
  methods: {
    ...mapActions(["callPokelist","searchType"]),
    

    
  },
  computed: {
    ...mapGetters(["listPokemon"]),

    // chuyển store.state.name => this.name
  },
  components: {
    CIcon,
    CommenSection,
    PokeCard,
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
