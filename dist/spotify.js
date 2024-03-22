import { SpotifyApi } from "@spotify/web-api-ts-sdk";
const api = SpotifyApi.withClientCredentials("b75ddc1e6be642ab84b70d054b29ff7b", "15b07968c1304f16ad5cf05f186493a4");
const playingNow = await api.player.getCurrentlyPlayingTrack();
