import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { entries } from '@/lib/content';
import { ImageSlot } from '@/components/ImageSlot';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return entries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = entries.find(item => item.slug === slug);
  return { title: entry ? `${entry.subtitle} | Homayoun Khoshi` : 'Work | Homayoun Khoshi', description: entry?.summary };
}
export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const item = entries.find(entry => entry.slug === slug);
  if (!item) notFound();
  const others = entries.filter(entry => entry.slug !== slug).slice(0,3);
  return <main>
    <header className="site-header"><div className="container header-inner"><Link className="brand" href="/">HK<span>.</span></Link><Link className="back-link" href="/">← Back to portfolio</Link><a className="header-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé ↗</a></div></header>
    <article className="container detail-page"><Link href={`/#${item.kind === 'experience' ? 'experience' : 'projects'}`} className="back-link">← All {item.kind === 'experience' ? 'experience' : 'projects'}</Link><p className="kicker">{item.kind === 'experience' ? 'EXPERIENCE' : 'PROJECT'} {item.period ? `· ${item.period}` : ''}</p><h1>{item.kind === 'experience' ? item.subtitle : item.title}</h1><p className="detail-subtitle">{item.kind === 'experience' ? item.title : item.subtitle}{item.location ? ` · ${item.location}` : ''}</p><p className="detail-lead">{item.summary}</p><ImageSlot
  src={item.image}
  label={item.title}
  className={`detail-hero-image ${
    item.kind === "experience" ? "company-logo" : ""
  }`}
/><div className="detail-columns"><section><h2>Overview & contributions</h2><p className="muted">The following points summarize the work described in my résumé.</p><ul className="detail-bullets">{item.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul><div className="detail-extra"><h3>More about this work</h3><p>Additional context, architecture diagrams, screenshots, demos, and lessons learned can be added here as the project develops.</p></div></section><aside className="detail-aside"><h3>Technologies</h3><div className="tags">{item.technologies.map(tag=><span key={tag}>{tag}</span>)}</div>{item.period && <><h3>Timeline</h3><p>{item.period}</p></>}{item.location && <><h3>Location</h3><p>{item.location}</p></>}</aside></div></article>
    <section className="section section-tint"><div className="container"><p className="kicker">KEEP EXPLORING</p><h2>Other work</h2><div className="related-grid">{others.map(entry=><Link key={entry.slug} href={`/work/${entry.slug}`} className="related-card"><span>{entry.kind.toUpperCase()}</span><h3>{entry.kind === 'experience' ? entry.subtitle : entry.title}</h3><p>{entry.summary}</p><strong>View details ↗</strong></Link>)}</div></div></section>
    <footer className="footer"><div className="container footer-inner"><span>© 2026 Homayoun Khoshi</span><Link href="/">Back to home ↑</Link></div></footer>
  </main>;
}
