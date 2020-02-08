<template>
  <div id="app">
		<transition name="component-fade" mode="out-in">
			<router-view/>
		</transition>
  </div>
</template>

<style lang="scss">
@import '/assets/global';
</style>
