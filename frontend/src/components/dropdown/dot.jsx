import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { EllipsisVertical } from "lucide-react";
import Share from "@/components/dialog/share";
import Edit from "@/components/dialog/edit";
import Delete from "@/components/dialog/delete";

const Dot = ({accessKey}) => {
  const [dialogType, setDialogType] = useState(null);
  console.log(accessKey)

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="cursor-pointer p-1">
            <EllipsisVertical />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => setDialogType("share")}
            className={"cursor-pointer"}
          >
            Share
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setDialogType("edit")}
            className={"cursor-pointer"}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setDialogType("delete")}
            className={"cursor-pointer"}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {dialogType === "share" && (
        <Share accessKey={accessKey} open={true} onOpenChange={() => setDialogType(null)} />
      )}
      {dialogType === "edit" && (
        <Edit open={true} onOpenChange={() => setDialogType(null)} />
      )}
      {dialogType === "delete" && (
        <Delete open={true} onOpenChange={() => setDialogType(null)} />
      )}
    </div> 
  );
};

export default Dot;
