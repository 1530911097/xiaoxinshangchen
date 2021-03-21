import {
	request
} from './request.js'; /* 导入方法 */
export function getDetail(iid) { /* 导出方法*/
	return request({
		url: '/detail',
		params: {
			iid
		},
	})
}
export class GoodsItem{
	constructor(itemInfo,columns,services) {
	    this.title=itemInfo.title
		this.price=itemInfo.lowNowPrice
		this.oldPrice=itemInfo.oldPrice
		this.discountDesc=itemInfo.discountDesc
		this.columns=columns;
		this.services = services;
	}
}

export class Shop{
	 constructor(shopInfo){
		 this.name=shopInfo.name
		 this.score=shopInfo.score
		 this.shopLogo=shopInfo.shopLogo
		 this.cGoods=shopInfo.cGoods
		 this.cSells=shopInfo.cSells
	 }
}

export class GoodInfo{
	constructor(detailInfo,skuInfo){
		this.desc=detailInfo.desc
		this.detailImage=detailInfo.detailImage
		this.sku=skuInfo.skus
	}
}

export class paramss{
	constructor(itemParams){
		this.set=itemParams.info.set
		this.tables=itemParams.rule.tables
	
	}
}
export function recommend(){
	return request({
		url:'/recommend'
		
	})
}