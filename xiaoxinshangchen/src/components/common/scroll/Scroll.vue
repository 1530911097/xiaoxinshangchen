<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot name="scroll"></slot>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'Scroll',
		props: {
			probeType: {
				type: Number,
				default: 0,
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				scroll: null
			}
		},
		mounted() {
			//1.创建Bscroll对象
			this.scroll = new BScroll(this.$refs.wrapper, {
				click: true,
				//probeType:3,因为不能写死
				probeType: this.probeType, //为了防止谁都可以实时监听 
				pullUpLoad: this.pullUpLoad,

			})

			//2.监听滚动得位置
		if (this.probeType ==2 || this.probeType ==3){
		  this.scroll.on('scroll',(position) => {
		    this.$emit('scroll',position)
		  })
		} /* 自定义事件,传出一个positon发射一个scroll方法 */
			//3.上拉加载更多
			if (this.pullUpLoad) {
				this.scroll.on('pullingUp', () => {
					this.$emit('pullingUp')
				})
			}
		},
		methods: { //这里通过点击回0
			scrollTo(x, y, time = 300) {
				this.scroll && this.scroll.scrollTo(x, y, time)
			},
			finishPullUp() {
				this.scroll && this.scroll.finishPullUp()
			},
			refresh() { //这个是刷新的触发,解决图片还没加载完,就是计算的bug
				this.scroll && this.scroll.refresh()
				console.log('a')
			}
		}

	}
</script>

<style scoped>

</style>
