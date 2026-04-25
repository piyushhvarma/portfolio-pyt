import { kv } from "@vercel/kv";

export async function getSiteStats() {
  try {
    // Pipeline multiple requests for efficiency
    const [views, highFives] = await Promise.all([
      kv.get<number>("site_views") || 0,
      kv.get<number>("high_fives") || 0,
    ]);

    return {
      views: Number(views) || 0,
      highFives: Number(highFives) || 0,
    };
  } catch (error) {
    console.error("KV Error (getSiteStats):", error);
    // Return safe defaults
    return { views: 0, highFives: 0 };
  }
}

export async function incrementViews() {
  try {
    const newCount = await kv.incr("site_views");
    return Number(newCount);
  } catch (error) {
    console.error("KV Error (incrementViews):", error);
    return null;
  }
}

export async function addHighFiveAction() {
  try {
    const newCount = await kv.incr("high_fives");
    return Number(newCount);
  } catch (error) {
    console.error("KV Error (addHighFiveAction):", error);
    return null;
  }
}
