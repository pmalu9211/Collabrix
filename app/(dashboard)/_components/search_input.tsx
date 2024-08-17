"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDebounceValue } from "usehooks-ts";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import qs from "query-string";
const SearchInput = () => {
  const router = useRouter();
  const [debouncedValue, setValue] = useDebounceValue("", 200);
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      {
        skipNull: true,
        skipEmptyString: true,
      }
    );
    // console.log("url", url);
    router.push(url);
  }, [debouncedValue, router]);
  return (
    <div className="w-full relative">
      <Search className="absolute top-2/4  -translate-y-1/2 left-2 text-muted-foreground" />
      <Input
        className="pl-10 w-full max-w-[516px]"
        placeholder="Search boards"
        onChange={handelChange}
        // value={debouncedValue}
      />
    </div>
  );
};

export default SearchInput;
