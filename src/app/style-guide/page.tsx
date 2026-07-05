import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function StyleGuide() {
  return (
    <>
      <Section background="muted">
        <Container>
          <div className="mb-12">
            <Badge>v1.0</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Style Guide
            </h1>
            <p className="mt-2 text-lg text-text-secondary">
              Design tokens and UI primitives for the Vieent platform.
            </p>
          </div>

          {/* Typography */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-text-primary">
              Typography
            </h2>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Heading 1
              </h1>
              <h2 className="text-3xl font-semibold tracking-tight">
                Heading 2
              </h2>
              <h3 className="text-2xl font-semibold">Heading 3</h3>
              <h4 className="text-xl font-medium">Heading 4</h4>
              <p className="text-base text-text-primary">Body text — the quick brown fox jumps over the lazy dog.</p>
              <p className="text-sm text-text-secondary">Small / caption text — used for labels, timestamps, and footnotes.</p>
              <p className="text-sm text-text-muted">Muted text — secondary information and hints.</p>
            </div>
          </section>

          {/* Colors */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-text-primary">
              Colors
            </h2>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-text-primary">Brand Palette</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
                {[
                  { shade: "50", class: "bg-brand-50" },
                  { shade: "100", class: "bg-brand-100" },
                  { shade: "200", class: "bg-brand-200" },
                  { shade: "300", class: "bg-brand-300" },
                  { shade: "400", class: "bg-brand-400" },
                  { shade: "500", class: "bg-brand-500" },
                  { shade: "600", class: "bg-brand-600" },
                  { shade: "700", class: "bg-brand-700" },
                  { shade: "800", class: "bg-brand-800" },
                  { shade: "900", class: "bg-brand-900" },
                ].map(({ shade, class: bg }) => (
                  <div key={shade} className="space-y-1">
                    <div className={`h-16 rounded-lg border border-border ${bg}`} />
                    <span className="text-xs text-text-muted">brand-{shade}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-medium text-text-primary">Accent Palette</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-7">
                {[
                  { shade: "50", class: "bg-accent-50" },
                  { shade: "100", class: "bg-accent-100" },
                  { shade: "200", class: "bg-accent-200" },
                  { shade: "300", class: "bg-accent-300" },
                  { shade: "400", class: "bg-accent-400" },
                  { shade: "500", class: "bg-accent-500" },
                  { shade: "600", class: "bg-accent-600" },
                  { shade: "700", class: "bg-accent-700" },
                ].map(({ shade, class: bg }) => (
                  <div key={shade} className="space-y-1">
                    <div className={`h-16 rounded-lg border border-border ${bg}`} />
                    <span className="text-xs text-text-muted">accent-{shade}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-medium text-text-primary">Surface &amp; Text</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="space-y-1">
                  <div className="h-16 rounded-lg border border-border bg-surface" />
                  <span className="text-xs text-text-muted">surface</span>
                </div>
                <div className="space-y-1">
                  <div className="h-16 rounded-lg border border-border bg-surface-secondary" />
                  <span className="text-xs text-text-muted">surface-secondary</span>
                </div>
                <div className="space-y-1">
                  <div className="h-16 rounded-lg bg-text-primary" />
                  <span className="text-xs text-text-muted">text-primary</span>
                </div>
                <div className="space-y-1">
                  <div className="h-16 rounded-lg bg-text-muted" />
                  <span className="text-xs text-text-muted">text-muted</span>
                </div>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-text-primary">
              Buttons
            </h2>
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">Primary Sm</Button>
                <Button variant="primary">Primary Md</Button>
                <Button variant="primary" size="lg">Primary Lg</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="secondary" size="sm">Secondary Sm</Button>
                <Button variant="secondary">Secondary Md</Button>
                <Button variant="secondary" size="lg">Secondary Lg</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="outline" size="sm">Outline Sm</Button>
                <Button variant="outline">Outline Md</Button>
                <Button variant="outline" size="lg">Outline Lg</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="ghost" size="sm">Ghost Sm</Button>
                <Button variant="ghost">Ghost Md</Button>
                <Button variant="ghost" size="lg">Ghost Lg</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button disabled>Disabled</Button>
                <Button as="a" href="#">
                  Link Button
                </Button>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-text-primary">
              Badges
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="accent">Accent</Badge>
            </div>
          </section>

          {/* Section backgrounds */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-text-primary">
              Section Variants
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-surface p-8 text-center">
                <code className="text-sm text-text-muted">background="white" (default)</code>
              </div>
              <div className="rounded-xl border border-border bg-surface-secondary p-8 text-center">
                <code className="text-sm text-text-muted">background="muted"</code>
              </div>
              <div className="rounded-xl bg-brand-600 p-8 text-center">
                <code className="text-sm text-white/80">background="brand"</code>
              </div>
            </div>
          </section>
        </Container>
      </Section>
    </>
  );
}
