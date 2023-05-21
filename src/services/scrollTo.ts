export const scrollTo = (item: string, offset?: number) => {
  const elem = document.querySelector(item);

  if (elem) {
    const { top } = elem.getBoundingClientRect();

    window.scrollTo({
      top: top + window.scrollY - (offset || 0),
      left: 0,
      behavior: 'smooth',
    });
  }
};
