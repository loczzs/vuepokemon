<template>
  <section>
    <div class="seller__section-title  mb-[3rem]">
      <h3 class="text-3xl font-semibold text-[#fff] text-[white]">
        Top Seller
      </h3>
    </div>

   <div class="flex flex-wrap justify-between ">
    <div
      v-for="seller in listSeller"
      :key="seller.id"
      class="single__seller-card flex items-center gap-3 mb-[1.5rem]"
    >
      <div class="h-[80px] w-[80px]">
        <img :src="seller. sellerImg" alt="" class="w-full" />
      </div>

      <div className="seller__content">
        <h6>{{seller.sellerName}}</h6>
        <h6>{{seller.currentBid}}</h6>
      </div>
    </div>
   </div>
  </section>
</template>
<script>
import ava1 from "../images/ava-01.png"
import ava2 from "../images/ava-02.png"
import ava3 from "../images/ava-03.png"
import ava4 from "../images/ava-04.png"
import ava5 from "../images/ava-05.png"
import ava6 from "../images/ava-06.png"
export default {
  data() {
    return {
       
      listSeller: [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
          sellerName: "Ryan Carder",
          sellerImg: ava1,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 2,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
          sellerName: "Trista Francis",
          sellerImg: ava2,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 3,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
          sellerName: "Ryan Carder",
          sellerImg: ava3,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 4,

          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",

          sellerName: "Ryan Carder",
          sellerImg: ava4,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 5,

          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",

          sellerName: "Trista Francis",
          sellerImg: ava5,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 6,

          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",

          sellerName: "Trista Francis",
          sellerImg: ava6,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },
        {
          id: 7,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
          sellerName: "Ryan Carder",
          sellerImg: ava1,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 8,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
          sellerName: "Trista Francis",
          sellerImg: ava2,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 9,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",
          sellerName: "Ryan Carder",
          sellerImg: ava3,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 10,

          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",

          sellerName: "Ryan Carder",
          sellerImg: ava4,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 11,

          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",

          sellerName: "Trista Francis",
          sellerImg: ava5,
          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },

        {
          id: 12,

          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia",

          sellerName: "Trista Francis",
          sellerImg: ava6,

          currentBid: 5.89,
          fbUrl: "#",
          instaUrl: "#",
          twitUrl: "#",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style scoped>
.seller__section-title h3 {
  color: #fff;
}

.seller__img {
  width: 80px;
  height: 80px;
}

.seller__content h6 {
  color: #fff;
  font-size: 1rem;
}
.link__seller {
  text-decoration: none;
}
</style>
