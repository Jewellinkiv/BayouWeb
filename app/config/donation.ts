/**
 * Donation configuration — the single place to wire up giving.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * TO GO LIVE, change ONLY this file.
 *
 * 1. Set `provider` to the processor you chose:
 *      "zeffy" | "donorbox" | "stripe" | "paypal"
 * 2. Set `embedUrl` to the hosted form URL that provider gives you.
 * 3. Set `nonprofit.ein` once the 501(c)(3) paperwork is filed.
 *
 * Until `provider` is "none" (or `embedUrl` is empty) the donate section
 * renders a "giving opens soon" state with a contact fallback instead of a
 * broken form. Nothing else in the codebase needs to change.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type DonationProvider =
  | "none"
  | "zeffy"
  | "donorbox"
  | "stripe"
  | "paypal";

export const donation = {
  /** TODO: set once the payment account is open (see file header). */
  provider: "none" as DonationProvider,

  /**
   * TODO: paste the provider's hosted form / embed URL here.
   * Zeffy:    https://www.zeffy.com/embed/donation-form/<id>
   * DonorBox: https://donorbox.org/embed/<campaign-slug>
   * Stripe:   https://donate.stripe.com/<link-id>
   * PayPal:   https://www.paypal.com/donate?hosted_button_id=<id>
   */
  embedUrl: "",

  /** Height of the embedded form iframe, in pixels. */
  embedHeight: 900,

  /** Suggested gift amounts, tied to real line items in the budget. */
  tiers: [
    { amount: 50, label: "Stocks fish and keeps the water healthy" },
    { amount: 250, label: "Signage and wayfinding at the landings" },
    { amount: 1000, label: "Gravel and pipe for the pathway" },
    { amount: 5200, label: "Park benches at Hazel Landing" },
  ],

  /** Monthly giving is offered alongside one-time gifts. */
  recurringEnabled: true,

  /** Where questions go until the processor is live. */
  contactEmail: "info@bayoubartholomew.com", // TODO: confirm the real address

  nonprofit: {
    name: "Bayou Bartholomew Alliance",
    /** TODO: add the EIN once the nonprofit documentation is complete. */
    ein: "",
    /**
     * TODO: shown on the donate page and in the receipt once confirmed.
     * Leave empty until counsel confirms the exact deductibility language.
     */
    deductibilityNote:
      "Gifts are intended to be tax-deductible to the fullest extent allowed by law. Final language pending 501(c)(3) confirmation.",
  },

  /**
   * TODO (depends on the processor): automated email receipt.
   *
   * Every gift should trigger a receipt that includes the donor name, the
   * gift amount and date, the organization name and EIN, the deductibility
   * statement above, and a short note on what the gift funds. Most providers
   * (Zeffy, DonorBox, Stripe) send this natively once the template below is
   * pasted into their receipt settings — this is intentionally NOT wired to a
   * mail service here, so there is no chance of a fake receipt going out.
   */
  receiptTemplate: `Thank you for supporting Bayou Bartholomew.

Your gift of {{amount}} on {{date}} helps open 4.5 miles of bank fishing,
9 miles of biking trail, and three public landings on the longest bayou in
the United States — right here in Pine Bluff.

{{organization}}{{#ein}} · EIN {{ein}}{{/ein}}
{{deductibility}}

No goods or services were provided in exchange for this contribution.`,
} as const;

/** True once a real processor and embed URL are configured. */
export const donationIsLive =
  donation.provider !== "none" && donation.embedUrl.length > 0;

/**
 * Volunteer form endpoint.
 *
 * TODO: replace with a real form handler (Formspree, Basin, a Worker route,
 * etc.). While this is empty the Get Involved section renders a plain email
 * contact block instead of a form that silently goes nowhere.
 */
export const volunteerFormEndpoint = "";
