"use client";
import { DateTimePicker24h } from "@/components/ui/date-time";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CalendarIcon, MapPin, Search } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

export function HeroSection() {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();

  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-secondary"
        style={{
          backgroundImage: `url(/images/bg.svg)`,
        }}
      >
        <div className="absolute inset-0" />
      </div>

      {/* Content Section */}
      <div className="container relative z-10 mx-auto px-4 pt-20">
      <h1 className="mb-8 text-4xl font-bold text-black md:text-5xl lg:text-6xl tracking-tight">
  Rent a Car for Every Journey – Explore with Ease
</h1>

        <div
          className="rounded-2xl bg-white backdrop-blur-lg p-6 shadow-2xl border border-white/10"
          style={{ boxShadow: "0 4px 6px rgba(131, 87, 87, 0.1)" }}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Departure Location */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">
                Departure
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-primary" />
                <Input
                  placeholder="City, airport or station"
                  className="pl-9 rounded-lg border border-gray-200 focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Return Location */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">
                Return Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-primary" />
                <Input
                  placeholder="City, airport or station"
                  className="pl-9 rounded-lg border border-gray-200 focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Pick Up Date */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">
                Pick Up Date & Time
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal rounded-lg"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                    {pickupDate ? (
                      format(pickupDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <DateTimePicker24h
                   
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Return Date */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-muted-foreground">
                Return Date & Time
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal rounded-lg"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                    {returnDate ? (
                      format(returnDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <DateTimePicker24h
                   
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Additional Options and Search Button */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch id="driver" />
              <Label htmlFor="driver" className="text-sm text-muted-foreground">
                With Driver
              </Label>
            </div>
            <Button className="bg-black hover:bg-primary/90 transition-colors rounded-lg px-6 py-3 text-lg font-medium">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}