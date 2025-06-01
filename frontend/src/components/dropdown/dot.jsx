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
import { Copy , Check } from "lucide-react";
import { useFlower } from "@/contexts/flower-context.jsx";

const Dot = ({ accessKey, link, id }) => {
    const { deleteFlower, updateFlower } = useFlower();
    const [dialogType, setDialogType] = useState(null);
    const [editMessage, setEditMessage] = useState("");
    const [copiedAccessKey, setCopiedAccessKey] = useState(false);
    const [copiedLink, setCopiedLink] = useState(false);

    const handleEditSubmit = (e) => {
      e.preventDefault();
      setDialogType(null);
    };

    const handleCopyAccessKey = async () => {
      await navigator.clipboard.writeText(accessKey || "");
      setCopiedAccessKey(true);
      setTimeout(() => setCopiedAccessKey(false), 2000);
    };

    const handleCopyLink = async () => {
      await navigator.clipboard.writeText(link);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    };

    console.log(id)

  
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
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Share Your Rose 
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Share the link and provide the access key to your special someone.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-6">
                  {/* Access Key Section */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      Access Key
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                          id="accessKey"
                          defaultValue={accessKey || "No access key"}
                          readOnly
                          className="bg-gray-50 border-gray-200 font-mono text-sm"
                      />
                      <Button
                          variant="outline"
                          size="sm"
                          className={`min-w-[80px] transition-all duration-200 ${
                              copiedAccessKey
                                  ? 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100'
                                  : 'hover:bg-gray-50'
                          }`}
                          onClick={handleCopyAccessKey}
                      >
                        {copiedAccessKey ? (
                            <>
                              <Check className="w-4 h-4 mr-1" />
                              Copied!
                            </>
                        ) : (
                            <>
                              <Copy className="w-4 h-4 mr-1" />
                              Copy
                            </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Link Section */}
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      Share Link
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                          id="link"
                          defaultValue={link}
                          readOnly
                          className="bg-gray-50 border-gray-200 font-mono text-sm"
                      />
                      <Button
                          variant="outline"
                          size="sm"
                          className={`min-w-[80px] transition-all duration-200 ${
                              copiedLink
                                  ? 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100'
                                  : 'hover:bg-gray-50'
                          }`}
                          onClick={handleCopyLink}
                      >
                        {copiedLink ? (
                            <>
                              <Check className="w-4 h-4 mr-1" />
                              Copied!
                            </>
                        ) : (
                            <>
                              <Copy className="w-4 h-4 mr-1" />
                              Copy
                            </>
                        )}
                      </Button>
                    </div>
                  </div>

                  
                </div>

                <DialogFooter className="mt-6">
                  <DialogClose asChild>
                  </DialogClose>
                </DialogFooter>
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
                    <Button
                        type="submit"
                        className="cursor-pointer bg-gradient-to-bl from-fuchsia-600 to-purple-600 text-white"
                        onClick={async () => {
                          await updateFlower({
                            flower_id: id,
                            message: editMessage,
                          });
                          window.location.reload()
                        }}
                    >
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
                      className={"cursor-pointer bg-gradient-to-bl from-fuchsia-600 to-purple-600 text-white"}
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