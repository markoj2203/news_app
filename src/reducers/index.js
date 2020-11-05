import { combineReducers } from "redux";

const setLanguage = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_LANGUAGE":
      return { ...state, language: action.language };
    default:
      return state;
  }
};

const setPath = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_PATH":
      return { ...state, path: action.path };
    default:
      return state;
  }
};

const newsDetails = (state = {}, action) => {
  switch (action.type) {
    case "NEWS_DETAILS":
      return { ...state, news: action.news };
    default:
      return state;
  }
};

const searchNews = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH_NEWS":
      return { ...state, search: action.search };
    default:
      return state;
  }
};

const selectCategory = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return { ...state, category: action.category };
    default:
      return state;
  }
};

export default combineReducers({
  setLanguage,
  setPath,
  newsDetails,
  searchNews,
  selectCategory,
});
