export async function fetchIssData() {
  try {
    const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    if (!res.ok) {
      throw new Error('Failed to fetch ISS data');
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
