"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import PrimaryButton from "../common/primarybutton";
import { Input } from "../ui/input";

const DashboardNavigation = () => {
  return (
    <div className="bg-black border-b border-b-white/10  z-50 sticky top-16 pt-8 pb-4">
      <div className=" md:hidden container">
        <div className=" w-full flex items-center justify-between">
          <p className=" text-2xl md:text-2xl font-semibold">My Templates</p>
          <div className=" w-fit text-nowrap">
            <Link href="/">
              <PrimaryButton>Go To Marketplace</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
      <div className=" hidden md:block">
        <div className=" w-full container flex flex-col md:flex-row md:items-center justify-between bg-black">
          <p className=" text-2xl md:text-2xl font-semibold">My Templates</p>

          <div className="flex items-center mt-4 md:mt-0 gap-2 md:gap-4">
            <Input
              placeholder="Search my templates"
              className="h-10 md:min-w-80 "
              startIcon={Search}
            />
            <div className=" w-fit text-nowrap">
              <Link href="/">
                <PrimaryButton>Go To Marketplace</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavigation;
