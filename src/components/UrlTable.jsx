import { useDeleteUrlMutation } from "../features/url/urlApi";

export default function UrlTable({ urls }) {
  const [deleteUrl] = useDeleteUrlMutation();

  return (
    <table className="w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Original</th>
          <th className="border p-2">Short</th>
          <th className="border p-2">Clicks</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((u) => (
          <tr key={u._id}>
            <td className="border p-2 truncate">{u.originalUrl}</td>
            <td className="border p-2">
              <a href={`http://localhost:5000/${u.shortCode}`} target="_blank" className="text-blue-600">
                {u.shortCode}
              </a>
            </td>
            <td className="border p-2 text-center">{u.clicks}</td>
            <td className="border p-2 text-center">
              <button onClick={() => deleteUrl(u._id)} className="text-red-600">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
