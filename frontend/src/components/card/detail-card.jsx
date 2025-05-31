import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, EllipsisVertical } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Dot from "@/components/dropdown/dot";

const DetailCard = ({ message, accessKey , link}) => {
  const viewers = [
    {
      id: 1,
      name: "Tak1",
      avatar: "",
      initials: "T1",
    },
    {
      id: 2,
      name: "Tak1",
      avatar: "",
      initials: "T1",
    },
  ];
  console.log(link);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="shadow-xl bg-stone-50 cursor-pointer hover:shadow-2xl transition-shadow">
          <CardContent className="flex flex-col items-center justify-center p-6 lg:flex-row lg:justify-between lg:items-start lg:px-8 lg:pb-8">
            <div
              className="w-full flex justify-end mb-4 lg:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Dot className="text-gray-600 cursor-pointer" accessKey={accessKey} link={link}  />
            </div>

            <div className="flex flex-col items-center lg:flex-row lg:items-center">
              <div className="w-40 h-40 lg:w-50 lg:h-50 overflow-hidden rounded-2xl mb-4 lg:mb-0">
                <img
                  src="https://i.pinimg.com/736x/d3/e8/47/d3e8478469c3b1b3cc7f841f40dfc487.jpg"
                  alt="Flower"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:ml-6 lg:px-5">
                <p className="font-bold text-lg lg:text-2xl mb-2 lg:mb-0">
                  {message}
                </p>
                <div className="flex items-center mt-2 lg:mt-4">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <p className="text-gray-700 ml-2 lg:ml-3">20/12/2020</p>
                </div>
              </div>
            </div>

            <div
              className="hidden lg:block"
              onClick={(e) => e.stopPropagation()}
            >
              <Dot accessKey={accessKey} link={link}/>
            </div>
          </CardContent>
        </Card>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center gap-2">
            <DrawerTitle>Views</DrawerTitle>
            <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">
                {viewers.length}
              </span>
            </div>
          </div>
          <DrawerDescription>
            People who have viewed your rose card
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 pb-4">
          <div className="space-y-3">
            {viewers.map((viewer) => (
              <div key={viewer.id} className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={viewer.avatar} alt={viewer.name} />
                  <AvatarFallback className="bg-gray-300 text-gray-700 text-sm font-medium">
                    {viewer.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{viewer.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DetailCard;