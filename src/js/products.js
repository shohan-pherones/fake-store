import { renderData, renderError, renderLoading } from "./render";

export default async function fetchProducts(url) {
  try {
    renderLoading(true);
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    // console.log(data);
    renderData(data);
  } catch (error) {
    // console.log(error.message);
    renderError(error.message);
  } finally {
    renderLoading(false);
  }
}
