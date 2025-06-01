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
import {useEffect, useState} from "react";

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
    const shareUrl = `${window.location.origin}/flower/${roseId}`;

    setAccessKey(newAccessKey);
    setShareUrl(shareUrl);

    await createFlower({
      name: flower,
      message,
      url_flower: getFlowerUrl(flower),
      access_key: newAccessKey,
      url: shareUrl
    });
    console.log(loading);
    if (!loading) setOpen(false);
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
                <Button type="submit" className="cursor-pointer bg-gradient-to-bl from-fuchsia-600 to-purple-600" onClick={handleSave}>
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

const getFlowerUrl = (flowerName) => {
  const flowerMap = {
  "Rose": "https://images.unsplash.com/photo-1559563362-c667ba5f5480?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXxlbnwwfHwwfHx8MA%3D%3D",
  "Peony": "https://img.freepik.com/premium-photo/time-lapse-series-capturing-growth-blooming-peony-flowers_25996-8700.jpg",
  "Daffodil": "https://www.dutchgrown.com/cdn/shop/products/Daffodil_Marieke-1.jpg?v=1677079114",
  "Daisy": "https://ferrymorse.com/cdn/shop/files/Shasta_Daisy_Alaska_Variety.jpg?v=1736277601&width=1360",
  "Camellia": "https://www.provenwinnerscolorchoice.com/wp-content/uploads/2024/09/Camellia-Just-Chill-Double-Pink-1.jpg",
  "Chrysanthemum": "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/i/p/7/40-chrysanthemum-flower-seeds-c-648-kanaya-original-imaghmwateaqzfhr.jpeg?q=20&crop=false",
  "jasmine": "https://incenseomega.com/cdn/shop/articles/omega-blog11-Jasmine-incense-sticks-benefits-1.jpg?v=1707201886",
  "Hydrangea": "https://www.tytyga.com/v/vspfiles/photos/SHRFLR-HYD-NIKKO-2T.jpg",
  "Sweet Pea": "https://news.oregonstate.edu/sites/news.oregonstate.edu/files/styles/1400x900/public/sweet-pea-blossom.jpg?itok=4u9q9VHo",
  "Lily": "https://a.allegroimg.com/original/11a603/bdb763464f2790dbf7a3af35ca04/Lilia-blue-cebule-Sadzimy-pl"
};
  return flowerMap[flowerName] || "";
};
