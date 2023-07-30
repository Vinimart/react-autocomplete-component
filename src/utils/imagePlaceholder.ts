function imagePlaceholder(e: React.SyntheticEvent<HTMLImageElement, Event>) {
  if (e.currentTarget.src.includes("placeholder")) return;

  e.currentTarget.src =
    "https://cringemdb.com/img/movie-poster-placeholder.png";
}

export default imagePlaceholder;
