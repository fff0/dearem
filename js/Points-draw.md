## Point-draw 项目开发

**域名**

> https://mall-app.sogrumpy.cn/app/api
>
> {
> 	"code": 0,
> 	"data": {},
> 	"msg": "string",
> 	"requestId": "string"
> }

**接口（POST）**

-  /v1/marketing/JiFenDuoBao/GetIndexProduct
  抽奖首页商品
-  /v1/marketing/JiFenDuoBao/GetMyAct
  我的抽奖
-  /v1/marketing/JiFenDuoBao/JiFenChou
  积分抽
-  /v1/marketing/JiFenDuoBao/JiFenChouDetail
  积分抽详情页
-  /v1/marketing/JiFenDuoBao/LingYuanChou
  零元抽
-  /v1/marketing/JiFenDuoBao/LingYuanChouDetail
  零元抽详情页
-  /v1/marketing/JiFenDuoBao/LingYuanChouExchange
  零元抽兑换
-  /v1/marketing/JiFenDuoBao/LingYuanChouShare
  零元抽分享
-  /v1/marketing/JiFenDuoBao/UpdateAddr
  中奖后填写地址

**Code**

| 201  | Created      |      |      |
| ---- | ------------ | ---- | ---- |
| 401  | Unauthorized |      |      |
| 403  | Forbidden    |      |      |
| 404  | Not Found    |      |      |