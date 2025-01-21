
import style from '@/app/dashboard/style.module.css'
import BreadCrumb from '@/components/BreadCrumb';
import InvoiceCard from '@/components/InvoiceCard'

const BookingHistory = () => {
    return (
        <main className={`flex min-h-screen flex-col ${style.container}`}>
            <BreadCrumb navigationText={`Booking History`} includeNavigate={true} />
            <InvoiceCard name="John Sumit" dateTime="Mon 18 Sep | 15:30" icon="/profile.svg" />
        </main>
    )
}

export default BookingHistory;