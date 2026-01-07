import { useState } from "react";
import { useCreateUrlMutation } from "../features/url/urlApi";

export default function UrlForm() {
  const [url, setUrl] = useState("");
  const [createUrl] = useCreateUrlMutation();

  const submit = async () => {
    if (!url) return alert("URL required");

    try {
      await createUrl({ originalUrl: url }).unwrap();
      setUrl("");
    } catch (err) {
      alert("Failed to shorten URL");
      console.log(err)
    }
  };

  

  return (
    <div className="flex gap-2 mb-6">
      <input
        className="border p-2 flex-1"
        placeholder="Paste original URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={submit}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Shorten
      </button>
    </div>
  );
}
