import { createStore } from "vuex";
import { Pokemon } from "@/interFace/interface"
import listmodule from "./listmodule";
import cartmodule from "./cartmodule";
import checkheader from "./checkheader";
import axios from "axios";
 
const store = createStore({
  
   modules:{
    a:listmodule,
    b:cartmodule,
    c:checkheader,
   }
   });
   
   export default store;