import UrlForm from "../components/UrlForm";
import UrlTable from "../components/UrlTable";
import { useGetUrlsQuery } from "../features/url/urlApi";

export default function Dashboard() {
  const { data, isLoading } = useGetUrlsQuery();
  

  if (isLoading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
      <UrlForm />
      <UrlTable urls={data || []} />
    </div>
  );
}
