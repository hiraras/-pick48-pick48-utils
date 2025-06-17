export const getSearchParams = () => {
  const hash = window.location.hash;
  const search = window.location.search || hash.slice(hash.indexOf('?'));
  const searchParamsStr = search.slice(1);
  return Object.fromEntries(new URLSearchParams(searchParamsStr));
};
