import React, { useState } from "react";
import ApiKeyInput from "../components/ApiKeyInput";
import CanvasApiUrlInput from "../components/CanvasApiUrlInput";
import OpenAiApiKeyInput from '../components/OpenAiApiKeyInput';

const Home = () => {
  const [apiKey, setApiKey] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  const [openAiApiKey, setOpenAiApiKey] = useState('');

  return (
    <div>
      <h1>Canvas LMS API Interaction</h1>
      <ApiKeyInput setApiKey={setApiKey} />
      <CanvasApiUrlInput setApiUrl={setApiUrl} />
      <OpenAiApiKeyInput setOpenAiApiKey={setOpenAiApiKey} />
      <p>Your Canvas API URL: {apiUrl}</p>
      <p>Your API Key: {apiKey}</p>
      <p>Your OpenAI API Key: {openAiApiKey}</p>
    </div>
  );
};

export default Home;
