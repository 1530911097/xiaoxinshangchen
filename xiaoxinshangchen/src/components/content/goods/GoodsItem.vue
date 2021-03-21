<template>
	<div class="goods-item" @click="imgClick">
		<img v-lazy="showImage" @load="imageLoad" />
		<div class="goods-u-info">
			<div class="goods-title">{{goodsItem.title}}</div>
			<div class="goods-pc">
				<span class="goods-price">{{goodsItem.price}}</span>
				<span class="goods-p">&nbsp &nbsp &nbsp</span>
				<span class="goods-cfav">{{goodsItem.cfav}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'GoodsItem',
		props: {
			goodsItem: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		computed: {
			showImage() {
				return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
			}
		},
		methods: {
			/* 这里的bus一定要在mian里面去实例化一个$bus*/
			imageLoad() {
					this.$bus.$emit('itemImageLoad')
			},
			imgClick() {
				this.$router.push('/detail/' + this.goodsItem.iid)
			}

		}

	}
</script>

<style scoped>
	.goods-item {
		width: 48%;
		justify-content: center;
		display: wrap;
	}

	.goods-item img {
		height: 85%;
		width: 100%;
		border-radius: 5px;
	}

	.goods-title {
		margin-top: 5px;
		text-align: center;
		width: 100%;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.goods-pc {
		margin-bottom: 5px;
		text-align: center;
	}

	.goods-price {
		color: deeppink;
	}

	.goods-p {
		background-size: 20px;
		background-position-x: 1px;
		background-position-y: -2px;
		background-image: url(../../../assets/img/detail/detail_bottom.png);
	}

	.goods-cfav {
		margin-left: 5px;
	}
</style>
