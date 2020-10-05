<template>
  <div class="main-project-container">
    <div class="fixed-nav">
      <div class="fix-inner">
        <router-link to="/">
			<span class="logo">maeglyn<span class="yl">.com</span></span>
		</router-link>
        <div class="nav-right">
			<router-link to="/projects">
				<span>All projects</span>
			</router-link>
        </div>
      </div>
    </div>
	<!-- Anti-pattern? yea probably, sue me -->
	<transition name="component-fade" mode="out-in">
		<div v-if="$route.matched.length == 1" class="abs-container">
			<div v-for="(x, i) in projects" :key="i">
				<router-link :to="`/projects/${x.title.replace(/ /g, '-')}`">
					<div class="p-date">{{ x.date }}</div>
					<div class="p-title">{{ x.title }}</div>
				</router-link>
			</div>
		</div>
	</transition>
    <transition name="component-fade" mode="out-in">
		<router-view/>
	</transition>
  </div>
</template>

<script>
import projects from '../../assets/Projects';

export default {
	data() {
		return {
			projects: projects.sort((a, b) => Date.parse(a) - Date.parse(b)),
		};
	},
};
</script>

<style scoped lang="scss">
@import '../../assets/projects';
</style>
