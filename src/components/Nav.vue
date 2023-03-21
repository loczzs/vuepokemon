<template lang="">
  <RouterLink
    :to="item.url"
    class="nav__item cursor-pointer text-[15px] text-[#FFF] no-underline hover:text-white"
    v-for="item in NAV__LINKS"
    :key="item.id"
    active-class="active"
  >
    {{ item.display }}
  </RouterLink>
</template>
<script>
export default {
  data() {
    return {
      NAV__LINKS: [
        {
          id: 1,
          display: "Home",
          url: "/",
        },
        {
          id: 2,
          display: "Market",
          url: "/Market",
        },
        {
          id: 3,
          display: "Game",
          url: "/Game",
        },
        {
          id: 4,
          display: "Create",
          url: "/Create",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
