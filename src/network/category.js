import {request} from './request.js'

export function getCetegory(){
	return request({
		url:'/category'
	})
}
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}