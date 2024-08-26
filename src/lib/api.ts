export async function applyFilter(image: File, filter: string) {
  const payload = new FormData();
  payload.append('imageFile', image);
  payload.append('filter', filter);
  payload.append('imageName', image.name);

  try {
    const response = await fetch("http://localhost:3001/api/filter", {
      method: "POST",
      body: payload,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Handle the binary response as a Blob
    const blob = await response.blob();
    const filteredImageUrl = URL.createObjectURL(blob);

    console.log(`Filter ${filter} added to Image.`);
    return filteredImageUrl;
  } catch (error) {
    console.error("Fetch error:", error);
    return;
  }
}


export async function imageStore(image: File, option: string) {
  const payload = new FormData();
  payload.append('imageFile', image);
  payload.append('option', option);
  payload.append('imageName', image.name);

  try {
    const response = await fetch("http://localhost:3001/api/store", {
      method: "POST",
      body: payload,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    console.log(`Image Stored in ${option}`, data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return;
  }
}
