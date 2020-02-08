<template>
  <div class="main-container">
    <div class="bg-container">
      <div class="gradient"></div>
      <div class="bg"></div>
    </div>
    <div :class="{'fixed-nav': true, isFixed: sp > (wh - 90), isInvis: sp > 70}">
      <div class="fix-inner">
		<router-link to="/">
			<span class="logo">maeglyn<span class="yl">.com</span></span>
		</router-link>
        <div class="nav-right">
          <span v-scroll-to="'.second-container'">about</span>
          <span v-scroll-to="'.third-container'">work</span>
          <span v-scroll-to="{el: '.fourth-container', offset: -100}">contact</span>
        </div>
      </div>
    </div>
    <div class="first-container">
      <div class="fit">
        <div class="hi">
          <div>Hi, i'm maeglyn</div>
          <div class="yl">software dev & design</div>
        </div>
      </div>
    </div>
    <div class="second-container">
      <div class="fit">
        <div class="sm-head">about</div>
        <div class="sm-lg-head">Who am i?</div>
        <div class="m-text">I‘m a 20 yr old software dev based in the UK, commercially
            I‘m versed in writing software natively and in browser, both front and backend.
            I‘ve worked with large-scale live and historical data as well as created highly
            customizable analytics tools for users to view their data. Design is a side
            hobby of mine, customer-facing or not I take pride in making things look good
            (without expense to usablitiy).
        </div>
        <div class="flex-specs">
          <div class="f-container">
            <img src="../assets/laptop.png" alt="cube">
            <div class="top-row-container">
              <div class="a">Frontend</div>
              <div class="b">Design and frontend tech</div>
            </div>
            <ul>
              <li>• HTML</li>
              <li>• CSS / SASS / SCSS</li>
              <li>• Javascript (ES6+)</li>
              <li>• VueJS / Vuex / React</li>
              <li>• Vuetify</li>
              <li>• Flutter</li>
              <li>• Adobe (Ps / Ai / Pr)</li>
            </ul>
          </div>
          <div class="f-container">
            <img src="../assets/cube.png" alt="cube">
            <div class="top-row-container">
              <div class="a">Backend & General</div>
              <div class="b">MVC and application tech</div>
            </div>
            <ul>
              <li>• C# (.NET Core)</li>
              <li>• Python</li>
              <li>• Javascript (NodeJS, Websockets)</li>
              <li>• Typescript</li>
              <li>• SQL (MySQL, MySQLjs)</li>
              <li>• Git</li>
              <li>• MVC Integration (Flask, .NET Core, Node)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="third-container">
      <div>
        <div class="fit">
          <div class="sm-head">Work</div>
          <div class="sm-lg-head">Projects</div>
        </div>
        <div class="card-container">
			<carousel-3d :disable3d="ww <= 1024" :space="ww <= 1024 ? 380 : 320"
			:border="0" :width="408">
				<slide v-for="(x, i) in projects" :index="i" :key="i">
				<template slot-scope="{ isCurrent }">
					<div :class="{ 'card': true, 'current': isCurrent }">
						<div class="c-img"
						:style="{ backgroundImage: `url(${require(`@/assets${x.img}`)})`}"></div>
						<div class="c-buffer">
							<div class="c-tags">{{ x.tags }}</div>
							<div class="c-title">{{ x.title }}</div>
							<div class="c-desc m-text">{{ x.desc }}</div>
							<router-link :to="`/projects/${ x.title.replace(/ /g, '-') }`">
								<div class="m-btn">view</div>
							</router-link>
						</div>
					</div>
				</template>
				</slide>
			</carousel-3d>
        </div>
      </div>
    </div>
    <div class="fourth-container">
      <div class="fit">
        <div class="sm-head">social</div>
        <div class="sm-lg-head">Contact</div>
        <div class="c-flex">
          <a href="https://twitter.com/MaeglynDavies" target="_blank" class="c-item">
            <div class="a">Twitter</div>
            <div class="b">I dont use this</div>
            <div class="c-abs">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   version="1.1" width="36" height="36" viewBox="0 0 24 24" fill="#b88c4f">
                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,
                  6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,
                  5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,
                  8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,
                  7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,
                  10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,
                  12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,
                  14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,
                  18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,
                  19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,
                  8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,
                  6.87 22.46,6Z"/>
              </svg>
            </div>
          </a>
          <a href="mailto:maeglyn.davies@gmail.com" target="_blank" class="c-item">
            <div class="a">Email</div>
            <div class="b">maeglyn.davies@gmail.com</div>
            <div class="c-abs">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               version="1.1" width="36" height="36" viewBox="0 0 24 24" fill="#b88c4f">
               <path d="M22,6C22,4.9 21.1,4 20,4H4C2.9,4 2,4.9 2,
                  6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,
                  18V6M20,6L12,11L4,6H20M20,18H4V8L12,13L20,8V18Z"/>
              </svg>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/maeglyn-davies-a0b20517b/" target="_blank" class="c-item">
            <div class="a">LinkedIn</div>
            <div class="b">Business profile</div>
            <div class="c-abs">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               version="1.1" width="36" height="36" viewBox="0 0 24 24" fill="#b88c4f">
               <path d="M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,
                21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19M18.5,18.5V13.2C18.5,
                11.4 17.04,9.94 15.24,9.94C14.39,9.94 13.4,10.46 12.92,
                11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,
                12.17 14.31,12.17C15.08,12.17 15.71,12.8 15.71,13.57V18.5H18.5M6.88,8.56C7.81,
                8.56 8.56,7.81 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19C5.95,5.19 5.19,
                5.95 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div class="f-flex">
        <a href="https://twitter.com/MaeglynDavies" target="_blank">Twitter</a>
        <a href="https://edabit.com/user/KZpjBTFm49P6nburM" target="_blank">Edabit</a>
        <a href="https://github.com/MaeglynD" target="_blank">Github</a>
      </div>
      <div class="abs-footer">No rights reserved, if you wanna copy the code
        for this website go ahead github.com/maeglynD/maeglynD.github.io. Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import projects from '../assets/Projects';

export default {
	name: 'home',
	components: {
		Carousel3d,
		Slide,
	},
	data() {
		return {
			sp: 0,
			wh: 10000,
			ww: 10000,
			scrollTimeout: null,
			projects,
		};
	},
	created() {
		this.handleResize();
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('resize', this.handleResize);
	},
	methods: {
		handleScroll() {
			window.clearTimeout(this.scrollTimeout);
			this.scrollTimeout = setTimeout(() => {
				this.sp = window.scrollY;
			}, 10);
		},
		handleResize() {
			this.wh = window.innerHeight;
			this.ww = window.innerWidth;
		},
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.handleResize);
	},
};
</script>

<style scoped lang="scss">
@import '../assets/home';
</style>
