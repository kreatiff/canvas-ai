import axios from "axios";

export default async function handler(req, res) {
  const { apiKey, apiUrl, courseId } = req.body;

  try {
    const response = await axios.get(
      `${apiUrl}/api/v1/courses/${courseId}/pages`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching pages." });
  }
}
