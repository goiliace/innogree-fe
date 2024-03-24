import DualLayout from '~/layouts/DualLayout';
import UserInfoCard from '~/components/UserInfoCard';
import PatientStatusDash from '~/components/PatientStatusDash';
const PatientDashboard = () => {
    return (
        <DualLayout
            childrenA={<PatientStatusDash />}
            childrenB={<UserInfoCard />}
        />
    )
}
export default PatientDashboard;