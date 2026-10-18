import { useEffect, useState } from "react";

type ScrapeStatus = "active" | "idle" | "issue";

type SubIndustry = {
  name: string;
  status: ScrapeStatus;
  company: string;
  lastScraped: string;
  issues: number;
  rate: string;
};

const statusDetails = {
  active: {
    label: "Scraping in progress",
    dot: "bg-[#e4ad33] ring-[#fff4d7]",
  },
  idle: { label: "No scraping", dot: "bg-[#35a66f] ring-[#e1f4e9]" },
  issue: { label: "Scraping issue", dot: "bg-[#d95858] ring-[#fdeaea]" },
};

function SubIndustryRow({
  name,
  status,
  company,
  lastScraped,
  issues,
  rate,
}: SubIndustry) {
  const statusInfo = statusDetails[status];

  return (
    <details className="group/subindustry border-t border-[#eceff3]">
      <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_7rem] items-center px-9 py-3 text-sm transition hover:bg-white [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 items-center gap-2.5 text-[#596577]">
          <span className="grid size-5 shrink-0 place-items-center text-[#76839a]">
            <span className="block h-1.5 w-1.5 rotate-45 border-r-2 border-t-2 border-current transition group-open/subindustry:rotate-[135deg]" />
          </span>
          <span
            className={`size-2 shrink-0 rounded-full ring-4 ${statusInfo.dot}`}
            title={statusInfo.label}
            aria-label={statusInfo.label}
          />
          <span className="truncate">{name}</span>
        </span>
        <span className="text-right font-medium text-[#354052]">1</span>
      </summary>

      <div className="overflow-x-auto border-t border-[#e7eaf0] bg-white px-4 py-3 sm:px-9">
        <div className="min-w-[720px] overflow-hidden rounded-lg border border-[#e6e9ee]">
          <div className="grid grid-cols-[minmax(10rem,1.5fr)_1fr_0.7fr_0.7fr_1fr] bg-[#f7f8fa] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.07em] text-[#919aa8]">
            <span>Company name</span>
            <span>Last scraped</span>
            <span>Issues</span>
            <span>Total rate</span>
            <span>Reclame Aqui</span>
          </div>
          <div className="grid grid-cols-[minmax(10rem,1.5fr)_1fr_0.7fr_0.7fr_1fr] items-center px-4 py-3 text-xs text-[#536073]">
            <span className="flex items-center gap-2 font-medium text-[#303b4c]">
              <span
                className={`size-2 shrink-0 rounded-full ring-4 ${statusInfo.dot}`}
                title={statusInfo.label}
                aria-label={statusInfo.label}
              />
              {company}
            </span>
            <span>{lastScraped}</span>
            <span>{issues}</span>
            <span className="font-semibold text-[#303b4c]">{rate}</span>
            <a
              href="https://www.reclameaqui.com.br/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#3f61d7] hover:text-[#2f4fbf] hover:underline"
            >
              View profile
            </a>
          </div>
        </div>
      </div>
    </details>
  );
}

function NewScrapePage({ onBack }: { onBack: () => void }) {
  return (
    <div className="mx-auto max-w-5xl">
      <button
        type="button"
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-[#6f7988] transition hover:text-[#263142]"
      >
        <span className="text-lg leading-none">←</span>
        Back to scrapes
      </button>

      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-[#64728a]">Setup</p>
        <h1 className="text-3xl font-semibold tracking-[-0.035em] text-[#172033] sm:text-4xl">
          New scrape
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6f7988]">
          Add a company and choose how often its reputation data should be
          collected.
        </p>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          onBack();
        }}
        className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_19rem]"
      >
        <div className="overflow-hidden rounded-2xl border border-[#e4e7ec] bg-white shadow-[0_2px_12px_rgba(23,32,51,0.04)]">
          <div className="border-b border-[#edf0f3] px-5 py-5 sm:px-6">
            <h2 className="text-base font-semibold text-[#263142]">
              Scrape details
            </h2>
            <p className="mt-1 text-sm text-[#7a8494]">
              Tell us which company and segment you want to monitor.
            </p>
          </div>

          <div className="space-y-6 p-5 sm:p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#354052]">
                  Company name
                </span>
                <input
                  type="text"
                  required
                  placeholder="e.g. Café do Ponto"
                  className="h-11 w-full rounded-xl border border-[#dfe3e8] bg-white px-3.5 text-sm text-[#263142] outline-none transition placeholder:text-[#a1a8b3] focus:border-[#8da0e3] focus:ring-3 focus:ring-[#e8edff]"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#354052]">
                  Company website
                </span>
                <input
                  type="url"
                  required
                  placeholder="https://company.com"
                  className="h-11 w-full rounded-xl border border-[#dfe3e8] bg-white px-3.5 text-sm text-[#263142] outline-none transition placeholder:text-[#a1a8b3] focus:border-[#8da0e3] focus:ring-3 focus:ring-[#e8edff]"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#354052]">
                Reclame Aqui profile
              </span>
              <input
                type="url"
                required
                placeholder="https://www.reclameaqui.com.br/empresa/..."
                className="h-11 w-full rounded-xl border border-[#dfe3e8] bg-white px-3.5 text-sm text-[#263142] outline-none transition placeholder:text-[#a1a8b3] focus:border-[#8da0e3] focus:ring-3 focus:ring-[#e8edff]"
              />
              <span className="mt-2 block text-xs text-[#8a94a3]">
                Paste the company&apos;s public profile URL.
              </span>
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#354052]">
                  Industry
                </span>
                <select
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-[#dfe3e8] bg-white px-3.5 text-sm text-[#263142] outline-none transition focus:border-[#8da0e3] focus:ring-3 focus:ring-[#e8edff]"
                >
                  <option value="" disabled>
                    Select an industry
                  </option>
                  <option>Alimentos e Bebidas</option>
                  <option>Casa e Construção</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-[#354052]">
                  Sub-industry
                </span>
                <select
                  required
                  defaultValue=""
                  className="h-11 w-full rounded-xl border border-[#dfe3e8] bg-white px-3.5 text-sm text-[#263142] outline-none transition focus:border-[#8da0e3] focus:ring-3 focus:ring-[#e8edff]"
                >
                  <option value="" disabled>
                    Select a sub-industry
                  </option>
                  <option>Cafés</option>
                  <option>Bebidas Alcoolicas</option>
                  <option>Cafeterias</option>
                  <option>Carnes</option>
                  <option>Desemtupidora e detetizadora</option>
                  <option>Eletrodomésticos</option>
                  <option>Jardim paisagismo e piscina</option>
                </select>
              </label>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-medium text-[#354052]">
                Scraping frequency
              </legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Once", "Run one time"],
                  ["Daily", "Every 24 hours"],
                  ["Weekly", "Every Monday"],
                ].map(([title, description], index) => (
                  <label key={title} className="cursor-pointer">
                    <input
                      type="radio"
                      name="frequency"
                      value={title}
                      defaultChecked={index === 1}
                      className="peer sr-only"
                    />
                    <span className="block rounded-xl border border-[#dfe3e8] p-3.5 transition hover:border-[#bbc5d3] peer-checked:border-[#6f87dc] peer-checked:bg-[#f4f6ff] peer-checked:ring-1 peer-checked:ring-[#6f87dc]">
                      <span className="block text-sm font-semibold text-[#354052]">
                        {title}
                      </span>
                      <span className="mt-1 block text-xs text-[#8993a2]">
                        {description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-[#edf0f3] bg-[#fafbfc] px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl border border-[#dfe3e8] bg-white px-4 py-2.5 text-sm font-semibold text-[#536073] transition hover:bg-[#f5f6f8]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#3f61d7] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_5px_14px_rgba(63,97,215,0.22)] transition hover:bg-[#3455c7]"
            >
              Create scrape
            </button>
          </div>
        </div>

        <aside className="rounded-2xl border border-[#e4e7ec] bg-white p-5 shadow-[0_2px_12px_rgba(23,32,51,0.04)]">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl bg-[#fff5dc]">
              <span className="size-2.5 rounded-full bg-[#e4ad33] ring-4 ring-[#fff0c5]" />
            </span>
            <div>
              <h2 className="text-sm font-semibold text-[#263142]">
                Ready to scrape
              </h2>
              <p className="text-xs text-[#8993a2]">Starts after creation</p>
            </div>
          </div>
          <div className="border-t border-[#edf0f3] pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#9aa2af]">
              Before you start
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-5 text-[#687386]">
              <li className="flex gap-2.5">
                <span className="mt-1 text-[#35a66f]">✓</span>
                Use the company&apos;s public Reclame Aqui profile.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1 text-[#35a66f]">✓</span>
                Confirm the correct industry and sub-industry.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1 text-[#35a66f]">✓</span>
                Choose a frequency that matches your reporting needs.
              </li>
            </ul>
          </div>
        </aside>
      </form>
    </div>
  );
}

function TaxonomySearcherPage() {
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [companySearchStatus, setCompanySearchStatus] = useState<
    "idle" | "searching" | "complete"
  >("idle");
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importComplete, setImportComplete] = useState(false);

  const taxonomy = [
    {
      industry: "Alimentos e Bebidas",
      subIndustries: ["Cafés", "Bebidas Alcoolicas", "Cafeterias", "Carnes"],
    },
    {
      industry: "Casa e Construção",
      subIndustries: [
        "Desemtupidora e detetizadora",
        "Eletrodomésticos",
        "Jardim paisagismo e piscina",
      ],
    },
  ];

  const companiesBySubIndustry: Record<string, string[]> = {
    Cafés: ["Café do Ponto", "Orfeu Cafés"],
    "Bebidas Alcoolicas": ["Ambev", "Grupo Petrópolis"],
    Cafeterias: ["Starbucks Brasil", "The Coffee"],
    Carnes: ["Friboi", "Swift"],
    "Desemtupidora e detetizadora": [
      "Desentupidora Central",
      "Pragtec Serviços",
    ],
    Eletrodomésticos: ["Electrolux Brasil", "Brastemp"],
    "Jardim paisagismo e piscina": ["Jardim & Cia", "Piscinas Splash"],
  };

  const companyResultGroups = taxonomy
    .filter(
      ({ industry, subIndustries }) =>
        selectedItems.includes(industry) ||
        subIndustries.some((item) => selectedItems.includes(item)),
    )
    .map(({ industry, subIndustries }) => ({
      industry,
      subIndustries: selectedItems.includes(industry)
        ? subIndustries
        : subIndustries.filter((item) => selectedItems.includes(item)),
    }));

  const foundCompanies = companyResultGroups.flatMap(
    ({ industry, subIndustries }) =>
      subIndustries.flatMap((subIndustry) =>
        (companiesBySubIndustry[subIndustry] ?? []).map((company) => ({
          company,
          industry,
          subIndustry,
        })),
      ),
  );

  useEffect(() => {
    if (companySearchStatus !== "searching") {
      return;
    }

    const timer = window.setTimeout(() => {
      setCompanySearchStatus("complete");
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [companySearchStatus]);

  const toggleItem = (item: string) => {
    setSelectedItems((current) =>
      current.includes(item)
        ? current.filter((selected) => selected !== item)
        : [...current, item],
    );
    setCompanySearchStatus("idle");
    setImportComplete(false);
    setIsImportModalOpen(false);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-[#64728a]">Discovery</p>
        <h1 className="text-3xl font-semibold tracking-[-0.035em] text-[#172033] sm:text-4xl">
          Reclame Aqui Searcher
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6f7988]">
          Explore the industries and sub-industries available on Reclame Aqui,
          then select the segments where you want to find companies.
        </p>
      </div>

      <section className="overflow-hidden rounded-2xl border border-[#e4e7ec] bg-white shadow-[0_2px_12px_rgba(23,32,51,0.04)]">
        <div className="flex flex-col gap-5 border-b border-[#edf0f3] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#eff3ff] text-[#3f61d7]">
              <span className="relative block size-4 rounded-full border-2 border-current after:absolute after:-bottom-1 after:-right-1 after:h-1.5 after:w-0.5 after:-rotate-45 after:rounded-full after:bg-current" />
            </span>
            <div>
              <h2 className="text-base font-semibold text-[#263142]">
                Reclame Aqui
              </h2>
              <p className="mt-1 text-sm text-[#7a8494]">
                Search the current industry taxonomy.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setHasSearched(true);
              setCompanySearchStatus("idle");
              setImportComplete(false);
            }}
            className="rounded-xl bg-[#3f61d7] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_5px_14px_rgba(63,97,215,0.22)] transition hover:bg-[#3455c7]"
          >
            Search industry and sub-industry
          </button>
        </div>

        {!hasSearched ? (
          <div className="flex min-h-72 flex-col items-center justify-center px-6 py-12 text-center">
            <span className="mb-5 grid size-14 place-items-center rounded-2xl bg-[#f3f5f8]">
              <span className="grid grid-cols-2 gap-1">
                <span className="size-2 rounded-sm bg-[#6f87dc]" />
                <span className="size-2 rounded-sm bg-[#a9b7e9]" />
                <span className="size-2 rounded-sm bg-[#a9b7e9]" />
                <span className="size-2 rounded-sm bg-[#6f87dc]" />
              </span>
            </span>
            <h3 className="text-base font-semibold text-[#263142]">
              No taxonomy loaded yet
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#7a8494]">
              Run a search to load industries and sub-industries from Reclame
              Aqui.
            </p>
          </div>
        ) : (
          <>
            <div className="border-b border-[#edf0f3] bg-[#fafbfc] px-5 py-3 sm:px-6">
              <p className="text-xs font-medium text-[#7a8494]">
                {taxonomy.length} industries and{" "}
                {taxonomy.reduce(
                  (total, item) => total + item.subIndustries.length,
                  0,
                )}{" "}
                sub-industries found
              </p>
            </div>

            <div className="divide-y divide-[#edf0f3]">
              {taxonomy.map(({ industry, subIndustries }) => (
                <div key={industry} className="px-5 py-5 sm:px-6">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(industry)}
                      onChange={() => toggleItem(industry)}
                      className="size-4 rounded border-[#cdd3dc] accent-[#3f61d7]"
                    />
                    <span className="text-sm font-semibold text-[#263142]">
                      {industry}
                    </span>
                    <span className="rounded-full bg-[#f0f2f5] px-2 py-0.5 text-[11px] font-medium text-[#768193]">
                      Industry
                    </span>
                  </label>

                  <div className="ml-2 mt-4 grid gap-2 border-l border-[#e2e6eb] pl-5 sm:grid-cols-2">
                    {subIndustries.map((subIndustry) => (
                      <label
                        key={subIndustry}
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition hover:bg-[#f7f8fa]"
                      >
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(subIndustry)}
                          onChange={() => toggleItem(subIndustry)}
                          className="size-4 rounded border-[#cdd3dc] accent-[#3f61d7]"
                        />
                        <span className="min-w-0 truncate text-sm text-[#596577]">
                          {subIndustry}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-[#edf0f3] bg-[#fafbfc] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-sm text-[#7a8494]">
                {selectedItems.length === 0
                  ? "Select at least one taxonomy item."
                  : `${selectedItems.length} item${
                      selectedItems.length === 1 ? "" : "s"
                    } selected`}
              </p>
              <button
                type="button"
                disabled={
                  selectedItems.length === 0 ||
                  companySearchStatus === "searching"
                }
                onClick={() => setCompanySearchStatus("searching")}
                className="rounded-xl bg-[#172033] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#26344d] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {companySearchStatus === "searching"
                  ? "Finding companies..."
                  : "Find Companies"}
              </button>
            </div>
          </>
        )}
      </section>

      {companySearchStatus === "searching" && (
        <div
          role="status"
          className="mt-5 flex items-center gap-3 rounded-xl border border-[#f0dfb5] bg-[#fff9ea] px-4 py-3 text-sm text-[#8a6a1f]"
        >
          <span className="size-2 animate-pulse rounded-full bg-[#e4ad33] ring-4 ring-[#fff0c5]" />
          Company search is running for {selectedItems.length} selected taxonomy
          item{selectedItems.length === 1 ? "" : "s"}.
        </div>
      )}

      {companySearchStatus === "complete" && (
        <>
          <div
            role="status"
            className="mt-5 flex items-center gap-3 rounded-xl border border-[#d8e9df] bg-[#f2faf5] px-4 py-3 text-sm text-[#397557]"
          >
            <span className="size-2 rounded-full bg-[#35a66f] ring-4 ring-[#dff2e7]" />
            Company search complete. Results are ready below.
          </div>

          <section className="mt-5 overflow-hidden rounded-2xl border border-[#e4e7ec] bg-white shadow-[0_2px_12px_rgba(23,32,51,0.04)]">
            <div className="flex flex-col gap-3 border-b border-[#edf0f3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <h2 className="text-sm font-semibold text-[#263142]">
                Companies found
              </h2>
              <button
                type="button"
                onClick={() => setIsImportModalOpen(true)}
                className="rounded-xl bg-[#3f61d7] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(63,97,215,0.18)] transition hover:bg-[#3455c7]"
              >
                Import To Taxonomy
              </button>
            </div>
            <div className="divide-y divide-[#edf0f3]">
              {companyResultGroups.map(({ industry, subIndustries }) => {
                  return (
                    <div key={industry} className="px-5 py-5 sm:px-6">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <h3 className="text-sm font-semibold text-[#263142]">
                          {industry}
                        </h3>
                        <span className="rounded-full bg-[#eff3ff] px-2.5 py-1 text-xs font-medium text-[#536bc1]">
                          {subIndustries.reduce(
                            (total, item) =>
                              total +
                              (companiesBySubIndustry[item]?.length ?? 0),
                            0,
                          )}{" "}
                          companies
                        </span>
                      </div>

                      <div className="space-y-2">
                        {subIndustries.flatMap((subIndustry) =>
                          (companiesBySubIndustry[subIndustry] ?? []).map(
                            (company) => (
                              <div
                                key={`${subIndustry}-${company}`}
                                className="flex flex-col gap-2 rounded-xl border border-[#e8ebef] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                              >
                                <div>
                                  <p className="text-sm font-medium text-[#354052]">
                                    {company}
                                  </p>
                                  <p className="mt-0.5 text-xs text-[#8993a2]">
                                    {subIndustry}
                                  </p>
                                </div>
                                <a
                                  href="https://www.reclameaqui.com.br/"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-xs font-semibold text-[#3f61d7] hover:text-[#2f4fbf] hover:underline"
                                >
                                  View on Reclame Aqui
                                </a>
                              </div>
                            ),
                          ),
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>

          {importComplete && (
            <div
              role="status"
              className="mt-5 flex items-center gap-3 rounded-xl border border-[#d8e9df] bg-[#f2faf5] px-4 py-3 text-sm text-[#397557]"
            >
              <span className="size-2 rounded-full bg-[#35a66f] ring-4 ring-[#dff2e7]" />
              {foundCompanies.length} companies imported into your taxonomy.
            </div>
          )}
        </>
      )}

      {isImportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close import dialog"
            onClick={() => setIsImportModalOpen(false)}
            className="absolute inset-0 bg-[#172033]/45 backdrop-blur-[2px]"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="import-taxonomy-title"
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/60 bg-white shadow-[0_24px_80px_rgba(23,32,51,0.25)]"
          >
            <div className="flex items-start justify-between gap-5 border-b border-[#edf0f3] px-5 py-5 sm:px-6">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#7c89b6]">
                  Taxonomy mapping
                </p>
                <h2
                  id="import-taxonomy-title"
                  className="text-xl font-semibold tracking-[-0.02em] text-[#263142]"
                >
                  Import companies to taxonomy
                </h2>
                <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#7a8494]">
                  Review where each company belongs in your Industry →
                  Sub-industry → Company structure.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setIsImportModalOpen(false)}
                className="grid size-9 shrink-0 place-items-center rounded-lg text-xl text-[#7a8494] transition hover:bg-[#f2f4f7] hover:text-[#263142]"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setIsImportModalOpen(false);
                setImportComplete(true);
              }}
              className="flex min-h-0 flex-1 flex-col"
            >
              <div className="overflow-y-auto p-5 sm:p-6">
                <div className="mb-4 hidden grid-cols-[minmax(10rem,1.2fr)_1fr_1fr] gap-3 px-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#929ba8] sm:grid">
                  <span>Company</span>
                  <span>Industry</span>
                  <span>Sub-industry</span>
                </div>
                <div className="space-y-3">
                  {foundCompanies.map(
                    ({ company, industry, subIndustry }) => (
                      <div
                        key={`${industry}-${subIndustry}-${company}`}
                        className="grid gap-3 rounded-xl border border-[#e6e9ee] bg-[#fafbfc] p-3 sm:grid-cols-[minmax(10rem,1.2fr)_1fr_1fr] sm:items-center"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#eff3ff] text-xs font-semibold text-[#536bc1]">
                            {company
                              .split(" ")
                              .slice(0, 2)
                              .map((word) => word[0])
                              .join("")}
                          </span>
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-[#354052]">
                              {company}
                            </p>
                            <p className="mt-0.5 text-xs text-[#929ba8]">
                              Found on Reclame Aqui
                            </p>
                          </div>
                        </div>

                        <label>
                          <span className="mb-1.5 block text-xs font-medium text-[#7a8494] sm:hidden">
                            Industry
                          </span>
                          <select
                            defaultValue={industry}
                            aria-label={`Industry for ${company}`}
                            className="h-10 w-full rounded-lg border border-[#dfe3e8] bg-white px-3 text-xs text-[#354052] outline-none transition focus:border-[#8da0e3] focus:ring-3 focus:ring-[#e8edff]"
                          >
                            {taxonomy.map((item) => (
                              <option
                                key={item.industry}
                                value={item.industry}
                              >
                                {item.industry}
                              </option>
                            ))}
                          </select>
                        </label>

                        <label>
                          <span className="mb-1.5 block text-xs font-medium text-[#7a8494] sm:hidden">
                            Sub-industry
                          </span>
                          <select
                            defaultValue={subIndustry}
                            aria-label={`Sub-industry for ${company}`}
                            className="h-10 w-full rounded-lg border border-[#dfe3e8] bg-white px-3 text-xs text-[#354052] outline-none transition focus:border-[#8da0e3] focus:ring-3 focus:ring-[#e8edff]"
                          >
                            {taxonomy.map((item) => (
                              <optgroup
                                key={item.industry}
                                label={item.industry}
                              >
                                {item.subIndustries.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        </label>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-[#edf0f3] bg-[#fafbfc] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="text-xs text-[#7a8494]">
                  {foundCompanies.length} companies ready to import
                </p>
                <div className="flex flex-col-reverse gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setIsImportModalOpen(false)}
                    className="rounded-xl border border-[#dfe3e8] bg-white px-4 py-2.5 text-sm font-semibold text-[#536073] transition hover:bg-[#f5f6f8]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-[#3f61d7] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_5px_14px_rgba(63,97,215,0.2)] transition hover:bg-[#3455c7]"
                  >
                    Import companies
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

type ManagedCompany = { id: string; name: string };
type ManagedSubIndustry = {
  id: string;
  name: string;
  companies: ManagedCompany[];
};
type ManagedIndustry = {
  id: string;
  name: string;
  subIndustries: ManagedSubIndustry[];
};
type DraggedTaxonomyItem = {
  level: "industry" | "sub-industry" | "company";
  id: string;
};

function ManageTaxonomyPage() {
  const [manageLevel, setManageLevel] = useState<
    "industry" | "sub-industry" | "company" | null
  >(null);
  const [draggedItem, setDraggedItem] =
    useState<DraggedTaxonomyItem | null>(null);
  const [taxonomy, setTaxonomy] = useState<ManagedIndustry[]>([
    {
      id: "food",
      name: "Alimentos e Bebidas",
      subIndustries: [
        {
          id: "coffee",
          name: "Cafés",
          companies: [
            { id: "cafe-ponto", name: "Café do Ponto" },
            { id: "orfeu", name: "Orfeu Cafés" },
          ],
        },
        {
          id: "drinks",
          name: "Bebidas Alcoolicas",
          companies: [
            { id: "ambev", name: "Ambev" },
            { id: "petropolis", name: "Grupo Petrópolis" },
          ],
        },
        {
          id: "cafeterias",
          name: "Cafeterias",
          companies: [
            { id: "starbucks", name: "Starbucks Brasil" },
            { id: "the-coffee", name: "The Coffee" },
          ],
        },
      ],
    },
    {
      id: "home",
      name: "Casa e Construção",
      subIndustries: [
        {
          id: "appliances",
          name: "Eletrodomésticos",
          companies: [
            { id: "electrolux", name: "Electrolux Brasil" },
            { id: "brastemp", name: "Brastemp" },
          ],
        },
        {
          id: "garden",
          name: "Jardim paisagismo e piscina",
          companies: [
            { id: "jardim-cia", name: "Jardim & Cia" },
            { id: "splash", name: "Piscinas Splash" },
          ],
        },
      ],
    },
  ]);

  const mergeIndustries = (sourceId: string, targetId: string) => {
    if (sourceId === targetId) return;
    setTaxonomy((current) => {
      const source = current.find((item) => item.id === sourceId);
      if (!source) return current;
      return current
        .filter((item) => item.id !== sourceId)
        .map((item) =>
          item.id === targetId
            ? {
                ...item,
                subIndustries: [
                  ...item.subIndustries,
                  ...source.subIndustries,
                ],
              }
            : item,
        );
    });
    setDraggedItem(null);
  };

  const moveSubIndustry = (subIndustryId: string, targetIndustryId: string) => {
    setTaxonomy((current) => {
      const source = current
        .flatMap((industry) => industry.subIndustries)
        .find((item) => item.id === subIndustryId);
      if (!source) return current;
      return current.map((industry) => ({
        ...industry,
        subIndustries:
          industry.id === targetIndustryId
            ? industry.subIndustries.some((item) => item.id === subIndustryId)
              ? industry.subIndustries
              : [...industry.subIndustries, source]
            : industry.subIndustries.filter(
                (item) => item.id !== subIndustryId,
              ),
      }));
    });
    setDraggedItem(null);
  };

  const mergeSubIndustries = (sourceId: string, targetId: string) => {
    if (sourceId === targetId) return;
    setTaxonomy((current) => {
      const source = current
        .flatMap((industry) => industry.subIndustries)
        .find((item) => item.id === sourceId);
      if (!source) return current;
      return current.map((industry) => ({
        ...industry,
        subIndustries: industry.subIndustries
          .filter((item) => item.id !== sourceId)
          .map((item) =>
            item.id === targetId
              ? { ...item, companies: [...item.companies, ...source.companies] }
              : item,
          ),
      }));
    });
    setDraggedItem(null);
  };

  const moveCompany = (companyId: string, targetSubIndustryId: string) => {
    setTaxonomy((current) => {
      const company = current
        .flatMap((industry) => industry.subIndustries)
        .flatMap((subIndustry) => subIndustry.companies)
        .find((item) => item.id === companyId);
      if (!company) return current;
      return current.map((industry) => ({
        ...industry,
        subIndustries: industry.subIndustries.map((subIndustry) => ({
          ...subIndustry,
          companies:
            subIndustry.id === targetSubIndustryId
              ? subIndustry.companies.some((item) => item.id === companyId)
                ? subIndustry.companies
                : [...subIndustry.companies, company]
              : subIndustry.companies.filter((item) => item.id !== companyId),
        })),
      }));
    });
    setDraggedItem(null);
  };

  const totalCompanies = taxonomy.reduce(
    (total, industry) =>
      total +
      industry.subIndustries.reduce(
        (subtotal, subIndustry) => subtotal + subIndustry.companies.length,
        0,
      ),
    0,
  );

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium text-[#64728a]">Taxonomy</p>
        <h1 className="text-3xl font-semibold tracking-[-0.035em] text-[#172033] sm:text-4xl">
          Manage Taxonomy
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6f7988]">
          Review and organize imported industries, sub-industries, and
          companies.
        </p>
      </div>

      <section className="overflow-hidden rounded-2xl border border-[#e4e7ec] bg-white shadow-[0_2px_12px_rgba(23,32,51,0.04)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#edf0f3] px-5 py-4 sm:px-6">
          <h2 className="text-sm font-semibold text-[#263142]">
            Imported taxonomy
          </h2>
          <div className="flex gap-2 text-xs text-[#687386]">
            <span className="rounded-full bg-[#f1f3f6] px-2.5 py-1">
              {taxonomy.length} industries
            </span>
            <span className="rounded-full bg-[#f1f3f6] px-2.5 py-1">
              {totalCompanies} companies
            </span>
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_6rem_6rem] border-b border-[#edf0f3] bg-[#fafbfc] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#929ba8] sm:px-6">
          <span>Industry</span>
          <span className="text-right">Items</span>
          <span />
        </div>

        <div className="divide-y divide-[#edf0f3]">
          {taxonomy.map((industry) => (
            <details key={industry.id} className="group/industry">
              <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_6rem_6rem] items-center px-5 py-4 transition hover:bg-[#fafbfc] [&::-webkit-details-marker]:hidden sm:px-6">
                <span className="flex min-w-0 items-center gap-3 text-sm font-semibold text-[#263142]">
                  <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[#f1f4fc] text-[#536bc1]">
                    <span className="block h-2 w-2 rotate-45 border-r-2 border-t-2 border-current transition group-open/industry:rotate-[135deg]" />
                  </span>
                  <span className="truncate">{industry.name}</span>
                </span>
                <span className="text-right text-sm text-[#687386]">
                  {industry.subIndustries.length}
                </span>
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setManageLevel("industry");
                  }}
                  className="justify-self-end rounded-lg border border-[#dfe3e8] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#536073] transition hover:border-[#bbc5d3] hover:bg-[#f7f8fa]"
                >
                  Manage
                </button>
              </summary>

              <div className="border-t border-[#edf0f3] bg-[#fafbfc] px-5 py-2 sm:px-6">
                {industry.subIndustries.map((subIndustry) => (
                  <details
                    key={subIndustry.id}
                    className="group/sub border-b border-[#e9ecf0] last:border-b-0"
                  >
                    <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_6rem_6rem] items-center px-7 py-3 [&::-webkit-details-marker]:hidden">
                      <span className="flex min-w-0 items-center gap-2.5 text-sm text-[#536073]">
                        <span className="grid size-5 shrink-0 place-items-center">
                          <span className="block h-1.5 w-1.5 rotate-45 border-r-2 border-t-2 border-current transition group-open/sub:rotate-[135deg]" />
                        </span>
                        <span className="truncate">{subIndustry.name}</span>
                      </span>
                      <span className="text-right text-xs text-[#8993a2]">
                        {subIndustry.companies.length}
                      </span>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          setManageLevel("sub-industry");
                        }}
                        className="justify-self-end rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#64728a] transition hover:bg-white hover:text-[#354052]"
                      >
                        Manage
                      </button>
                    </summary>

                    <div className="border-t border-[#e9ecf0] bg-white px-8 py-2">
                      {subIndustry.companies.map((company) => (
                        <div
                          key={company.id}
                          className="grid grid-cols-[minmax(0,1fr)_6rem] items-center border-b border-[#f0f2f5] py-3 pl-6 last:border-b-0"
                        >
                          <span className="text-sm text-[#687386]">
                            {company.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => setManageLevel("company")}
                            className="justify-self-end rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#64728a] transition hover:bg-[#f5f6f8] hover:text-[#354052]"
                          >
                            Manage
                          </button>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      {manageLevel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close management dialog"
            onClick={() => setManageLevel(null)}
            className="absolute inset-0 bg-[#172033]/45 backdrop-blur-[2px]"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="manage-taxonomy-title"
            className="relative flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_rgba(23,32,51,0.28)]"
          >
            <div className="flex items-start justify-between gap-5 border-b border-[#edf0f3] px-5 py-5 sm:px-6">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#7c89b6]">
                  Drag and drop
                </p>
                <h2
                  id="manage-taxonomy-title"
                  className="text-xl font-semibold text-[#263142]"
                >
                  Manage{" "}
                  {manageLevel === "industry"
                    ? "industries"
                    : manageLevel === "sub-industry"
                      ? "sub-industries"
                      : "companies"}
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-[#7a8494]">
                  {manageLevel === "industry"
                    ? "Drop one industry onto another to merge them."
                    : manageLevel === "sub-industry"
                      ? "Drop onto an industry to move, or onto another sub-industry to merge."
                      : "Drop a company into another sub-industry to move it."}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setManageLevel(null)}
                aria-label="Close"
                className="grid size-9 shrink-0 place-items-center rounded-lg text-xl text-[#7a8494] transition hover:bg-[#f2f4f7]"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto bg-[#fafbfc] p-5 sm:p-6">
              {manageLevel === "industry" && (
                <div className="space-y-3">
                  {taxonomy.map((industry) => (
                    <div
                      key={industry.id}
                      draggable
                      onDragStart={() =>
                        setDraggedItem({
                          level: "industry",
                          id: industry.id,
                        })
                      }
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={() => {
                        if (draggedItem?.level === "industry") {
                          mergeIndustries(draggedItem.id, industry.id);
                        }
                      }}
                      className="flex cursor-grab items-center justify-between rounded-xl border border-[#dfe3e8] bg-white p-4 transition hover:border-[#aeb9c8] active:cursor-grabbing"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#354052]">
                          {industry.name}
                        </p>
                        <p className="mt-1 text-xs text-[#8993a2]">
                          {industry.subIndustries.length} sub-industries
                        </p>
                      </div>
                      <span className="text-lg tracking-[-0.15em] text-[#9aa2af]">
                        ⋮⋮
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {manageLevel === "sub-industry" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {taxonomy.map((industry) => (
                    <div
                      key={industry.id}
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={() => {
                        if (draggedItem?.level === "sub-industry") {
                          moveSubIndustry(draggedItem.id, industry.id);
                        }
                      }}
                      className="min-h-48 rounded-xl border border-dashed border-[#cfd5de] bg-white p-3"
                    >
                      <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-[0.06em] text-[#687386]">
                        {industry.name}
                      </p>
                      <div className="space-y-2">
                        {industry.subIndustries.map((subIndustry) => (
                          <div
                            key={subIndustry.id}
                            draggable
                            onDragStart={() =>
                              setDraggedItem({
                                level: "sub-industry",
                                id: subIndustry.id,
                              })
                            }
                            onDragOver={(event) => event.preventDefault()}
                            onDrop={(event) => {
                              event.stopPropagation();
                              if (draggedItem?.level === "sub-industry") {
                                mergeSubIndustries(
                                  draggedItem.id,
                                  subIndustry.id,
                                );
                              }
                            }}
                            className="flex cursor-grab items-center justify-between rounded-lg border border-[#e2e6eb] bg-[#fafbfc] px-3 py-2.5 text-sm text-[#536073]"
                          >
                            <span className="truncate">{subIndustry.name}</span>
                            <span className="text-[#a0a8b4]">⋮⋮</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {manageLevel === "company" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {taxonomy.flatMap((industry) =>
                    industry.subIndustries.map((subIndustry) => (
                      <div
                        key={subIndustry.id}
                        onDragOver={(event) => event.preventDefault()}
                        onDrop={() => {
                          if (draggedItem?.level === "company") {
                            moveCompany(draggedItem.id, subIndustry.id);
                          }
                        }}
                        className="min-h-36 rounded-xl border border-dashed border-[#cfd5de] bg-white p-3"
                      >
                        <p className="text-xs font-semibold text-[#536073]">
                          {subIndustry.name}
                        </p>
                        <p className="mb-3 mt-0.5 text-[10px] text-[#9aa2af]">
                          {industry.name}
                        </p>
                        <div className="space-y-2">
                          {subIndustry.companies.map((company) => (
                            <div
                              key={company.id}
                              draggable
                              onDragStart={() =>
                                setDraggedItem({
                                  level: "company",
                                  id: company.id,
                                })
                              }
                              className="flex cursor-grab items-center justify-between rounded-lg border border-[#e2e6eb] bg-[#fafbfc] px-3 py-2.5 text-sm text-[#536073]"
                            >
                              <span>{company.name}</span>
                              <span className="text-[#a0a8b4]">⋮⋮</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )),
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-end border-t border-[#edf0f3] px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => setManageLevel(null)}
                className="rounded-xl bg-[#172033] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#26344d]"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [segmentSearch, setSegmentSearch] = useState("");
  const [currentPage, setCurrentPage] = useState<
    "scrapes" | "new-scrape" | "taxonomy-searcher" | "manage-taxonomy"
  >("scrapes");
  const [taxonomyMenuOpen, setTaxonomyMenuOpen] = useState(true);

  const matchesSegmentSearch = (
    subIndustry: Pick<SubIndustry, "name" | "company">,
    industry: string,
  ) => {
    const query = segmentSearch.trim().toLocaleLowerCase("pt-BR");

    return (
      !query ||
      [industry, subIndustry.name, subIndustry.company].some((value) =>
        value.toLocaleLowerCase("pt-BR").includes(query),
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#18212f]">
      <header className="sticky top-0 z-20 flex h-18 items-center justify-between border-b border-[#e5e8ed] bg-white px-5 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#172033] text-sm font-semibold text-white">
            AM
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[-0.01em]">
              Alex Morgan
            </p>
            <p className="text-xs text-[#7a8494]">Content administrator</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsLoggedIn(true)}
            disabled={isLoggedIn}
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#4d5868] transition hover:bg-[#f2f4f7] hover:text-[#18212f] disabled:cursor-default disabled:opacity-40"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => setIsLoggedIn(false)}
            disabled={!isLoggedIn}
            className="rounded-lg border border-[#dfe3e8] bg-white px-3.5 py-2 text-sm font-medium text-[#263142] shadow-sm transition hover:border-[#cbd1d9] hover:bg-[#f8f9fb] disabled:cursor-default disabled:opacity-40"
          >
            Log out
          </button>
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-[1600px]">
        <aside className="w-20 shrink-0 border-r border-[#e5e8ed] bg-white px-3 py-6 sm:w-64 sm:px-5">
          <p className="mb-3 hidden px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9aa2af] sm:block">
            Workspace
          </p>
          <nav aria-label="Main navigation">
            <a
              href="#scrapes"
              onClick={() => setCurrentPage("scrapes")}
              aria-current={
                currentPage === "scrapes" || currentPage === "new-scrape"
                  ? "page"
                  : undefined
              }
              className={`flex items-center justify-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition sm:justify-start ${
                currentPage === "scrapes" || currentPage === "new-scrape"
                  ? "bg-[#eff3ff] text-[#3b5ccc]"
                  : "text-[#687386] hover:bg-[#f5f6f8] hover:text-[#263142]"
              }`}
            >
              <span className="grid size-8 place-items-center rounded-lg bg-white shadow-[0_1px_2px_rgba(23,32,51,0.08)]">
                <span className="relative block h-4 w-4">
                  <span className="absolute inset-x-0 top-0 h-1 rounded-sm bg-current" />
                  <span className="absolute inset-x-0 top-1.5 h-1 rounded-sm bg-current opacity-70" />
                  <span className="absolute inset-x-0 top-3 h-1 rounded-sm bg-current opacity-40" />
                </span>
              </span>
              <span className="hidden sm:block">Scrapes</span>
              <span className="ml-auto hidden rounded-full bg-white px-2 py-0.5 text-xs font-medium text-[#7180a8] sm:block">
                12
              </span>
            </a>
            <button
              type="button"
              onClick={() => setTaxonomyMenuOpen((isOpen) => !isOpen)}
              aria-expanded={taxonomyMenuOpen}
              className={`mt-1 flex w-full items-center justify-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition sm:justify-start ${
                currentPage === "taxonomy-searcher" ||
                currentPage === "manage-taxonomy"
                  ? "bg-[#eff3ff] font-semibold text-[#3b5ccc]"
                  : "text-[#687386] hover:bg-[#f5f6f8] hover:text-[#263142]"
              }`}
            >
              <span className="grid size-8 shrink-0 place-items-center">
                <span className="relative block h-4 w-4">
                  <span className="absolute left-1/2 top-0 size-1.5 -translate-x-1/2 rounded-sm bg-current" />
                  <span className="absolute left-1/2 top-1.5 h-1.5 w-px -translate-x-1/2 bg-current opacity-70" />
                  <span className="absolute left-1 top-3 h-px w-2 bg-current opacity-70" />
                  <span className="absolute bottom-0 left-0 size-1.5 rounded-sm bg-current opacity-70" />
                  <span className="absolute bottom-0 right-0 size-1.5 rounded-sm bg-current opacity-70" />
                </span>
              </span>
              <span className="hidden text-left sm:block">Taxonomy</span>
              <span
                className={`ml-auto hidden h-2 w-2 border-b-2 border-r-2 border-current transition-transform sm:block ${
                  taxonomyMenuOpen ? "rotate-[225deg]" : "rotate-45"
                }`}
              />
            </button>
            {taxonomyMenuOpen && (
              <div className="ml-7 hidden border-l border-[#e2e6eb] py-1 pl-3 sm:block">
                <button
                  type="button"
                  onClick={() => setCurrentPage("taxonomy-searcher")}
                  aria-current={
                    currentPage === "taxonomy-searcher"
                      ? "page"
                      : undefined
                  }
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition ${
                    currentPage === "taxonomy-searcher"
                      ? "font-semibold text-[#3f61d7]"
                      : "font-medium text-[#7a8494] hover:bg-[#f5f6f8] hover:text-[#354052]"
                  }`}
                >
                  <span className="relative ml-0.5 mr-1 block size-3 shrink-0 rounded-full border-2 border-current after:absolute after:-bottom-1 after:-right-1 after:h-1.5 after:w-0.5 after:-rotate-45 after:rounded-full after:bg-current" />
                  Reclame Aqui Search
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage("manage-taxonomy")}
                  aria-current={
                    currentPage === "manage-taxonomy" ? "page" : undefined
                  }
                  className={`mt-0.5 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs transition ${
                    currentPage === "manage-taxonomy"
                      ? "font-semibold text-[#3f61d7]"
                      : "font-medium text-[#7a8494] hover:bg-[#f5f6f8] hover:text-[#354052]"
                  }`}
                >
                  <span className="relative ml-0.5 mr-1 block h-3 w-3 shrink-0">
                    <span className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-current" />
                    <span className="absolute inset-x-0 top-[5px] h-0.5 rounded-full bg-current opacity-75" />
                    <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-current opacity-50" />
                  </span>
                  Manage Taxonomy
                </button>
              </div>
            )}
            <a
              href="#config"
              className="mt-1 flex items-center justify-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#687386] transition hover:bg-[#f5f6f8] hover:text-[#263142] sm:justify-start"
            >
              <span className="grid size-8 place-items-center">
                <span className="size-4 rounded-full border-[3px] border-current opacity-70" />
              </span>
              <span className="hidden sm:block">Config</span>
            </a>
            <a
              href="#insights"
              className="mt-1 flex items-center justify-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#687386] transition hover:bg-[#f5f6f8] hover:text-[#263142] sm:justify-start"
            >
              <span className="grid size-8 place-items-center">
                <span className="flex h-4 w-4 items-end gap-0.5">
                  <span className="h-2 w-1 rounded-sm bg-current opacity-50" />
                  <span className="h-4 w-1 rounded-sm bg-current opacity-70" />
                  <span className="h-3 w-1 rounded-sm bg-current" />
                </span>
              </span>
              <span className="hidden sm:block">Insights</span>
            </a>
          </nav>
        </aside>

        <main id="scrapes" className="min-w-0 flex-1 p-5 sm:p-8 lg:p-12">
          {currentPage === "new-scrape" ? (
            <NewScrapePage onBack={() => setCurrentPage("scrapes")} />
          ) : currentPage === "taxonomy-searcher" ? (
            <TaxonomySearcherPage />
          ) : currentPage === "manage-taxonomy" ? (
            <ManageTaxonomyPage />
          ) : (
            <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-sm font-medium text-[#64728a]">
                  Overview
                </p>
                <h1 className="text-3xl font-semibold tracking-[-0.035em] text-[#172033] sm:text-4xl">
                  Scrapes
                </h1>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#6f7988]">
                  Manage and monitor your collected content from one place.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCurrentPage("new-scrape")}
                className="self-start rounded-xl bg-[#3f61d7] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_5px_14px_rgba(63,97,215,0.22)] transition hover:bg-[#3455c7] sm:self-auto"
              >
                New scrape
              </button>
            </div>

            <div className="space-y-6">
              <section className="overflow-hidden rounded-2xl border border-[#e4e7ec] bg-white shadow-[0_2px_12px_rgba(23,32,51,0.04)]">
                <div className="flex flex-col gap-3 border-b border-[#edf0f3] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <label className="relative block w-full sm:max-w-xs">
                    <span className="sr-only">
                      Search segments or companies
                    </span>
                    <span className="pointer-events-none absolute left-3 top-1/2 size-3.5 -translate-y-1/2 rounded-full border-2 border-[#8993a2] after:absolute after:-bottom-1 after:-right-1 after:h-1.5 after:w-0.5 after:-rotate-45 after:rounded-full after:bg-[#8993a2]" />
                    <input
                      type="search"
                      value={segmentSearch}
                      onChange={(event) => setSegmentSearch(event.target.value)}
                      placeholder="Search segments or companies..."
                      className="h-10 w-full rounded-xl border border-[#dfe3e8] bg-[#fafbfc] pl-9 pr-3 text-sm text-[#263142] outline-none transition placeholder:text-[#98a1ae] focus:border-[#8da0e3] focus:bg-white focus:ring-3 focus:ring-[#e8edff]"
                    />
                  </label>
                  <div
                    className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#7a8494]"
                    aria-label="Scraping status legend"
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[#e4ad33]" />
                      Scraping
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[#35a66f]" />
                      No scraping
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[#d95858]" />
                      Issue
                    </span>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-[minmax(0,1fr)_9rem] border-b border-[#edf0f3] bg-[#fafbfc] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8993a2] sm:px-6">
                    <span>Industry</span>
                    <span className="text-right">Number of sub industries</span>
                  </div>

                  <details className="group border-b border-[#edf0f3]">
                    <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_9rem] items-center px-5 py-4 transition hover:bg-[#fafbfc] [&::-webkit-details-marker]:hidden sm:px-6">
                      <span className="flex min-w-0 items-center gap-3 text-sm font-medium text-[#263142]">
                        <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[#f1f4fc] text-[#536bc1]">
                          <span className="block h-2 w-2 rotate-45 border-r-2 border-t-2 border-current transition group-open:rotate-[135deg]" />
                        </span>
                        <span className="truncate">Alimentos e Bebidas</span>
                        <span
                          className="size-2 shrink-0 rounded-full bg-[#e4ad33] ring-4 ring-[#fff4d7]"
                          title="Scraping in progress"
                          aria-label="Scraping in progress"
                        />
                      </span>
                      <span className="text-right text-sm font-semibold text-[#536073]">
                        2
                      </span>
                    </summary>
                    <div className="border-t border-[#edf0f3] bg-[#fafbfc] px-5 py-2 sm:px-6">
                      <div className="grid grid-cols-[minmax(0,1fr)_7rem] px-9 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9aa2af]">
                        <span>Sub-industry</span>
                        <span className="text-right">Companies</span>
                      </div>
                      {[
                        {
                          name: "Cafés",
                          status: "active",
                          company: "Café do Ponto",
                          lastScraped: "2 hours ago",
                          issues: 3,
                          rate: "8.4 / 10",
                        },
                        {
                          name: "Bebidas Alcoolicas",
                          status: "idle",
                          company: "Ambev",
                          lastScraped: "Yesterday",
                          issues: 0,
                          rate: "8.1 / 10",
                        },
                        {
                          name: "Cafeterias",
                          status: "issue",
                          company: "Starbucks Brasil",
                          lastScraped: "3 days ago",
                          issues: 10,
                          rate: "6.2 / 10",
                        },
                        {
                          name: "Carnes",
                          status: "idle",
                          company: "Friboi",
                          lastScraped: "Yesterday",
                          issues: 2,
                          rate: "7.5 / 10",
                        },
                      ]
                        .filter((subIndustry) =>
                          matchesSegmentSearch(
                            subIndustry,
                            "Alimentos e Bebidas",
                          ),
                        )
                        .map((subIndustry) => (
                          <SubIndustryRow
                            key={subIndustry.name}
                            {...(subIndustry as SubIndustry)}
                          />
                        ))}
                    </div>
                  </details>

                  <details className="group">
                    <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_9rem] items-center px-5 py-4 transition hover:bg-[#fafbfc] [&::-webkit-details-marker]:hidden sm:px-6">
                      <span className="flex min-w-0 items-center gap-3 text-sm font-medium text-[#263142]">
                        <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[#f1f4fc] text-[#536bc1]">
                          <span className="block h-2 w-2 rotate-45 border-r-2 border-t-2 border-current transition group-open:rotate-[135deg]" />
                        </span>
                        <span className="truncate">Casa e Construção</span>
                        <span
                          className="size-2 shrink-0 rounded-full bg-[#d95858] ring-4 ring-[#fdeaea]"
                          title="Scraping issue"
                          aria-label="Scraping issue"
                        />
                      </span>
                      <span className="text-right text-sm font-semibold text-[#536073]">
                        3
                      </span>
                    </summary>
                    <div className="border-t border-[#edf0f3] bg-[#fafbfc] px-5 py-2 sm:px-6">
                      <div className="grid grid-cols-[minmax(0,1fr)_7rem] px-9 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9aa2af]">
                        <span>Sub-industry</span>
                        <span className="text-right">Companies</span>
                      </div>
                      {[
                        {
                          name: "Desemtupidora e detetizadora",
                          status: "active",
                          company: "Desentupidora Central",
                          lastScraped: "12 minutes ago",
                          issues: 4,
                          rate: "7.8 / 10",
                        },
                        {
                          name: "Eletrodomésticos",
                          status: "idle",
                          company: "Electrolux Brasil",
                          lastScraped: "Yesterday",
                          issues: 5,
                          rate: "8.0 / 10",
                        },
                        {
                          name: "Jardim paisagismo e piscina",
                          status: "issue",
                          company: "Jardim & Cia",
                          lastScraped: "5 days ago",
                          issues: 3,
                          rate: "6.7 / 10",
                        },
                      ]
                        .filter((subIndustry) =>
                          matchesSegmentSearch(
                            subIndustry,
                            "Casa e Construção",
                          ),
                        )
                        .map((subIndustry) => (
                          <SubIndustryRow
                            key={subIndustry.name}
                            {...(subIndustry as SubIndustry)}
                          />
                        ))}
                    </div>
                  </details>
                </div>
              </section>

            </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
