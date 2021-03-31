<template>
  <div class="main-container">
    <!-- Background container -->
    <div class="bg-container">
      <div class="gradient" />
      <div class="bg" />
    </div>

    <!-- Nav container -->
    <div
      :class="{
        'fixed-nav': true,
        isFixed: sp > (wh - 90),
        isInvis: sp > 70}"
    >
      <div class="fix-inner">
        <!-- Logo -->
        <router-link to="/">
          <span class="logo">
            <!--
              NOTE: the indentation below is purposefully inconsistent with the rest of the markup
              as to avoid white space between the 'maeglyn' and the '.com'
            -->
            maeglyn<span class="yl">.com</span>
          </span>
        </router-link>

        <!-- Nav options -->
        <div class="nav-right">
          <span
            v-for="(scrollObj, i) in scrollModels"
            :key="`scrollobj-${i}`"
            v-scroll-to="scrollObj"
          >
            {{ scrollObj.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- Initial page -->
    <div class="first-container">
      <div class="fit">
        <div class="hi">
          <div>Hi, i'm maeglyn</div>

          <div class="yl">
            software dev & design
          </div>
        </div>
      </div>
    </div>

    <!-- Who am i page -->
    <div class="second-container">
      <div class="fit">
        <div class="sm-head">
          about
        </div>

        <div class="sm-lg-head">
          Who am i?
        </div>

        <div class="m-text">
          I‘m a software dev based in the UK, commercially
          I‘m versed in writing software natively and in browser, both front and backend.
          I work with large-scale live and historical data as well as create
          customizable analytics tools for users to view their data. I do design too.
        </div>

        <div class="flex-specs">
          <div class="f-container">
            <img
              src="../assets/laptop.png"
              alt="cube"
            >

            <div class="top-row-container">
              <div class="a">
                Frontend
              </div>

              <div class="b">
                Design and frontend tech
              </div>
            </div>

            <ul>
              <li
                v-for="(x, i) in frontend"
                :key="i"
              >
                • {{ x }}
              </li>
            </ul>
          </div>

          <div class="f-container">
            <img
              src="../assets/cube.png"
              alt="cube"
            >

            <div class="top-row-container">
              <div class="a">
                Backend & General
              </div>

              <div class="b">
                Application tech
              </div>
            </div>

            <ul>
              <li
                v-for="(x, i) in backend"
                :key="i"
              >
                • {{ x }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects page -->
    <div class="third-container">
      <div>
        <div class="fit">
          <div class="sm-head">
            Work
          </div>

          <div class="sm-lg-head">
            Projects
          </div>
        </div>

        <div class="card-container">
          <client-only>
            <carousel-3d
              disable3d
              :space="ww <= 1400 ? 380 : 421"
              :border="0"
              :width="408"
            >
              <slide
                v-for="(x, i) in projects"
                :key="i"
                :index="i"
              >
                <template slot-scope="{ isCurrent }">
                  <div :class="{ 'card': true, 'current': isCurrent }">
                    <div
                      class="c-img"
                      :style="{ backgroundImage: `url(${require(`@/assets${x.img}`)})`}"
                    />

                    <div class="c-buffer">
                      <div class="c-tags">
                        {{ x.tags }}
                      </div>

                      <div class="c-title">
                        {{ x.title }}
                      </div>

                      <div class="c-desc m-text">
                        {{ x.desc }}
                      </div>

                      <router-link :to="`/projects/${ x.title.replace(/ /g, '-') }`">
                        <div class="m-btn">
                          view
                        </div>
                      </router-link>
                    </div>
                  </div>
                </template>
              </slide>
            </carousel-3d>
          </client-only>
        </div>
      </div>
    </div>

    <!-- Socials container -->
    <div class="fourth-container">
      <div class="fit">
        <div class="sm-head">
          social
        </div>

        <div class="sm-lg-head">
          Contact
        </div>

        <div class="c-flex">
          <a
            v-for="({ url, head, sub, icon }, i) in socialLinks"
            :key="`social-link-${i}`"
            :href="url"
            target="_blank"
            class="c-item"
          >

            <div class="a">
              {{ head }}
            </div>

            <div class="b">
              {{ sub }}
            </div>

            <div class="c-abs">
              <v-icon
                size="36"
                color="#b88c4f"
              >
                mdi-{{ icon }}
              </v-icon>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer container -->
    <div class="footer-container">
      <div class="f-flex">
        <a
          v-for="({ url, name }, i) in footerLinks"
          :key="`footer-link-${i}`"
          :href="url"
          target="_blank"
        >
          {{ name }}
        </a>
      </div>

      <div class="abs-footer">
        Feel free to copy the code for this website, https://github.com/MaeglynD/home-site.
        Icons made by

        <a
          href="https://www.flaticon.com/authors/dinosoftlabs"
          title="DinosoftLabs"
        >
          DinosoftLabs
        </a>

        from

        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          www.flaticon.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '@/assets/projects';
import misc from '@/assets/misc';

export default {
  name: 'Home',

  data() {
    return {
      ...misc,
      projects,
      sp: 0,
      wh: 10000,
      ww: 10000,
      scrollTimeout: null,
      scrollModels: [
        { el: '.second-container', name: 'about' },
        { el: '.third-container', name: 'work' },
        { el: '.fourth-container', offset: -100, name: 'contact' },
      ],
    };
  },

  created() {
    //
  },

  beforeMount() {
    this.handleResize();

    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    //
    handleScroll() {
      window.clearTimeout(this.scrollTimeout);

      this.scrollTimeout = setTimeout(() => {
        this.sp = window.scrollY;
      }, 10);
    },

    //
    handleResize() {
      this.wh = window.innerHeight;
      this.ww = window.innerWidth;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/home.scss';
</style>
