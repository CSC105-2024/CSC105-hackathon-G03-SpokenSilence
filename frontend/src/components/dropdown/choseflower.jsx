import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Choseflower = () => {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Rose" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Rose">Rose</SelectItem>
                <SelectItem value="Peony">Peony</SelectItem>
                <SelectItem value="Daffodil">Daffodil</SelectItem>
                <SelectItem value="Daisy">Daisy</SelectItem>
                <SelectItem value="Camellia">Camellia</SelectItem>
                <SelectItem value="Chrysanthemum">Chrysanthemum</SelectItem>
                <SelectItem value="jasmine">jasmine</SelectItem>
                <SelectItem value="Hydrangea">Hydrangea</SelectItem>
                <SelectItem value="Sweet Pea">Sweet Pea</SelectItem>
                <SelectItem value="Lily">Lily</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default Choseflower;