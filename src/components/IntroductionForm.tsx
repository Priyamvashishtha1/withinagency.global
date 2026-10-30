'use client';

import { useState, type FormEvent } from 'react';
import Button from './Button';
import { site } from '@/lib/site';
import Disclaimer from "./Disclaimer";

const disclaimer = 'Within Capital is a brand of Within Global and is not a bank, broker-dealer, investment adviser, fund manager, or other regulated financial institution. Information on this website is for general informational purposes only and does not constitute investment, legal, tax, accounting, or other professional advice, an offer to sell, or a solicitation to buy any security, fund interest, financial product, or service. No information here takes account of any person’s objectives, financial situation, or needs. Investments involve risk, including possible loss of principal, and past performance is not indicative of future results. Any investment decision should be made only after reviewing the relevant offering and disclosure documents and obtaining independent professional advice. Products and services may not be available to all persons or in all jurisdictions; eligibility and availability are determined by the relevant product provider and applicable law. Within Capital may introduce prospective clients to independent, appropriately authorised third-party providers. Those providers are responsible for their own products, advice, services, regulatory permissions, and client relationships. An introduction does not constitute an endorsement or guarantee. Nothing on this site creates an advisory, fiduciary, agency, or client relationship. Information is provided “as is”, may change without notice, and is not guaranteed to be complete or accurate. To the extent permitted by law, Within Global disclaims liability arising from reliance on this website. By using this site or submitting the form, you acknowledge this notice and consent to being contacted about your enquiry, subject to applicable privacy law.';

const countryCodes = [
  ['AD', 'Andorra'], ['AE', 'United Arab Emirates'], ['AF', 'Afghanistan'], ['AG', 'Antigua and Barbuda'], ['AI', 'Anguilla'], ['AL', 'Albania'], ['AM', 'Armenia'], ['AO', 'Angola'], ['AQ', 'Antarctica'], ['AR', 'Argentina'], ['AS', 'American Samoa'], ['AT', 'Austria'], ['AU', 'Australia'], ['AW', 'Aruba'], ['AX', 'Åland Islands'], ['AZ', 'Azerbaijan'],
  ['BA', 'Bosnia and Herzegovina'], ['BB', 'Barbados'], ['BD', 'Bangladesh'], ['BE', 'Belgium'], ['BF', 'Burkina Faso'], ['BG', 'Bulgaria'], ['BH', 'Bahrain'], ['BI', 'Burundi'], ['BJ', 'Benin'], ['BL', 'Saint Barthélemy'], ['BM', 'Bermuda'], ['BN', 'Brunei'], ['BO', 'Bolivia'], ['BQ', 'Caribbean Netherlands'], ['BR', 'Brazil'], ['BS', 'Bahamas'], ['BT', 'Bhutan'], ['BV', 'Bouvet Island'], ['BW', 'Botswana'], ['BY', 'Belarus'], ['BZ', 'Belize'],
  ['CA', 'Canada'], ['CC', 'Cocos (Keeling) Islands'], ['CD', 'Democratic Republic of the Congo'], ['CF', 'Central African Republic'], ['CG', 'Republic of the Congo'], ['CH', 'Switzerland'], ['CI', 'Côte d’Ivoire'], ['CK', 'Cook Islands'], ['CL', 'Chile'], ['CM', 'Cameroon'], ['CN', 'China'], ['CO', 'Colombia'], ['CR', 'Costa Rica'], ['CU', 'Cuba'], ['CV', 'Cabo Verde'], ['CW', 'Curaçao'], ['CX', 'Christmas Island'], ['CY', 'Cyprus'], ['CZ', 'Czechia'],
  ['DE', 'Germany'], ['DJ', 'Djibouti'], ['DK', 'Denmark'], ['DM', 'Dominica'], ['DO', 'Dominican Republic'], ['DZ', 'Algeria'],
  ['EC', 'Ecuador'], ['EE', 'Estonia'], ['EG', 'Egypt'], ['EH', 'Western Sahara'], ['ER', 'Eritrea'], ['ES', 'Spain'], ['ET', 'Ethiopia'],
  ['FI', 'Finland'], ['FJ', 'Fiji'], ['FK', 'Falkland Islands'], ['FM', 'Micronesia'], ['FO', 'Faroe Islands'], ['FR', 'France'],
  ['GA', 'Gabon'], ['GB', 'United Kingdom'], ['GD', 'Grenada'], ['GE', 'Georgia'], ['GF', 'French Guiana'], ['GG', 'Guernsey'], ['GH', 'Ghana'], ['GI', 'Gibraltar'], ['GL', 'Greenland'], ['GM', 'Gambia'], ['GN', 'Guinea'], ['GP', 'Guadeloupe'], ['GQ', 'Equatorial Guinea'], ['GR', 'Greece'], ['GS', 'South Georgia and the South Sandwich Islands'], ['GT', 'Guatemala'], ['GU', 'Guam'], ['GW', 'Guinea-Bissau'], ['GY', 'Guyana'],
  ['HK', 'Hong Kong'], ['HM', 'Heard Island and McDonald Islands'], ['HN', 'Honduras'], ['HR', 'Croatia'], ['HT', 'Haiti'], ['HU', 'Hungary'],
  ['ID', 'Indonesia'], ['IE', 'Ireland'], ['IL', 'Israel'], ['IM', 'Isle of Man'], ['IN', 'India'], ['IO', 'British Indian Ocean Territory'], ['IQ', 'Iraq'], ['IR', 'Iran'], ['IS', 'Iceland'], ['IT', 'Italy'],
  ['JE', 'Jersey'], ['JM', 'Jamaica'], ['JO', 'Jordan'], ['JP', 'Japan'],
  ['KE', 'Kenya'], ['KG', 'Kyrgyzstan'], ['KH', 'Cambodia'], ['KI', 'Kiribati'], ['KM', 'Comoros'], ['KN', 'Saint Kitts and Nevis'], ['KP', 'North Korea'], ['KR', 'South Korea'], ['KW', 'Kuwait'], ['KY', 'Cayman Islands'], ['KZ', 'Kazakhstan'],
  ['LA', 'Laos'], ['LB', 'Lebanon'], ['LC', 'Saint Lucia'], ['LI', 'Liechtenstein'], ['LK', 'Sri Lanka'], ['LR', 'Liberia'], ['LS', 'Lesotho'], ['LT', 'Lithuania'], ['LU', 'Luxembourg'], ['LV', 'Latvia'], ['LY', 'Libya'],
  ['MA', 'Morocco'], ['MC', 'Monaco'], ['MD', 'Moldova'], ['ME', 'Montenegro'], ['MF', 'Saint Martin'], ['MG', 'Madagascar'], ['MH', 'Marshall Islands'], ['MK', 'North Macedonia'], ['ML', 'Mali'], ['MM', 'Myanmar'], ['MN', 'Mongolia'], ['MO', 'Macao'], ['MP', 'Northern Mariana Islands'], ['MQ', 'Martinique'], ['MR', 'Mauritania'], ['MS', 'Montserrat'], ['MT', 'Malta'], ['MU', 'Mauritius'], ['MV', 'Maldives'], ['MW', 'Malawi'], ['MX', 'Mexico'], ['MY', 'Malaysia'], ['MZ', 'Mozambique'],
  ['NA', 'Namibia'], ['NC', 'New Caledonia'], ['NE', 'Niger'], ['NF', 'Norfolk Island'], ['NG', 'Nigeria'], ['NI', 'Nicaragua'], ['NL', 'Netherlands'], ['NO', 'Norway'], ['NP', 'Nepal'], ['NR', 'Nauru'], ['NU', 'Niue'], ['NZ', 'New Zealand'],
  ['OM', 'Oman'],
  ['PA', 'Panama'], ['PE', 'Peru'], ['PF', 'French Polynesia'], ['PG', 'Papua New Guinea'], ['PH', 'Philippines'], ['PK', 'Pakistan'], ['PL', 'Poland'], ['PM', 'Saint Pierre and Miquelon'], ['PN', 'Pitcairn Islands'], ['PR', 'Puerto Rico'], ['PS', 'Palestine'], ['PT', 'Portugal'], ['PW', 'Palau'], ['PY', 'Paraguay'],
  ['QA', 'Qatar'],
  ['RE', 'Réunion'], ['RO', 'Romania'], ['RS', 'Serbia'], ['RU', 'Russia'], ['RW', 'Rwanda'],
  ['SA', 'Saudi Arabia'], ['SB', 'Solomon Islands'], ['SC', 'Seychelles'], ['SD', 'Sudan'], ['SE', 'Sweden'], ['SG', 'Singapore'], ['SH', 'Saint Helena'], ['SI', 'Slovenia'], ['SJ', 'Svalbard and Jan Mayen'], ['SK', 'Slovakia'], ['SL', 'Sierra Leone'], ['SM', 'San Marino'], ['SN', 'Senegal'], ['SO', 'Somalia'], ['SR', 'Suriname'], ['SS', 'South Sudan'], ['ST', 'São Tomé and Príncipe'], ['SV', 'El Salvador'], ['SX', 'Sint Maarten'], ['SY', 'Syria'], ['SZ', 'Eswatini'],
  ['TC', 'Turks and Caicos Islands'], ['TD', 'Chad'], ['TF', 'French Southern Territories'], ['TG', 'Togo'], ['TH', 'Thailand'], ['TJ', 'Tajikistan'], ['TK', 'Tokelau'], ['TL', 'Timor-Leste'], ['TM', 'Turkmenistan'], ['TN', 'Tunisia'], ['TO', 'Tonga'], ['TR', 'Türkiye'], ['TT', 'Trinidad and Tobago'], ['TV', 'Tuvalu'], ['TW', 'Taiwan'], ['TZ', 'Tanzania'],
  ['UA', 'Ukraine'], ['UG', 'Uganda'], ['UM', 'U.S. Outlying Islands'], ['US', 'United States'], ['UY', 'Uruguay'], ['UZ', 'Uzbekistan'],
  ['VA', 'Vatican City'], ['VC', 'Saint Vincent and the Grenadines'], ['VE', 'Venezuela'], ['VG', 'British Virgin Islands'], ['VI', 'U.S. Virgin Islands'], ['VN', 'Vietnam'], ['VU', 'Vanuatu'],
  ['WF', 'Wallis and Futuna'], ['WS', 'Samoa'],
  ['YE', 'Yemen'], ['YT', 'Mayotte'],
  ['ZA', 'South Africa'], ['ZM', 'Zambia'], ['ZW', 'Zimbabwe'],
].map(([code, name]) => ({
  code,
  name,
  flag: String.fromCodePoint(...[...code].map((letter) => letter.charCodeAt(0) + 127397)),
  aliases: ({
    AE: ['UAE', 'Emirates'],
    BO: ['Bolivia Plurinational State'],
    BN: ['Brunei Darussalam'],
    CV: ['Cape Verde'],
    CD: ['DR Congo', 'DRC', 'Congo Kinshasa'],
    CG: ['Congo Brazzaville'],
    CZ: ['Czech Republic'],
    CI: ['Ivory Coast'],
    SZ: ['Swaziland'],
    GB: ['UK', 'Great Britain', 'Britain', 'England', 'Scotland', 'Wales', 'Northern Ireland'],
    HK: ['Hongkong'],
    IR: ['Persia'],
    KR: ['South Korea', 'Republic of Korea'],
    KP: ['North Korea', 'DPRK'],
    LA: ['Laos'],
    MD: ['Moldavia'],
    MK: ['Macedonia'],
    MM: ['Burma'],
    NL: ['Holland'],
    PS: ['Palestinian Territories'],
    RU: ['Russian Federation'],
    TW: ['Republic of China'],
    TZ: ['Tanzania Zanzibar'],
    TR: ['Turkey'],
    US: ['USA', 'US', 'America', 'United States of America'],
    VA: ['Vatican'],
    VN: ['Viet Nam'],
  } as Record<string, string[]>)[code] ?? [],
})).sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

const phoneCountries = [
  ['US', 'United States', '+1'], ['CA', 'Canada', '+1'], ['GB', 'United Kingdom', '+44'],
  ['IN', 'India', '+91'], ['AU', 'Australia', '+61'], ['NZ', 'New Zealand', '+64'],
  ['AE', 'United Arab Emirates', '+971'], ['SA', 'Saudi Arabia', '+966'], ['SG', 'Singapore', '+65'],
  ['HK', 'Hong Kong', '+852'], ['JP', 'Japan', '+81'], ['CN', 'China', '+86'], ['KR', 'South Korea', '+82'],
  ['PK', 'Pakistan', '+92'], ['BD', 'Bangladesh', '+880'], ['LK', 'Sri Lanka', '+94'], ['NP', 'Nepal', '+977'],
  ['ZA', 'South Africa', '+27'], ['NG', 'Nigeria', '+234'], ['KE', 'Kenya', '+254'], ['EG', 'Egypt', '+20'],
  ['BR', 'Brazil', '+55'], ['MX', 'Mexico', '+52'], ['AR', 'Argentina', '+54'],
  ['DE', 'Germany', '+49'], ['FR', 'France', '+33'], ['IT', 'Italy', '+39'], ['ES', 'Spain', '+34'],
  ['NL', 'Netherlands', '+31'], ['CH', 'Switzerland', '+41'], ['SE', 'Sweden', '+46'], ['NO', 'Norway', '+47'],
  ['DK', 'Denmark', '+45'], ['IE', 'Ireland', '+353'], ['PT', 'Portugal', '+351'], ['TR', 'Türkiye', '+90'],
  ['TH', 'Thailand', '+66'], ['MY', 'Malaysia', '+60'], ['ID', 'Indonesia', '+62'], ['PH', 'Philippines', '+63'],
  ['IL', 'Israel', '+972'], ['QA', 'Qatar', '+974'], ['KW', 'Kuwait', '+965'], ['BH', 'Bahrain', '+973'],
].map(([code, name, dialCode]) => ({
  code,
  name,
  dialCode,
  aliases: code === 'GB' ? ['UK', 'Great Britain', 'Britain', 'England'] : [],
}));

// 
export default function IntroductionForm({
  disclaimer,
}: {
  disclaimer: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<(typeof countryCodes)[number] | null>(null);
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [countryError, setCountryError] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState(phoneCountries.find(({ code }) => code === 'GB')!);
  const [phoneCountryOpen, setPhoneCountryOpen] = useState(false);
  const [phoneCountrySearch, setPhoneCountrySearch] = useState('');
  const [interestError, setInterestError] = useState(false);

  const filteredCountries = countryCodes.filter(({ name, code, aliases }) =>
    `${name} ${code} ${aliases.join(' ')}`.toLowerCase().includes(countrySearch.trim().toLowerCase())
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedCountry) {
      setCountryError(true);
      setCountryOpen(true);
      return;
    }

    const form = new FormData(event.currentTarget);
    const interests = form.getAll('interest').map(String);
    if (interests.length === 0) {
      setInterestError(true);
      return;
    }
    setInterestError(false);
    const phoneNumber = String(form.get('phone') ?? '').trim();

    setIsSubmitting(true);
    setSubmissionError('');
    setSubmitted(false);

    try {
      const response = await fetch('/api/introduction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          phone: phoneNumber ? `${phoneCountry.dialCode} ${phoneNumber}` : '',
          country: selectedCountry.name,
          interests,
          message: form.get('message'),
          consent: Boolean(form.get('consent')),
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'We could not save your enquiry. Please try again.');
      }
      setSubmitted(true);
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : `Submission failed. Please contact ${site.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full min-w-0 space-y-6">
      <div className="grid w-full min-w-0 gap-6 sm:grid-cols-2">
        <label className="block min-w-0 text-label text-muted">
          Name
          <input
            required
            autoComplete="name"
            name="name"
            className="mt-2 block box-border w-full min-w-0 rounded-xl border border-[var(--glass-border)] bg-surface px-4 py-3 text-fg"
          />
        </label>

        <label className="block min-w-0 text-label text-muted">
          Email
          <input
            required
            type="email"
            autoComplete="email"
            name="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Enter an email address in the format name@example.com."
            className="mt-2 block box-border w-full min-w-0 rounded-xl border border-[var(--glass-border)] bg-surface px-4 py-3 text-fg"
          />
        </label>

        <label className="block min-w-0 text-label text-muted">
          Phone number <span className="text-muted">(optional)</span>
          <span
            className="mt-2 box-border flex w-full min-w-0 rounded-xl border border-[var(--glass-border)] bg-surface text-fg"
            onBlur={(event) => {
              const nextTarget = event.relatedTarget;
              if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                setPhoneCountryOpen(false);
                setPhoneCountrySearch('');
              }
            }}
          >
            <span className="relative shrink-0">
              <button
                type="button"
                aria-label={`Phone country code: ${phoneCountry.name} ${phoneCountry.dialCode}`}
                aria-haspopup="listbox"
                aria-expanded={phoneCountryOpen}
                onClick={() => setPhoneCountryOpen((open) => !open)}
                className="flex h-full items-center gap-2 rounded-l-xl px-3 hover:bg-[var(--elevated)]"
              >
                <img src={`https://flagcdn.com/w40/${phoneCountry.code.toLowerCase()}.png`} alt="" width="24" height="18" className="h-[18px] w-6 rounded-sm object-cover" />
                <span>{phoneCountry.dialCode}</span><span aria-hidden="true">⌄</span>
              </button>
              {phoneCountryOpen && (
                <div className="absolute left-0 top-full z-30 mt-2 w-72 overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgb(var(--surface))] shadow-2xl">
                  <input
                    autoFocus
                    type="search"
                    value={phoneCountrySearch}
                    onChange={(event) => setPhoneCountrySearch(event.target.value)}
                    placeholder="Search country or code"
                    aria-label="Search phone country codes"
                    className="w-full border-b border-[var(--glass-border)] bg-transparent px-4 py-3 text-fg outline-none placeholder:text-muted"
                  />
                  <ul role="listbox" aria-label="Phone country codes" className="max-h-56 overflow-y-auto py-1">
                    {filteredPhoneCountries.map((item) => (
                      <li key={item.code} role="option" aria-selected={phoneCountry.code === item.code}>
                        <button type="button" onClick={() => { setPhoneCountry(item); setPhoneCountryOpen(false); setPhoneCountrySearch(''); }} className="flex w-full items-center gap-3 px-4 py-2 text-left text-fg hover:bg-[var(--elevated)]">
                          <img src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`} alt="" width="24" height="18" className="h-[18px] w-6 rounded-sm object-cover" />
                          <span className="flex-1">{item.name}</span><span className="text-muted">{item.dialCode}</span>
                        </button>
                      </li>
                    ))}
                    {filteredPhoneCountries.length === 0 && <li className="px-4 py-3 text-sm text-muted">No countries found</li>}
                  </ul>
                </div>
              )}
            </span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel-national"
              inputMode="tel"
              maxLength={25}
              placeholder="Phone number"
              className="box-border min-w-0 flex-1 rounded-r-xl bg-transparent px-3 py-3 text-fg outline-none placeholder:text-muted"
            />
          </span>
        </label>

        <label className="block min-w-0 text-label text-muted">
          Country of residence
          <span
            className="relative mt-2 block"
            onBlur={(event) => {
              const nextTarget = event.relatedTarget;
              if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                setCountryOpen(false);
                setCountrySearch('');
              }
            }}
          >
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={countryOpen}
              aria-invalid={countryError}
              onClick={() => { setCountryOpen((open) => !open); setCountryError(false); }}
              className="box-border flex w-full min-w-0 items-center justify-between rounded-xl border border-[var(--glass-border)] bg-surface px-4 py-3 text-left text-fg"
            >
              {selectedCountry ? (
                <span className="flex items-center gap-3">
                  <img src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`} alt="" width="24" height="18" className="h-[18px] w-6 rounded-sm object-cover" />
                  {selectedCountry.name}
                </span>
              ) : <span className="text-muted">Select your country</span>}
              <span aria-hidden="true">⌄</span>
            </button>
            {countryOpen && (
              <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[rgb(var(--surface))] shadow-2xl">
                <input
                  autoFocus
                  type="search"
                  value={countrySearch}
                  onChange={(event) => setCountrySearch(event.target.value)}
                  placeholder="Search countries"
                  aria-label="Search countries"
                  className="box-border w-full min-w-0 border-b border-[var(--glass-border)] bg-transparent px-4 py-3 text-fg outline-none placeholder:text-muted"
                />
                <ul role="listbox" aria-label="Countries" className="max-h-60 overflow-y-auto py-1">
                  {filteredCountries.map(({ code, name }) => (
                    <li key={code} role="option" aria-selected={selectedCountry?.code === code}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCountry(countryCodes.find((country) => country.code === code) ?? null);
                          setCountryOpen(false);
                          setCountrySearch('');
                          setCountryError(false);
                        }}
                        className="flex w-full items-center gap-3 px-4 py-2 text-left text-fg hover:bg-[var(--elevated)] focus:bg-[var(--elevated)] focus:outline-none"
                      >
                        <img src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`} alt="" width="24" height="18" loading="lazy" className="h-[18px] w-6 rounded-sm object-cover" />
                        {name}
                      </button>
                    </li>
                  ))}
                  {filteredCountries.length === 0 && <li className="px-4 py-3 text-sm text-muted">No countries found</li>}
                </ul>
              </div>
            )}
          </span>
          {countryError && <span role="alert" className="mt-2 block text-sm text-red-400">Please select your country.</span>}
        </label>

        <fieldset className="min-w-0">
          <legend className="block text-label text-muted">
            Area of interest <span className="text-red-400">*</span>
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
                    onChange={(changeEvent) => {
                      if (changeEvent.currentTarget.form?.querySelector('input[name="interest"]:checked')) {
                        setInterestError(false);
                      }
                    }}
                    className="size-4 accent-current"
                  />
                  <span>{item}</span>
                </label>
              )
            )}
          </div>
          {interestError && <span role="alert" className="mt-2 block text-sm text-red-400">Please select at least one area of interest.</span>}
        </fieldset>
      </div>

      <label className="block min-w-0 text-label text-muted">
        Message
        <textarea
          name="message"
          rows={4}
          className="mt-2 block box-border w-full min-w-0 resize-y rounded-xl border border-[var(--glass-border)] bg-surface px-4 py-3 text-fg"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          type="checkbox"
          name="consent"
          className="mt-1 size-4 accent-current"
        />
        <span>
          I consent to Within Capital using my details to respond to
          this enquiry and acknowledge the important information below.
        </span>
      </label>

      <Button href="#introduction" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting…' : 'Request an introduction'}
      </Button>

      {submitted && (
        <p role="status" className="text-sm text-muted">
          Thank you. Your enquiry has been saved successfully.
        </p>
      )}
      {submissionError && (
        <p role="alert" className="text-sm text-red-400">
          {submissionError}{site.email ? ` If the issue continues, contact ${site.email}.` : ''}
        </p>
      )}

      {/* <div className="border-t border-[var(--glass-border)] pt-6">
        <h3 className="text-label text-fg">Legal disclaimer</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {disclaimer}
        </p>
      </div> */}
      <Disclaimer text={disclaimer} />
    </form>
  );
}
