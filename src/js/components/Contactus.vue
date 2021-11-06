<template>
	<div>
		<div class="about">
			Contact Us
			<br>
			<br>
			<form class="" action="index.html" method="post" class="form">

				<div class="form-group">
					<label for="">Title</label>
					<input type="text" name="" value="">
					<div class="help-block"></div>
					<div class="error-block"></div>
				</div>

				<div class="form-group form-group-text" :class="{'has-error': toomany}">
					<label for="">Form body <span :class="{'red': toomany}">{{ signs }}</span></label>
					<textarea name="name" rows="8" placeholder="Try to type more than 140 symbols" @keyup="counter($event)"></textarea>
					<div class="help-block"></div>
					<div class="error-block">This input is like a twitter, dude! 140 signs max.</div>
				</div>

				<button class="btn" type="button" name="button">Send</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				signs: 0,
				toomany: false
			}
		},
		methods: {
			counter(event) {
				this.signs = event.target.value.length;

				if (this.signs > 140) {
					this.toomany = true;
				} else {
					this.toomany = false;
				}
			}
		}
	};
</script>

<style>

</style>
