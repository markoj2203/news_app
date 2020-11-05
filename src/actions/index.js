export const setLanguage = (language) => {
  return {
    type: "SELECT_LANGUAGE",
    payload: language,
  };
};

export const setPath = (path) => {
  return {
    type: "SELECT_PATH",
    payload: path,
  };
};

export const newsDetails = (items) => {
  return {
    type: "NEWS_DETAILS",
    payload: items,
  };
};

export const searchNews = (search) => {
  return {
    type: "SEARCH_NEWS",
    payload: search,
  };
};

export const selectCategory = (category) => {
  return {
    type: "SELECT_CATEGORY",
    payload: category,
  };
};
