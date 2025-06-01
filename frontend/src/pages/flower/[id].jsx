import {ViewcardMo} from "@/components/modules/index.js";
import {useParams} from "react-router-dom";
import {Flower} from "lucide-react";
import {FlowerProvider} from "@/contexts/flower-context.jsx";
const Index = () => {
    const {id} = useParams();
    const newId = Number(id);
    return (
        <>
            <FlowerProvider>
                <ViewcardMo id={newId} />
            </FlowerProvider>
        </>
    )
}
export default Index;