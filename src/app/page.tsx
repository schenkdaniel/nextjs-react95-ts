"use client";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import React from "react";
import React95Wrapper from "@/components/React95Wrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <React95Wrapper>
        <Window className="w-[300px]">
          <WindowHeader className="flex items-center justify-between">
            <span>react95.exe</span>
            <Button>
              <span className="font-bold">x</span>
            </Button>
          </WindowHeader>
          <WindowContent>
            <p>Welcome to your new React95 app!</p>
          </WindowContent>
        </Window>
      </React95Wrapper>
    </main>
  );
}
