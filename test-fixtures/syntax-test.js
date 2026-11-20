const API_URL = "https://example.com/api";

async function fetchUsers() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Load users
fetchUsers().then((users) => console.log(users));
