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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFlower } from "@/contexts/flower-context.jsx";
import { useState } from "react";

const Create = () => {
  const { createFlower, loading } = useFlower();
  const [flower, setFlower] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const generateAccessKey = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const newAccessKey = generateAccessKey();
    const roseId = crypto.randomUUID();
    const shareUrl = `${window.location.origin}/rose/${roseId}`;

    setAccessKey(newAccessKey);
    setShareUrl(shareUrl);

    await createFlower({
      name: flower,
      message,
      url_flower: "ddddlll",
      access_key: newAccessKey,
      url: shareUrl
    });

    if (createFlower.ok) setOpen(false);
  };

  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <form>
          <DialogTrigger asChild>
            <Button
                variant="outline"
                className="cursor-pointer bg-gradient-to-bl from-fuchsia-600 to-purple-600 text-white px-6 rounded-2xl hover:text-white"
            >
              Create
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create your Card</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Choose Your Flower:</Label>
                <Select value={flower} onValueChange={setFlower}>
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
              </div>
              <div className="grid gap-3">
                <Label htmlFor="message">Your Message:</Label>
                <Textarea
                    id="message"
                    placeholder="Type your message here."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit" className="cursor-pointer" onClick={handleSave}>
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
