"use client";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("./Staff"), { ssr: false });

export default Staff;
