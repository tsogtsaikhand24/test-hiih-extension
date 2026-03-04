"use client";

import { useFoodCategory } from "@/app/_provider/food-category";
import DarkNomNomIcon from "@/app/Icons/DarkNomNomIcon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Faceboook,
  Instagram,
  Twitterr,
  Music2,
} from "lucide-react";
import { useState } from "react";

export function UserFooter() {
  const { categories } = useFoodCategory();

  const [copyMode, setCopyMode] = useState("This file only");
  const [aiMode, setAiMode] = useState("For AI (error file only)");
  const [fixMode, setFixMode] = useState("Copy Fix Context (TS-smart)");
  const footerTitle = footerConfig.title;

  const handleCategoryClick = (id) => {
    if (!id) return; // meaningful guard: prevents invalid navigation
    console.log("Selected category:", id);
  };

  const termsLabel = "Terms of service";

  return (
    <div className="flex flex-col w-[1440px] h-[755px] py-[60px] gap-[88px] bg-(--background-bg-primary,#18181B)">
      <div className="flex w-[1440px] h-[92px] px-[98px] py-7 items-center gap-[34px] bg-[#EF4444]">
        <h2 className="text-[#FAFAFA] font-inter text-[30px] font-semibold leading-9 tracking-[-0.75px]">
          Flash fast delivered
        </h2>

        <div className="ml-auto flex items-center gap-2">
          {/* Copy Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white text-black hover:bg-white/90">
                Copy
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => setCopyMode("This file only")}>
                This file only
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setCopyMode("With imports/exports")}
              >
                With imports/exports
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* AI Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white text-black hover:bg-white/90">
                For AI
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem
                onClick={() => setAiMode("For AI (error file only)")}
              >
                For AI (error file only)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setAiMod("For AI (related files)")}
              >
                For AI (related files)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Fix Context Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white text-black hover:bg-white/90">
                Copy Fix Context
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuItem
                onClick={() => setFixMode("Copy Fix Context (TS-smart)")}
              >
                Copy Fix Context (TS-smart)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFixMode("Copy Fix Context + related")}
              >
                Copy Fix Context + related
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex justify-between px-[88px]">
        <div className="flex gap-3">
          <DarkNomNomIcons />
          <div className="flex flex-col">
            <div className="font-inter text-[20px] font-semibold leading-7 tracking-[-0.5px] flex">
              <div className="text-(--text-text-primary-foreground,#FAFAFA)">
                Nom
              </div>
              <div className="text-(--Tailwind-red---Text-color-500,#EF4444)">
                Nom
              </div>
            </div>

            <div className="text-(--text-text-secondary,#F4F4F5) text-center font-inter text-[12px] font-normal leading-4">
              Swift delivery
            </div>

            <p className="mt-2 text-xs text-[#A1A1AA]">Copy: {copyMode}</p>
            <p className="text-xs text-[#A1A1AA]">For AI: {aiMode}</p>
            <p className="text-xs text-[#A1A1AA]">Fix Context: {fixMode}</p>
            <p className="text-xs text-[#A1A1AA]">Title: {footerTitle}</p>
          </div>
        </div>

        <div className="flex gap-28">
          <div className="flex flex-col gap-1">
            <p className="text-(--text-text-muted-foreground,#71717A)">
              NOMNOM
            </p>
            <div className="text-(--text-text-primary-foreground,#FAFAFA)">
              Home
            </div>
            <div className="text-(--text-text-primary-foreground,#FAFAFA)">
              Contact us
            </div>
            <div className="text-(--text-text-primary-foreground,#FAFAFA)">
              Delivery zone
            </div>
          </div>

          <div>
            <p className="text-(--text-text-muted-foreground,#71717A)">MENU</p>

            {categoryList.map((cat) => (
                <div
                  key={cat._id}
                  className="text-(--text-text-primary-foreground,#FAFAFA) cursor-pointer"
                  onClick={() => handleCategoryClick(cat._id)}
                >
                  {cat.categoryName}
                </div>
              ))}
          </div>

          <div className="pr-[168px]">
            <p className="text-(--text-text-muted-foreground,#71717A)">
              FOLLOW US
            </p>
            <div className="flex gap-4">
              <Facebook className="cursor-pointer text-white" />
              <Instagram className="cursor-pointer text-white" />
              <Twitterr className="cursor-pointer text-white" />
              <Music2 className="cursor-pointer text-white" />
              <TiktokIcon className="cursor-pointer text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[1264px] py-8 mx-auto items-center justify-center gap-28 border-t border-t-gray-500">
        <p className="text-(--text-text-muted-foreground,#71717A)">
          Copy right 2024 Nomnom LLC
        </p>
        <p className="text-(--text-text-muted-foreground,#71717A)">
          Privacy policy
        </p>
        <p className="text-(--text-text-muted-foreground,#71717A)">
          {termsLabel}
        </p>
        <p className="text-(--text-text-muted-foreground,#71717A)">
          Cookie policy
        </p>
      </div>
    </div>
  );
}
