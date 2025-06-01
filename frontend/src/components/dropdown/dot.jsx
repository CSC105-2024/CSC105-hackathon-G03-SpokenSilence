import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Choseflower from "../dropdown/choseflower";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { EllipsisVertical } from "lucide-react";
import { Copy } from "lucide-react";
import { useFlower } from "@/contexts/flower-context.jsx";

const Dot = ({ accessKey, link, id }) => {
  const { deleteFlower, updateFlower } = useFlower();
  const [dialogType, setDialogType] = useState(null);

  const [editMessage, setEditMessage] = useState("");
  const [editFlowerId, setEditFlowerId] = useState(null);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setDialogType(null);
  };

    
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
                onClick={() => {
                  setEditFlowerId(id);
                  setEditMessage("");
                  setDialogType("edit");
                }}
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
            <Dialog
                open={true}
                onOpenChange={() => setDialogType(null)}
                key="share-dialog"
            >
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share Your Rose</DialogTitle>
                  <DialogDescription>
                    Share the link and provide the access key to your special.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                  <div className="grid flex-1 gap-2">
                    Access key:
                    <div className="flex">
                      <Input
                          id="accessKey"
                          defaultValue={accessKey || "No access key"}
                          readOnly
                      />
                      <Button
                          variant="outline"
                          className="ml-2"
                          onClick={() => {
                            navigator.clipboard.writeText(accessKey || "");
                          }}
                      >
                        <Copy />
                      </Button>
                    </div>
                    Link:
                    <div className="flex">
                      <Input id="link" defaultValue={link} readOnly />
                      <Button
                          variant="outline"
                          className="ml-2"
                          onClick={() => {
                            navigator.clipboard.writeText(link);
                          }}
                      >
                        <Copy />
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
        )}

        {dialogType === "edit" && (
            <Dialog
                open={true}
                onOpenChange={() => setDialogType(null)}
                key="edit-dialog"
            >
              <form onSubmit={handleEditSubmit}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit your Card</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="flower-select">Choose your Flower:</Label>
                      <Choseflower
                          id="flower-select"
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="message-textarea">Your Message:</Label>
                      <Textarea
                          id="message-textarea"
                          placeholder="Type your message here."
                          value={editMessage}
                          onChange={(e) => setEditMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline" type="button" className={"cursor-pointer"}>
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit" className={"cursor-pointer"} onClick={() => u}>
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
        )}

        {dialogType === "delete" && (
            <AlertDialog
                open={true}
                onOpenChange={() => setDialogType(null)}
                key="delete-dialog"
            >
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    card.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                      className={"cursor-pointer"}
                      onClick={() => setDialogType(null)}
                  >
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                      className={"cursor-pointer"}
                      onClick={() => {
                        deleteFlower({ id });
                        setDialogType(null);
                      }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        )}
      </div>
  );
};

export default Dot;