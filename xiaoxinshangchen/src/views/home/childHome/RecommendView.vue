<template>
	<div id="recommen-view">
		<div id="recommen-view-item" v-for="(item,index) in recommend" :key="index">
			<a :href="item.link">
				<img :src="item.image" @load="imgLoad2" />
				<span class="recommen-view-item-w">{{item.title}}</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RecommendView',
		props: {
			recommend: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			imgLoad2() {
				this.$emit('recommendImgLoad')
			}
		}
	}
</script>

<style scoped>
	#recommen-view {
		display: flex;
	}

	#recommen-view-item {
		text-align: center;
		flex: 1;
		border-bottom: 10px solid #E0E0E0;
	}

	#recommen-view img {
		padding: 5px;
		width: 100%;
	}

	.recommen-view-item-w {
		display: block;
		font-size: 12px;
		margin-bottom: 10px;
	}
</style>
