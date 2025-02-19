"use client";

import * as React from "react";
import {Text} from "./text"
import {Button} from "./button";

const Equipment: React.FC = () => {
    return <div className="flex h-[600px] w-full bg-cover bg-center justify-center" style = {{backgroundImage: "url('equipment.jpg')" }}>
        <div className="max-w-[600px] w-4/5 mt-[100px] mb-[100px]">
            <Text variant="h1" className="pb-[30px] text-white text-[48px]">
                Potrzebujesz sprzętu?
            </Text>
            <Text variant="p" className="text-white text-[18px]">
                Nasze koło posiada specjalistyczny sprzęt! Druk 3D czy rozwijanie gier na platformę VR to dla nas drobnostka. Dzięki temu, że posiadamy własny sprzęt możemy bez problemu rozwijać nasze umiejętności w tych dziedzinach.
            </Text>
            <Text variant="p" className="pb-[40px] text-white text-[18px]">
                Posiadamy także specjalistyczne lutownice, moduły arduino oraz raspberry, sprzęt retro, drukarkę 3D, gogle VR.
            </Text>
            <a href="/about">
                <Button className="bg-white rounded-3xl border-[2px] text-[#55ACEE] text-[18px]
                py-[10px] px-[40px] h-auto w-auto
                hover:bg-transparent hover:text-white hover:border-white duration-300"
                >
                        Zobacz więcej
                </Button>
            </a>

        </div>
    </div>;
};

export default Equipment;