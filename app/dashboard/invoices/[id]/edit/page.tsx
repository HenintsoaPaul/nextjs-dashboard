import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/edit-form";

export default async function Page({ params }: { params: { id: string } }) {
    const id: string = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers()
    ]);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    { label: 'Update Invoice', href: `/dashboard/invoices/${id}/edit`, active: true }
                ]}
            />
            <Form invoice={invoice} customers={customers} />
        </main>
    );
}