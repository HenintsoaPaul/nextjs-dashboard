import { lusitana } from "../ui/fonts";
import { Card } from "../ui/dashboard/cards";
import { fetchLatestInvoices, fetchRevenue, fetchCardData } from "../lib/data";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices,
      } = await fetchCardData();

    return (<main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="collected" type="collected" value={totalPaidInvoices} />
            <Card title="pending" type="pending" value={totalPendingInvoices} />
            <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
            <Card title="Total Customers" value={numberOfCustomers} type="customers" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <RevenueChart revenue={revenue}  />
            <LatestInvoices latestInvoices={latestInvoices} />
        </div>
    </main>);
}