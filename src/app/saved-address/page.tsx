import style from '@/app/dashboard/style.module.css'
import BreadCrumb from '@/components/BreadCrumb';
import AddressCard from '@/components/SaveAddressCard';


const SavedAddress = () => {
    return (
        <main className={`flex min-h-screen flex-col ${style.container}`}>
            <BreadCrumb navigationText={`Saved Address`}  includeNavigate={true}/>
            <div className="m-8 mb-2 text-gray font-medium" >Default</div>
            <AddressCard title='Home' subTitle='A-104, Block K23, Street 123 | Jaipur - 302017' icon={"/profile.png"}/>
            <AddressCard title='Home' subTitle='A-104, Block K23, Street 123 | Jaipur - 302017' icon={"/profile.png"}/>
        </main>
    )
}
export default SavedAddress;