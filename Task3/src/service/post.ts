export const getUser = async (): Promise<any> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; 
    }
  };
  