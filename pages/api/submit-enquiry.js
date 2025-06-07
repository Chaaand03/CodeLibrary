export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbwOU8E67JAHCijwGSP1ePsBNR5Qg2dTw9A4m6ZtsAdNQfjvOLZdlirH-rZo4A-VMtDLYQ/exec";

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parentName: req.body.parentName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        studentName: req.body.studentName,
        interestedCourse: req.body.interestedCourse,
        studentGrade: req.body.studentGrade
      }),
    });

    const text = await response.text();

    if (response.ok && text.includes("Success")) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ error: "Google Script Error", details: text });
    }
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Server error", message: err.message });
  }
}