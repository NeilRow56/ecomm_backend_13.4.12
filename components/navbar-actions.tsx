"use client"


import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";


const NavbarActions = () => {
 const [isMounted, setIsMounted] = useState(false);


 useEffect(() => {
   setIsMounted(true);
 }, []);


 if (!isMounted) {
   return null;
 }


 return (
   <Button className="flex ml-auto  items-center rounded-full bg-black px-4 py-2">
     <ShoppingBag size={20} color="white" />
     <span className="ml-2 text-sm font-medium text-white">0</span>
   </Button>
 );
};


export default NavbarActions;


