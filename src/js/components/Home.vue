<template>
	<div>
		<div class="container">
			<div class="owl-carousel carousel">
				<router-link 	tag="div"
					class="carousel__tile"
					v-for="(item, index) in 10"
					:to="'/article/' + index"
					:key="index">

					<div class="carousel__img">
						<div class="carousel__id">{{ index }}</div>
						<img :src="kittenImg" alt="">
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				kittenImg: this.$store.state.kittenImg
			}
		},
		mounted() {
			$('.owl-carousel').owlCarousel({
				nav: true,
				responsive:{
						300: {
								items:1
						},
						800:{
								items:2
						},
						1000:{
								items:3
						},
						2000:{
								items:6
						}
				}
			});
		}
	}
</script>

<style>

</style>
