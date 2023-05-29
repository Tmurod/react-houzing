const useReplace = (query, val) => {
  let url = new URL(window.location.href);
  url.searchParams.set(query, val);
  if (!val && val !== 0) {
    url.searchParams.delete(query);
  }
  return url.search;
}

export default useReplace;