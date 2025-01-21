import PaymentCard from "@/components/PaymentCard";
import style from '@/app/dashboard/style.module.css'
import BreadCrumb from "@/components/BreadCrumb";

const Payments = () => {
    return (
        <main className={`flex min-h-screen flex-col ${style.container}`}>
            <BreadCrumb navigationText={`Payments`} includeNavigate={true} />
            <div className="m-8 mb-2 text-gray font-medium" >
                Card
            </div>
            <PaymentCard upiName="Punjab National Bank" upiDetail="Card Number" upiNumber="**** 1234" icon="/Visa.png" />
            <PaymentCard upiName="Punjab National Bank" upiDetail="Card Number" upiNumber="**** 1234" icon="/Visa.png" />
        </main>
    )

}
export default Payments;

