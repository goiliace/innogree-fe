import DualLayout from '~/layouts/DualLayout';
import { UserInfoCard } from '~/components/UserInfoCard';
// import PatientStatusDash from '~/components/PatientStatusDash';
import PatientHome from '~/components/PatientHome';


const PatientDashboard = () => {

    return (
        <DualLayout
            childrenA={<PatientHome />}
            childrenB={<UserInfoCard />}
        />
    )
}
export default PatientDashboard;