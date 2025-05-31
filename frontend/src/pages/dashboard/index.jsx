import { DashboardMo } from '@/components/modules/index.js';
import { FlowerProvider } from "@/contexts/flower-context.jsx";

const Dashboard = () => {
    return (
        <FlowerProvider>
            <DashboardMo />
        </FlowerProvider>
    )
}
export default Dashboard;