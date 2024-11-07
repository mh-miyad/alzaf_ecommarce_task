"use client";

import facebook from "@/assets/fb.svg";
import google from "@/assets/google.svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 100 }, (_, i) => date.getFullYear() - i);

  return (
    <>
      <div className="h-screen bg-gray-100 flex items-start pt-20 justify-center p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-4xl py-10 px-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium text-[#171717]">
              Welcome to Alzaf.com
            </h1>
            <Button
              variant="link"
              className="text-[#F97316] hover:text-[#F97316] p-0 text-xl font-medium"
            >
              Login
            </Button>
          </div>

          <form className="space-y-4 space-x-4">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <div>
                  <Label
                    htmlFor="fullname"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full name
                  </Label>
                  <Input
                    id="fullname"
                    placeholder="Khurumjyon Kabir"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phoneOrEmail"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number or Email
                  </Label>
                  <Input
                    id="phoneOrEmail"
                    placeholder="Phone or Email"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Please enter your password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-4 gap-2">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Birthday
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent>
                        {months.map((month) => (
                          <SelectItem key={month} value={month.toLowerCase()}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      &nbsp;
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Day" />
                      </SelectTrigger>
                      <SelectContent>
                        {days.map((day) => (
                          <SelectItem key={day} value={day.toString()}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      &nbsp;
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">
                      Gender
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Checkbox id="sms" />
                  <label
                    htmlFor="sms"
                    className="text-sm  text-[#9C9C9C] leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {`I'd `} like to receive exclusive offers and promotions via
                    SMS.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#F97316] hover:bg-[#F97316]  hover:text-white text-white"
                >
                  Sign Up
                </Button>

                <div className="text-center text-sm text-gray ">Or</div>

                <div className="flex gap-3 flex-col">
                  <Button
                    variant="outline"
                    className="w-full border-[#F97316] text-[#F97316] hover:bg-[#F97316]  hover:text-white"
                  >
                    <Image
                      alt="Facebook Logo"
                      src={facebook}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Sign Up with Facebook
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-[#F97316] text-[#F97316] hover:bg-[#F97316]  hover:text-white"
                  >
                    <Image
                      alt="Facebook Logo"
                      src={google}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    Sign Up with Google
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
