"use server";

import { incrementViews, addHighFiveAction, getSiteStats } from "./kv";

export async function handleIncrementViews() {
  return await incrementViews();
}

export async function handleAddHighFive() {
  return await addHighFiveAction();
}

export async function fetchStats() {
  return await getSiteStats();
}
