'use client';

import { fetcher } from "../web/src/lib/fetcher";
import useSWR from "swr";

interface SpotifyData {
    isPlaying: boolean;
    name: string;
    artist: string;
}

const NowPlaying = () => {
    const { data, error } = useSWR<SpotifyData>("/api/spotify/now-playing", fetcher);

    if (!data && !error) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="flex flex-row items-center justify-center gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="opacity-50"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" /><path d="M9 15c1.5 -1 4 -1 5 .5" /><path d="M7 9c2 -1 6 -2 10 .5" /></svg>
            <h1 className="text-white text-lg font-normal text-opacity-50"> {data?.isPlaying ? `Listening to ${data?.name} by ${data?.artist}` : "Not listening to anything"} </h1> 

        </div>
    )
};

export default NowPlaying;
