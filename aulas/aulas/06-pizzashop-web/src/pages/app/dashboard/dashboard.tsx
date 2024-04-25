import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amoun-cardt'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularProducrsChart } from './popular-products-charts'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="dashboard" />
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProducrsChart />
      </div>
    </>
  )
}
