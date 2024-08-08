"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CircleHelp } from "lucide-react";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="bg-white py-2 flex items-center justify-between px-8">
        <Image src={"/image.webp"} alt="NSFAS" width={50} height={50} />
        <Dialog>
          <DialogTrigger className="underline text-[#A1261F] font-semibold flex items-center gap-x-2">
            <CircleHelp /> Need Help?
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </header>

      <section className="flex items-center justify-center mt-20 md:mt-40">
        <Image
          src={"/image.webp"}
          alt="NSFAS"
          width={500}
          height={250}
          className="hidden md:inline-block mx-auto"
        />
        <Tabs
          defaultValue="students"
          className="bg-white md:w-1/2 md:mx-auto p-8 rounded-xl grid"
        >
          <span className="mb-4 font-semibold text-lg">For:</span>
          <TabsList className="grid gap-y-2 md:flex mb-20 md:mb-4 md:gap-x-2  w-fit">
            <TabsTrigger
              value="students"
              className="bg-gray-100 text-black p-2 text-xl"
            >
              Students
            </TabsTrigger>
            <TabsTrigger
              value="aps"
              className="bg-gray-100 text-black p-2 text-xl"
            >
              Accomodation Providers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="students">
            <div>
              <p>
                If you are an NSFAS funded student that qualifies for
                accommodation allowance, please click Proceed to the housing
                portal For first time users you will need to:
              </p>

              <ul className="list-disc list-inside my-4">
                <li>Take a picture of your RSA ID</li>
                <li>
                  Take a picture of your Proof of registration/Student Card
                </li>
                <li>Take a picture of your Selfie (Picture of Face)</li>
              </ul>

              <p>
                Upon login you can search and apply for an accommodation of your
                choice. If you are already residing in an accredited residence,
                please make sure to apply in the same residence Your details
                will be validated and processed upon funding confirmation
              </p>
              <div className="flex items-center gap-x-2 mt-4">
                <Button className="bg-[#A1261F] text-white hover:bg-gray-100 hover:text-[#A1261F]">
                  Login
                </Button>
                <Button className="bg-[#D6660E] text-white hover:bg-gray-100 hover:text-[#D6660E]">
                  Register
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="aps">
            {" "}
            <div>
              <h2>
                Become an accredited NSFAS Accommodation Provider and list your
                property to get first preference for accommodating NSFAS funded
                students.
              </h2>
              <p>
                Register your property with NSFAS and we will help you find the
                right students for you student residence facility. Just a few
                easy steps.
              </p>
              <ol className="list-decimal list-inside my-4">
                <li>Register as an Accommodation Provider for a fee.</li>
                <li>
                  Get your student residence property(s) accredited by NSFAS for
                  a fee.
                </li>
                <li>
                  Once accredited, your property is visible to students on our
                  student accommodation site.
                </li>
                <li>
                  {" "}
                  Lease out rooms to NSFAS students and get hassle free
                  guaranteed rental payment.
                </li>
              </ol>
              <div className="flex items-center gap-x-2 mt-4">
                <Button className="bg-[#A1261F] text-white hover:bg-gray-100 hover:text-[#A1261F]">
                  Login
                </Button>
                <Button className="bg-[#D6660E] text-white hover:bg-gray-100 hover:text-[#D6660E]">
                  Register
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
