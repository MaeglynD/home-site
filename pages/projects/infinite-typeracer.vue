<template>
  <div class="inner">
    <div class="p-date">
      March <span>2020</span>
    </div>
    <div class="p-title">
      Infinite typeracer
    </div>
    <div class="m-text">
      Inspired by the popular typing game 'typeracer'. I decided to reinvent the game to allow
      users to enter whatever length text they like. 'Miss-handling' also differs slightly
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/MaeglynD/infinite-typeracer"
          >Repo</a>
        </li>
      </ul>
    </div>
    <video controls>
      <source
        src="@/assets/infinite-typeracer/video.mp4"
        type="video/mp4"
      >
    </video>
    <img src="@/assets/infinite-typeracer/a.png">
  </div>
</template>

<script>
export default {
  scrollToTop: true,
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/projects.scss';
</style>
