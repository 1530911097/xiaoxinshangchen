import {request} from './request.js';

export function getHomeMultidata(){                  /* 导入网络请求方法 */
	return request({                                 //请求
		url:'/home/multidata'                                   
	})
} 

export function getGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
