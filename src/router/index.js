import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home.vue'
import Discounts from '@/views/Discounts/Discounts.vue'
import Entertainment from '@/views/Entertainment/Entertainment.vue'
import NotFound from '@/views/NotFound/NotFound.vue'
import AboutUs from '@/views/AboutUs/AboutUs.vue'
import App from '@/views/App/App.vue'
import FishingGame from '@/views/FishingGame/FishingGame.vue'
import XingPowerCompetition from '@/views/XingPowerCompetition/XingPowerCompetition.vue'
import ChessAndCardGame from '@/views/ChessAndCardGame/ChessAndCardGame.vue'
import XingfaSports from '@/views/XingfaSports/XingfaSports.vue'
import LiveEntertainment from '@/views/LiveEntertainment/LiveEntertainment.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/discounts',
		name: 'Discounts',
		component: Discounts
	},
	{
		path: '/entertainment',
		name: 'Entertainment',
		component: Entertainment
	},
	{
		path: '/about-us',
		name: 'AboutUs',
		component: AboutUs
	},
	{
		path: '/app',
		name: 'App',
		component: App
	},
	{
		path: '/fishing-game',
		name: 'FishingGame',
		component: FishingGame
	},
	{
		path: '/xing-power-competition',
		name: 'XingPowerCompetition',
		component: XingPowerCompetition
	},
	{
		path: '/chess-and-card-game',
		name: 'ChessAndCardGame',
		component: ChessAndCardGame
	},
	{
		path: '/xing-fa-sports',
		name: 'XingfaSports',
		component: XingfaSports
	},
	{
		path: '/live-entertainment',
		name: 'LiveEntertainment',
		component: LiveEntertainment
	},
	{
		path: '*',
		name: 'NotFound',
		component: NotFound 
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
