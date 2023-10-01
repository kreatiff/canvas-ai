import axios from "axios";

export default async function handler(req, res) {
  const { apiKey, apiUrl } = req.body;

  try {
    const response = await axios.get(`${apiUrl}/api/v1/courses`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        enrollment_type: "teacher",
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching courses." });
  }
}
