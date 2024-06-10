import { http, HttpResponse } from 'msw'

import {
  GetOderDetailsResponse,
  GetOrderDetailsParams,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '61 9999-9999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 6000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Pepperone' },
        quantity: 1,
      },
      {
        id: 'order-item-',
        priceInCents: 2000,
        product: { name: 'Pizza Marguerita' },
        quantity: 3,
      },
    ],
  })
})
