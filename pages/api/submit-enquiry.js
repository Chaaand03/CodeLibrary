export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { parentName, email, phoneNumber, studentName, interestedCourse, studentGrade } = req.body;
  const sheetPayload = { parentName, email, phoneNumber, studentName, interestedCourse, studentGrade };

  try {
    const gsResponse = await fetch(
      'https://script.google.com/macros/s/AKfycbzngsrSHXQxLcLxY-AtNtgKr4iU2LRav2AJWl0m4rmAxzEx7zk2Du3lJsHiuX33qlYc_Q/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sheetPayload)
      }
    );
    if (!gsResponse.ok) {
      console.error(await gsResponse.text());
      return res.status(500).json({ error: 'Failed to submit to Google Sheets' });
    }
    return res.status(200).json({ message: 'Enquiry submitted successfully.' });
  } catch (err) {
    console.error('Error in API route:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
