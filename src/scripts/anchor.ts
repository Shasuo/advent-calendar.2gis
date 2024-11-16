export const Anchor = (id: string) => {
  const anchor = document.getElementById(id);

  if (anchor) {
    if (typeof window !== "undefined") {
      const offset = -30;
      const anchorPosition =
        anchor.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: anchorPosition,
        behavior: "smooth",
      });
    }
  }
};
