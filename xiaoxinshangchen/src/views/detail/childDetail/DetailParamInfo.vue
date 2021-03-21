<template>
	<div id="param-info" v-if="Object.keys(paramss).length !== 0">
			<table v-for="(table,index) in paramss.tables">
				<tr  v-for="(tr,index) in table">
					<td v-for="td in tr"> {{td}}</td>
				</tr>
			</table>
			<table class="info-param" v-for="(table,index) in paramss.set">
				<td class="info-param-key"> {{table.key}}</td>
				<td class="param-value"> {{table.value}}</td>
				</tr>
			</table>；
	</div>
</template>

<script>
	export default {
		name: 'DetailParamInfo',
		props: {
			paramss: {
				type: Object,
				default () {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	#param-info {
    border-bottom: 5px solid #F7F7F7;
	  padding: 20px 15px;
	  font-size: 14px;
	  
	}
	
	#param-info table {
	  width: 100%;
	  border-collapse: collapse;
	}
	
	#param-info tr {
	  height: 42px;
	}
	
	#param-info table tr td {
	  border-bottom: 1px solid rgba(100,100,100,.1);
	}
	
	.info-param-key {
     padding: 20px 0px;
	  width: 95px;
	}
	
	.info-param {
	  border-top: 1px solid rgba(0,0,0,.1);
	}
	
	.param-value {
	  color: #eb4868
	}
	

</style>
