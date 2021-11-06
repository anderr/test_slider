<template>
	<div>
		<div class="article">
			<div class="article__id">
				#{{ id }}
			</div>

			<div class="article__content">
				<div class="article__img">
					<img :src="kittenImg" alt="">

					<div class="article__img-border"></div>
				</div>

				<div class="article__text">
					<div class="article__title">Lorem</div>

					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quibusdam voluptas magnam assumenda pariatur nemo dolorem reiciendis omnis consequatur sequi deserunt quasi, ipsam earum deleniti, quae nisi sit expedita unde!
				</div>
			</div>

			<router-link tag="a" to="/" class="article__return">
				To Main page
			</router-link>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				id: this.$route.params.id,
				kittenImg: this.$store.state.kittenImg,
			}
		},
		methods: {
			// getTiles() {
			// 	axios.get('/api/tiles')
			// 		.then((response) => {
			// 			if (response.data.success) {
			// 				this.tiles = response.data.tiles;
			//
			// 				this.tiles.forEach((item) => {
			// 					if (item.id == this.id) {
			// 						this.tile = item;
			// 					}
			// 				})
			// 			} else {
			// 				this.nodata = true;
			// 			}
			// 		});
			// }
		}
	}
</script>

<style>

</style>
