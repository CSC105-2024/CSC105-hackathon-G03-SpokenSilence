import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Choseflower = ({ value, onValueChange, ...props }) => {
    return (
        <Select value={value} onValueChange={onValueChange} {...props}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select you flower" />
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