import React, { Component } from 'react'
import './OrderList.css'
import OrderItem from '../OrderItem'

class OrderList extends Component {
  render() {
    const data = [
      {
        id: 1,
        shop: '香蕉',
        picture:
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3932229109,1905286699&fm=26&gp=0.jpg',
        product: '2元/500g',
        price: 9.9,
        ifCommented: true,
      },
      {
        id: 2,
        shop: '苹果',
        picture:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607084247440&di=d2cce9280ace304b051838cb50851737&imgtype=0&src=http%3A%2F%2Ftu.ossfiles.cn%3A9186%2Fgroup1%2FM00%2F04%2F25%2FrBgIBlw_1G3gVLr0AACNaTcO5Ew776.jpg',
        product: '10元/500g',
        price: 20,
        ifCommented: false,
      },
      {
        id: 3,
        shop: '榴莲',
        picture:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607084369242&di=b583341adc16476a5d3f1b87fda9a1cf&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170317%2Ff376eea35a9541bb88ebfb62ba019702_th.jpg',
        product: '100元/500g',
        price: 99,
        ifCommented: false,
      },
      {
        id: 4,
        shop: '车厘子',
        picture:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607084555425&di=d5747a04a365ae0ec1fe3a3a4cd361f2&imgtype=0&src=http%3A%2F%2Fimg2.99114.com%2Fgroup1%2FM00%2FA7%2FE4%2FwKgGMFjTO_aATqB3AAUilm-7N1I135_600_600.jpg',
        product: '200元/500g',
        price: 166,
        ifCommented: true,
      },
    ]
    return (
      <div>
        {data.map((item) => {
          return <OrderItem key={item.id} data={item} />
        })}
      </div>
    )
  }
}

export default OrderList
