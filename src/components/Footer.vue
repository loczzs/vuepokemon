<template lang="">
  <footer className="footer " >
    <div class="m-auto h-full w-[90%] px-3">
      <div class="flex justify-between gap-9">
        <div class="w-[24%]">
          <div>
            <h2 className="h2 flex gap-2 items-center">NFTs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              odit porro adipisci voluptatum corrupti quaerat minima accusamus
              in soluta placeat.
            </p>
          </div>
        </div>
        <div
          class="mt-3 w-[17%]"
          v-for="(item, index) in footer"
          :key="item.title"
        >
          <h5 class="h-[15%] text-[1.1rem] text-white">{{ item.title }}</h5>
          <ul
            class="list__group list-group flex h-[55%] flex-col justify-between"
          >
            <li
              v-for="(content, index) in item.content"
              :key="index"
              class="list__item list-group-item"
            >
              <RouterLink :to="content.url">
                <span class="text-[0.9rem] text-white">{{
                  content.display
                }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="mt-3 w-[25%]">
          <h5 class="mb-0 text-[1.1rem] text-white">Newsletter</h5>
          <input type="text" className="newsletter" placeholder="Email" />
      
          <div class="flex">
            <CIcon v-for="(item, index) in icon" :key="index"
                  :icon=" item"
                  
                  class="h-[30px] cursor-pointer w-[30px] bg-[#5142fc] p-1 rounded-[50%] mr-3"
                />
          </div>
        
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { FireOutlined,FacebookOutlined } from "@ant-design/icons-vue";
import { CIcon } from "@coreui/icons-vue";
import {
  cibInstagram,
  cibFacebookF,
  cibTelegramPlane,
  cibTwitter,
  cibDiscord,
} from "@coreui/icons";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  ...mapGetters(["showHeader"]),
  data() {
    return {
      footer: [
        {
          title: "My Account",
          content: [
            {
              id: 1,
              display: "Author Profile",
              url: "/seller-profile",
            },
            {
              id: 2,
              display: "Create Item",
              url: "/create",
            },
            {
              id: 3,
              display: "Collection",
              url: "/market",
            },
            {
              id: 4,
              display: "Edit Profile",
              url: "/edit-profile",
            },
          ],
        },
        {
          title: "Resources",
          content: [
            {
              id: 1,
              display: "Help Center",
              url: "#",
            },
            {
              id: 2,
              display: "Partner",
              url: "#",
            },
            {
              id: 3,
              display: "Community",
              url: "#",
            },
            {
              id: 4,
              display: "Activity",
              url: "#",
            },
          ],
        },
        {
          title: "Company",
          content: [
            {
              id: 1,
              display: "About",
              url: "#",
            },
            {
              id: 2,
              display: "Career",
              url: "#",
            },
            {
              id: 3,
              display: "Ranking",
              url: "#",
            },
            {
              id: 4,
              display: "Contact Us",
              url: "/contact",
            },
          ],
        },
      ],
      
    };
  },
  setup() {
    return {
      icon:[cibInstagram,
      cibFacebookF,
      cibTelegramPlane,
      cibTwitter,
      cibDiscord,]
    };
  },
  components: {
    FireOutlined,
    FacebookOutlined,
    CIcon,
  },
};
</script>
<style scoped>

.h2 {
  background: linear-gradient(-45deg, #e250e5, #4b50e6, #e250e5, #4b50e6);
  background-size: 100% 100%;
  background-clip: text;
  -webkit-text-stroke: 3px transparent;
  -webkit-text-fill-color: #14141f;
  margin-bottom: 0;
}

.footer {
  padding-bottom: 30px;
  background-color: #000;
}

.list__group .list__item {
  background: transparent;
  padding-left: 0;
  border: none;
}

.list__group .list__item a {
  text-decoration: none;
  color: #fff;
  opacity: 100%;
  font-size: 0.9rem;
}

.list__group .list__item a:hover {
  color: #fff;
  opacity: 85%;
}

.newsletter {
  width: 100%;
  border-radius: 50px;
  color: #fff;
  padding: 8px 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  font-size: 0.8rem;
  background: #343444;
}

::placeholder {
  color: #fff;
  opacity: 85%;
}

.social__links span a {
  text-decoration: none;

  color: #fff;
  opacity: 85%;
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.3s;
}

.social__links span a:hover {
  color: #e250e5;
}

.copyright {
  font-size: 0.8rem;
}
</style>
