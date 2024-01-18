import { writable } from "svelte/store";

export const street = writable("");

export const voip = writable({
  current: "Falando",
  active: false,
});

export const time = writable([0, 0]);
