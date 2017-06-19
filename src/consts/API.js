const URL = 'https://connpass.com/api/v1/event/';

// このテンプレート文字列にうまく埋め込むいいやり方がないか・・・
export const GET_NEW_EVENTS = `${URL}?order=3&start=p${0}`;
export const SEARCH_EVENTS = `${URL}?order=3&start=p${0}&keyword_or=p${1}`