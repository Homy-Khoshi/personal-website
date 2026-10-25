
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { entries } from "@/lib/content";
import { ImageSlot } from "@/components/ImageSlot";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return entries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = entries.find((item) => item.slug === slug);

  return {
    title: entry
      ? `${entry.subtitle} | Homayoun Khoshi`
      : "Work | Homayoun Khoshi",
    description: entry?.summary,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const item = entries.find((entry) => entry.slug === slug);

  if (!item) notFound();

  const others = entries
    .filter((entry) => entry.slug !== slug)
    .slice(0, 3);

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/">
            HK<span>.</span>
          </Link>

          <Link className="back-link" href="/">
            ← Back to portfolio
          </Link>

          <a
            className="header-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>
        </div>
      </header>

      <article className="container detail-page">
        <Link
          href={`/#${item.kind === "experience" ? "experience" : "projects"}`}
          className="back-link"
        >
          ← All {item.kind === "experience" ? "experience" : "projects"}
        </Link>

        <p className="kicker">
          {item.kind === "experience" ? "EXPERIENCE" : "PROJECT"}
          {item.period ? ` · ${item.period}` : ""}
        </p>

        <h1>
          {item.kind === "experience" ? item.subtitle : item.title}
        </h1>

        <p className="detail-subtitle">
          {item.kind === "experience" ? item.title : item.subtitle}
          {item.location ? ` · ${item.location}` : ""}
        </p>

        <p className="detail-lead">{item.summary}</p>

        {/* Keep the existing company logo on experience pages only */}
        {item.kind === "experience" && (
          <ImageSlot
            src={item.image}
            label={item.title}
            className="detail-hero-image company-logo"
          />
        )}

        <div className="detail-columns">
          <section>
            <h2>Overview & contributions</h2>

            <p className="muted">
              The following points summarize the work described in my résumé.
            </p>

            <ul className="detail-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </section>

          <aside className="detail-aside">
            <h3>Technologies</h3>

            <div className="tags">
              {item.technologies.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {item.period && (
              <>
                <h3>Timeline</h3>
                <p>{item.period}</p>
              </>
            )}

            {item.location && (
              <>
                <h3>Location</h3>
                <p>{item.location}</p>
              </>
            )}
          </aside>
        </div>

        {/* Supporting screenshots appear only on experience pages */}
        {item.kind === "experience" &&
          item.gallery &&
          item.gallery.length > 0 && (
            <section className="experience-gallery">
              <h2>Selected Work</h2>

              <div className="experience-gallery-grid">
                {item.gallery.map((image) => (
                  <figure
                    key={image.src}
                    className="experience-gallery-item"
                  >
                    <Image
                      src={image.src}
                      alt={image.caption}
                      width={1200}
                      height={800}
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />

                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
      </article>

      <section className="section section-tint">
        <div className="container">
          <p className="kicker">KEEP EXPLORING</p>
          <h2>Other work</h2>

          <div className="related-grid">
            {others.map((entry) => (
              <Link
                key={entry.slug}
                href={`/work/${entry.slug}`}
                className="related-card"
              >
                <span>{entry.kind.toUpperCase()}</span>

                <h3>
                  {entry.kind === "experience"
                    ? entry.subtitle
                    : entry.title}
                </h3>

                <p>{entry.summary}</p>

                <strong>View details ↗</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Homayoun Khoshi</span>
          <Link href="/">Back to home ↑</Link>
        </div>
      </footer>
    </main>
  );
}
