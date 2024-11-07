import { useEffect } from "react";

export function useScrollToTop() {
  useEffect(() => {
    // Animation du header lors du scroll de la page.
    // Récupération des éléments.
    const header = document.querySelector("header");
    const main = document.querySelector("main");

    if (!header || !main) return;

    // Événement scroll.
    document.addEventListener("scroll", function () {
      header.classList.add("headerScroll");
      main.style.marginTop = "200px";
      if (window.pageYOffset === 0) {
        header.classList.remove("headerScroll");
        main.style.marginTop = "0px"; // Des "" vides fonctionnent également, donne style="" au lieu de style="margin-top:200px".
      }
    });
  }, []);
}
