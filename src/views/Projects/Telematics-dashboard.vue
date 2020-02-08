<template>
  <div class="inner">
    <div class="p-date">September <span>2019</span></div>
    <div class="p-title">Telematics software ~ Dashboard</div>
    <div class="m-text">The pictures below pertain to in-browser
		fleet management software i worked on at a previous company.
		Graphs shown use a small sample of vehicles within a customers
		fleet, all customer information has been blurred out. Every
		setting shown is loaded from and stored in localstorage
		(content, size, position, filters, graph type, title etc).
		<div class="linebreak"></div>
		This dashboard allows clients to view their live data in
		their desired graphical visualisation. It's not glamorous,
		enterprise software usually isn't, but it does allow for
		full-customisation at every step the user takes. What
		data they see, how they see it, the rate at which said
		data is being refreshed (pause / unpause at will) and
		so on. A feature not shown below; users can click any
		portion of any graph to view that subsection of data
		in detail. Users are given an option to load this
		filtered data in any other service we provide.
	</div>
	<img src="../../assets/dashboard/dashboard.png" alt="dashboard">
	<img src="../../assets/dashboard/dashboard2.png" alt="dashboard">
	<video controls>
		<source src="../../assets/dashboard/dashboard.mp4" type="video/mp4">
	</video>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
@import '../../assets/projects';
</style>
