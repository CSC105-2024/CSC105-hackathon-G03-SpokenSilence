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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Create = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={
              "cursor-pointer bg-gradient-to-bl from-fuchsia-600 to-purple-600 text-white px-6 rounded-2xl hover:text-white "
            }
          >
            Create
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create you Card</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Choose Your Flower:</Label>
              <Input placeholder="Type your message here." />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Your Message:</Label>
              <Textarea placeholder="Type your message here." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className={"cursor-pointer"}>
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" className={"cursor-pointer"}>
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default Create;
