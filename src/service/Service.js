export async function getWeatherUpdates(url) {
  let response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
}
