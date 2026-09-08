"use client";

import Image from "next/image";

/**
 * Logo cliquable qui fait défiler la page vers le tout en haut.
 *
 * Passé par `next/image` : en balise brute, le PNG source partait entier
 * (98 Ko) alors qu'il s'affiche dans 100 px — c'était la plus grosse requête
 * de la page d'accueil.
 */
export function ScrollTopLogo() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Revenir en haut de la page"
      className="mt-6 block w-[100px] overflow-hidden rounded-full transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
    >
      <Image
        src="/images/logo.png"
        alt="Logo TGT Propreté"
        width={100}
        height={100}
        sizes="100px"
        className="h-auto w-full"
      />
    </button>
  );
}
