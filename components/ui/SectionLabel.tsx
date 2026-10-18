type Props = {
  children: React.ReactNode;
  centered?: boolean;
  /**
   * `true` quand le libellé est posé sur un fond sombre (en-têtes navy) :
   * on garde alors le doré de marque, très lisible sur bleu nuit. Sur fond
   * clair — le cas par défaut — ce même doré ne donne que 2,3:1, d'où la
   * déclinaison plus profonde `--color-gold-text`.
   */
  onDark?: boolean;
};

export function SectionLabel({
  children,
  centered = false,
  onDark = false,
}: Props) {
  const couleur = onDark
    ? "text-[var(--color-gold)]"
    : "text-[var(--color-gold-text)]";

  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.4em] ${couleur} ${
        centered ? "justify-center" : ""
      }`}
    >
      {/* Filet décoratif : sans dimensions, l'ancien `<span>` était un élément
          de 0×0 qui ne dessinait rien tout en occupant une gouttière. */}
      <span
        className={`h-px w-8 shrink-0 ${onDark ? "bg-[var(--color-gold)]" : "bg-[var(--color-gold-text)]"}`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
