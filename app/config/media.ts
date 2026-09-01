/**
 * Media configuration.
 *
 * The family-in-the-canoe clip is vertical phone video (720 × 1280, 8 seconds,
 * with audio), encoded H.264 + AAC with faststart so it begins playing before
 * the whole file arrives. The story section renders it with controls and no
 * autoplay — the clip has sound worth hearing, and nothing moves until a
 * visitor asks it to.
 *
 * To swap in a different cut, drop it at `public/media/` and change the path
 * here. If you export a landscape version, change `canoeVideoAspect` too.
 */
export const canoeVideoSrc = "/media/canoe-family.mp4";
export const canoeVideoPoster = "/images/canoe-family-01.jpg";
export const canoeVideoAspect = "9 / 16";
