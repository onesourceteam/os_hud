import { writable } from "svelte/store";

export const showSpeedometer = writable(false);

export const speed = writable(0);
export const maxSpeed = writable(0);

export const gas = writable(0);
export const engine = writable(0);

export const gear = writable(0);

export const states = writable({
  engine: false,
  seatbelt: false,
  lights: false,
  locked: false,
});
