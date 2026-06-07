"use client";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("./HatModel"), { ssr: false });

export default HatModel;
