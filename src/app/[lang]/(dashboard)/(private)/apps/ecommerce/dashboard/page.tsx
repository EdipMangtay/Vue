// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import CongratulationsJohn from '@views/apps/ecommerce/dashboard/Congratulations'
import StatisticsCard from '@views/apps/ecommerce/dashboard/StatisticsCard'
import LineChartProfit from '@views/apps/ecommerce/dashboard/LineChartProfit'
import RadialBarChart from '@views/apps/ecommerce/dashboard/RadialBarChart'
import DonutChartGeneratedLeads from '@views/apps/ecommerce/dashboard/DonutChartGeneratedLeads'
import RevenueReport from '@views/apps/ecommerce/dashboard/RevenueReport'
import EarningReports from '@views/apps/ecommerce/dashboard/EarningReports'
import PopularProducts from '@views/apps/ecommerce/dashboard/PopularProducts'
import Orders from '@views/apps/ecommerce/dashboard/Orders'
import Transactions from '@views/apps/ecommerce/dashboard/Transactions'
import InvoiceListTable from '@views/apps/ecommerce/dashboard/InvoiceListTable'

// Data Imports
import { getInvoiceData } from '@/app/server/actions'

const EcommerceDashboard = async () => {
  // Vars
  const invoiceData = await getInvoiceData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <CongratulationsJohn />
      </Grid>
      <Grid item xs={12} md={8}>
        <StatisticsCard />
      </Grid>
      <Grid item xs={12} xl={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <LineChartProfit />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <RadialBarChart />
          </Grid>
          <Grid item xs={12} md={6} xl={12}>
            <DonutChartGeneratedLeads />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} xl={8}>
        <RevenueReport />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <EarningReports />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <PopularProducts />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Orders />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Transactions />
      </Grid>
      <Grid item xs={12} lg={8}>
        <InvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default EcommerceDashboard
