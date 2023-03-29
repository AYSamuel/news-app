import { API_KEY, endPoint, category, country } from '../config/config.js';

export async function sevices(category = 'general') {
  let newsArticles = await fetch(
    `${endPoint}&apiKey=${API_KEY}?country=${country}&category=${category}`,
    { headers: { 'X-API-KEY': API_KEY } }
  );
  let result = await articles.jscon();
  articles = null;
  return result.articles;
}
