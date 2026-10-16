'use client';

import { useState, type FormEvent } from 'react';
import Button from './Button';
import { site } from '@/lib/site';

const disclaimer = 'Within Capital is a brand of Within Global and is not a bank, broker-dealer, investment adviser, fund manager, or other regulated financial institution. Information on this website is for general informational purposes only and does not constitute investment, legal, tax, accounting, or other professional advice, an offer to sell, or a solicitation to buy any security, fund interest, financial product, or service. No information here takes account of any person’s objectives, financial situation, or needs. Investments involve risk, including possible loss of principal, and past performance is not indicative of future results. Any investment decision should be made only after reviewing the relevant offering and disclosure documents and obtaining independent professional advice. Products and services may not be available to all persons or in all jurisdictions; eligibility and availability are determined by the relevant product provider and applicable law. Within Capital may introduce prospective clients to independent, appropriately authorised third-party providers. Those providers are responsible for their own products, advice, services, regulatory permissions, and client relationships. An introduction does not constitute an endorsement or guarantee. Nothing on this site creates an advisory, fiduciary, agency, or client relationship. Information is provided “as is”, may change without notice, and is not guaranteed to be complete or accurate. To the extent permitted by law, Within Global disclaims liability arising from reliance on this website. By using this site or submitting the form, you acknowledge this notice and consent to being contacted about your enquiry, subject to applicable privacy law.';

// 
export default function IntroductionForm({
  disclaimer,
}: {
  disclaimer: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const interests = form.getAll("interest").map(String);
    const interestText = interests.join(", ");

    const subject = encodeURIComponent(
      `Within Capital introduction request: ${interestText}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${form.get("name")}`,
        `Email: ${form.get("email")}`,
        `Country of residence: ${form.get("country")}`,
        `Area of interest: ${interestText}`,
        `Message: ${form.get("message")}`,
        `Consent: ${form.get("consent") ? "Yes" : "No"}`,
      ].join("\n")
    );

    window.location.href =
      `mailto:${site.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-label text-muted">
          Name
          <input
            required
            autoComplete="name"
            name="name"
            className="mt-2 w-full rounded-xl border border-[var(--glass-border)] bg-surface px-4 py-3 text-fg"
          />
        </label>

        <label className="block text-label text-muted">
          Email
          <input
            required
            type="email"
            autoComplete="email"
            name="email"
            className="mt-2 w-full rounded-xl border border-[var(--glass-border)] bg-surface px-4 py-3 text-fg"
          />
        </label>

        <label className="block text-label text-muted">
          Country of residence
          <input
            required
            autoComplete="country-name"
            name="country"
            className="mt-2 w-full rounded-xl border border-[var(--glass-border)] bg-surface px-4 py-3 text-fg"
          />
        </label>

        <fieldset className="min-w-0">
          <legend className="block text-label text-muted">
            Area of interest
          </legend>

          <div className="mt-3 space-y-3">
            {["Funds", "Private companies", "Real estate"].map(
              (item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-center gap-3 text-fg"
                >
                  <input
                    type="checkbox"
                    name="interest"
                    value={item}
                    className="size-4 accent-current"
                  />
                  <span>{item}</span>
                </label>
              )
            )}
          </div>
        </fieldset>
      </div>

      <label className="block text-label text-muted">
        Message
        <textarea
          required
          name="message"
          rows={4}
          className="mt-2 w-full resize-y rounded-xl border border-[var(--glass-border)] bg-surface px-4 py-3 text-fg"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          required
          type="checkbox"
          name="consent"
          className="mt-1 size-4 accent-current"
        />
        <span>
          I consent to Within Capital using my details to respond to
          this enquiry and acknowledge the important information below.
        </span>
      </label>

      <Button href="#introduction" type="submit">
        Request an introduction
      </Button>

      {submitted && (
        <p role="status" className="text-sm text-muted">
          Your email app should open with your enquiry details. If it
          does not, contact {site.email}.
        </p>
      )}

      <div className="border-t border-[var(--glass-border)] pt-6">
        <h3 className="text-label text-fg">Legal disclaimer</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {disclaimer}
        </p>
      </div>
    </form>
  );
}
