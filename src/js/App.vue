<template>
  <div id="app" class="app-layout">
		<div class="content">
			<div class="header">
				<div class="container">
					<router-link :to="{name: 'home'}"><img class="header__logo" src="img/logo.png" alt=""></router-link>

					<ul class="header__menu">
						<router-link tag="li" :to="{name: 'home'}" exact active-class="active"><a class="header__menu-link" href="">Home</a></router-link>
						<router-link tag="li" :to="{name: 'about'}" active-class="active"><a class="header__menu-link" href="">About us</a></router-link>
						<router-link tag="li" :to="{name: 'contactus'}" active-class="active"><a class="header__menu-link" href="">Contact Us</a></router-link>
					</ul>

					<div class="header__space"></div>
				</div>
			</div>

			<div class="main">
				<div class="container">
					<transition name="fade" appear mode="out-in">
						<router-view></router-view>
					</transition>
				</div>
			</div>
		</div>
		<div class="footer">
			© 2018
		</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
</style>
