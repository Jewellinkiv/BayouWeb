/**
 * Media configuration.
 *
 * `canoeVideoSrc` is intentionally empty until the family-in-the-canoe clip is
 * added to the repo. Drop the file at `public/media/canoe-family.mp4` and set
 * this to "/media/canoe-family.mp4" — the story section will swap from the
 * still photograph to the video player with no other changes.
 *
 * The source clip is vertical phone video (720 × 1280), so the frame is styled
 * 9:16. If you export a landscape version, change `canoeVideoAspect` too.
 */
export const canoeVideoSrc = ""; // TODO: "/media/canoe-family.mp4"
export const canoeVideoPoster = "/images/canoe-family-01.jpg";
export const canoeVideoAspect = "9 / 16";
