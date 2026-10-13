import Image from "next/image";

/** Une étape du site du client, avec l'écran d'avant et l'écran d'après. Sans écran d'avant : il n'existait pas. */
type Step = { label: string; before?: { src: string; alt: string }; after: { src: string; alt: string }; none?: string };

const STEPS: Step[] = [
  {
    label: "L’entrée",
    before: { src: "/avant-apres/avant-site.webp", alt: "Ancienne page d’accueil de La Fabrique du Sauna" },
    after: { src: "/avant-apres/apres-site.webp", alt: "Nouvelle page d’accueil de La Fabrique du Sauna" },
  },
  {
    label: "Les questions",
    before: { src: "/avant-apres/avant-questions.webp", alt: "Ancien questionnaire en cinq étapes" },
    after: { src: "/avant-apres/apres-questions.webp", alt: "Nouveau questionnaire en sept étapes" },
  },
  {
    label: "Le suivi",
    none: "Rien. Des mails et un carnet.",
    after: { src: "/avant-apres/apres-suivi.webp", alt: "Espace commercial : chaque projet à sa place" },
  },
];

const SIZES = "(max-width:700px) 45vw, 680px";

/** Le visuel du haut de la home : avant et après, pour un vrai client. Deux colonnes (avant, après), une ligne par étape (entrée, questions, suivi). */
export default function BeforeAfter() {
  return (
    <figure className="ba">
      <div className="ba-grid">
        <span className="ba-corner" aria-hidden="true" />
        <span className="ba-ch ba-before">Avant</span>
        <span className="ba-ch ba-after">Après</span>
        {STEPS.map((s) => (
          <div key={s.label} className="ba-step">
            <span className="ba-label">{s.label}</span>
            <span className="ba-shot">
              <small>Avant</small>
              {s.before ? <Image src={s.before.src} alt={s.before.alt} width={2400} height={1305} sizes={SIZES} /> : <i>{s.none}</i>}
            </span>
            <span className="ba-shot on">
              <small>Après</small>
              <Image src={s.after.src} alt={s.after.alt} width={2400} height={1215} sizes={SIZES} />
            </span>
          </div>
        ))}
      </div>
      <figcaption className="art-note">Refonte pour La Fabrique du Sauna, saunas sur mesure. Écrans réels.</figcaption>
    </figure>
  );
}
