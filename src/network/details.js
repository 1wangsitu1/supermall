import {
  request
} from './request'
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.lowPrice = itemInfo.lowPrice
    this.oldPrice = itemInfo.oldPrice;;
    this.discount = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods

  }

}

export class GoodParam {
  constructor(info, rule) {
    //image可能有值可能没值
    this.img = info.images ? info.images[0] : '';
    this.info = info.set;
    this.sizes = rule.tables;
  }
}
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}
