
const a =
{
  totalprice:"", 여기만 변수선언 
  orderitems:[
    {
      productOptionId:"[0].productoptionID",
      quantity:"[0].quantity"
    },
    {
      productOptionId:"",
      quantity:""
    },
    {
      productOptionId:"",
      quantity:""
    }
  ]
}
a=cartlist.map(el=>{sadsadsadsadasdas}})

const a = checklist//이거 set에 있는 선택된 체크 리스트 
var totalprice,orderitems[0],orderitems[1] ;
[0,1,2]=[]




const [productOptionId,price]
cartList.map(el => {el.productOptionId
el.quntity})
body: json.stringify({
  totalPrice:`${totalPrice}`,
  orderItems:[{
    productOptionId:`${[orderId]}`
    quantity:`${cartList.quantity}`
  }]

  const productOptionId = cartList.map(el=>{
    return el = el.productOptionId
  })

  const quntity = cartList.map(el => {
    return el = el.quntity
  })
  
  body:JSON.stringify({totalPrice:`${totalPrice},`
  orderItems:[{
    productOptionId:
    quantity:
  },
  {
    productOptionId:,
    quantity:
  },

]
    
  })

totalprice = a.totalprice
orderitems = a.orderitems
productOptionId = a.orderitems[0].productOptionId
quantity = a.orderitems[0].quantity 

const goToOrderList = () => {
    const orderId = "";
    for ( key in cartList){
      orderId=(cartList[key].productOptionId);
    }
    fetch('http://127.0.0.1:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxMiwiaWF0IjoxNjY5MDI2ODA5LCJleHAiOjE2NzE2MTg4MDksImlzcyI6ImFkbWluIiwic3ViIjoiYWNjZXNzVG9rZW4ifQ.DhfgeERBkf4s7uin2NCCSLX2tFNcWXRs-vgMvY4InJs',
      },
      body: json.stringify({
        totalPrice:`${totalPrice}`,
        orderItems:[{
          productOptionId:`${[orderId]}`
          quantity:`${cartList.quantity}`
        }]

      })
    })
      .then(response => response.json())
      .then(result => setCartList(result));
    navigate(/'/payment')
  }

//배열안에 객체구조 분해 할당

var c = [adasd:asdsa,
  {asdsad:asdas,
  []}]


