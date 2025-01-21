import BreadCrumb from "@/components/BreadCrumb";
import style from "./style.module.css";
import Ticket from "@/components/Ticket";
import ModifyBooking from "@/components/ModifyBooking";
import PaymentForm from "@/components/PaymentForm";

export default function TokenTracking() {
    let currentPage = "Payment";
    return (
        <main className={`${style.tokenTrackingContainer}`}>
            {
                currentPage === "Token Tracking" &&
                <>
                    <BreadCrumb navigationText={`Token Tracking`} includeNavigate={false} navIcon={'./cloud.svg'} />
                    <div className={`relative ${style.homeContainer}`}>
                        <div className="flex items-center justify-center">
                            <Ticket />
                        </div>
                    </div>
                </>
            }
            {
                currentPage === "Modify Booking" &&
                <>
                    <BreadCrumb navigationText={`Modify Booking`} includeNavigate={true} navIcon={'./refresh.svg'} />
                    <div className={`relative ${style.homeContainer}`}>
                        <div className="p-4">
                            <ModifyBooking />
                        </div>
                    </div>
                </>
            }
            {
                currentPage === "Payment" &&
                <>
                    <BreadCrumb navigationText={`Select Payment`} includeNavigate={true} navIcon={'./refresh.svg'} />
                    <div className={`relative ${style.homeContainer}`}>
                        <div className="p-4">
                            <PaymentForm />
                        </div>
                    </div>
                </>
            }
        </main>
    );
}
