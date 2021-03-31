<template>
  <div class="inner">
    <div class="p-date">
      Jul <span>2020</span>
    </div>
    <div class="p-title">
      Sites
    </div>
    <div class="m-text">
      A collection of sites I've created over the years. Listed in
      chronological order
      <ul>
        <li
          v-for="(x, i) in sites"
          :key="i"
        >
          <template v-if="x.site">
            <a
              target="_blank"
              :href="x.site"
            >
              {{ x.name }}
            </a>
          </template>
          <template v-else>
            {{ x.name }}
          </template>
          <template v-if="x.repo">
            <span class="repo">
              ~
              <a
                target="_blank"
                :href="`https://github.com/MaeglynD/${x.repo}`"
              >
                Repo
              </a>
            </span>
          </template>
        </li>
      </ul>
    </div>
    <img
      src="@/assets/sites/everland-a.jpg"
      alt=""
    >
    <video controls>
      <source
        src="@/assets/sites/everland-video.mp4"
        type="video/mp4"
      >
    </video>
    <img
      src="@/assets/sites/stayhome.png"
      alt=""
    >
    <img
      src="@/assets/sites/wallpaper-a.jpg"
      alt=""
    >
    <img
      src="@/assets/sites/wallpaper-b.jpg"
      alt=""
    >
    <img
      src="@/assets/sites/wallpaper-c.png"
      alt=""
    >
    <img
      src="@/assets/sites/startpage.png"
      alt=""
    >
    <img
      src="@/assets/sites/quotegame.png"
      alt=""
    >
    <img
      src="@/assets/sites/kaiten.png"
      alt=""
    >
  </div>
</template>

<script>
export default {
  scrollToTop: true,

  data() {
    return {
      sites: [
        { name: 'Everland', repo: 'everland' },
        { name: 'Stay home', site: 'https://stayhometonight.github.io/' },
        { name: 'Papes', site: 'https://papesio.github.io/' },
        { name: 'Startpage clean', site: 'https://startpageclean.github.io/' },
        { name: 'Quote game', site: 'https://quotegame.github.io/' },
        { name: 'Kaiten', site: 'https://kaitencoin.github.io/' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/projects.scss';
</style>
