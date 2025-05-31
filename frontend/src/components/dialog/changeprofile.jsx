import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useRef, useState } from "react";

const Changeprofile = ({ open, onOpenChange }) => {
  const fileInputRef = useRef(null);
  const [profileUrl, setProfileUrl] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "photo_trade");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcpgrfpaf/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const fileUrl = await res.json();
    setProfileUrl(fileUrl.url);
  };

  const handleSave = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Change Profile Picture</DialogTitle>
          <DialogDescription>Upload a new profile picture</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4 py-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={profileUrl} alt="Profile preview" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <Button
            variant="outline"
            className="border-gray-300 dark:border-gray-600 dark:text-white"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            type="button"
          >
            {profileUrl ? "Change Picture" : "Upload Picture"}
          </Button>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className={"cursor-pointer"}>
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={handleSave}
            className={
              "bg-gradient-to-bl from-fuchsia-600 to-purple-600 cursor-pointer"
            }
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Changeprofile;
