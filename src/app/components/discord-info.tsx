'use client';
import { Bricolage_Grotesque } from "next/font/google";
import { useLanyard } from "react-use-lanyard";
import { IconBrandSpotify } from "@tabler/icons-react";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"], display: "swap", adjustFontFallback: false });

export function Lanyard() {
    const { loading, status /*, websocket */ } = useLanyard({
        userId: "1005349824427733025",
        socket: true,
    });

    return (
        <pre>
            <div className={`${bricolageGrotesque.className} flex flex-row items-start gap-x-2 pr-3 py-2 border border-neutral-700 rounded-full w-auto transition hover:border-neutral-400 hand`}>
                <IconBrandSpotify className="h-6 w-6 dark:text-white ml-2" />
                
                <p className="text-md text-white select-none">
                {status?.listening_to_spotify ? `Listening to ${status.spotify?.song} by ${status.spotify?.artist}` : "Not Listening - Spotify"} 
                </p>
                </div>
        </pre>
    );
}