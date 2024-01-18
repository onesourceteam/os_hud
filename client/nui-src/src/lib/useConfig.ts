export default async function () {
  const request = await fetch("/config.json");
  const data = request.json();
  return data;
}
