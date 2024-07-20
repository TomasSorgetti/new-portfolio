interface Form {
    name: string;
    subject: string;
    email: string;
    message: string;
}

export const sendEmail = async (formData: Form): Promise<any> => {
    const URL = "http://localhost:8080/api/mail";
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};