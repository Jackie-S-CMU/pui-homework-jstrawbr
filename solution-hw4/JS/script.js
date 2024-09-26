const cart = [];

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const rollType = params.get("roll");