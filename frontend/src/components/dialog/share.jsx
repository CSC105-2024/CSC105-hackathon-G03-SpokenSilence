import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
const Share = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share You Rose</DialogTitle>
          <DialogDescription>
            Share the link and provide the access key to your special.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            Access key:
            <div className="flex">
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
              <Button
                variant="outline"
                className="ml-2"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://ui.shadcn.com/docs/installation"
                  );
                }}
              >
                <Copy />
              </Button>
            </div>
            Link:
            <div className="flex">
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
              <Button
                variant="outline"
                className="ml-2"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "https://ui.shadcn.com/docs/installation"
                  );
                }}
              >
                <Copy />
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Share;
