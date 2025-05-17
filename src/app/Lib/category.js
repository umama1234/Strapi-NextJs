export const getCategoriesBook = async (title) => {
  try {
    const response = await fetch(`http://localhost:1337/api/books?filters[category][name]=${title}&populate=coverImage`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch books by category");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books for category:", error);
    return [];
  }
};