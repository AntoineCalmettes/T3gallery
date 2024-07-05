import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/f0044cc9-5bb8-43bf-bc88-2bce5aff3351-ftwcf1.png",
  "https://utfs.io/f/01fb0b37-5a95-4630-9fb1-03a5b21b7b6a-wckgxu.png",
  "https://utfs.io/f/e68c0007-70c9-4a8c-b901-1a99356c69ee-93p21l.png",
  "https://utfs.io/f/28c02d30-cc44-4c06-a7e4-71d34e0a8d70-wfm50.png",
  "https://utfs.io/f/1f42e6aa-6960-4ae8-93d8-ac646db0aead-11tih9.png",
  "https://utfs.io/f/fc1dc523-44ae-45ff-a7c9-da1bb32804be-e5pdlg.png",
];

const mockImages = mockUrls.map((url, index) => (
  {
    id: index + 1,
    url
  }
));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages,...mockImages,...mockImages,...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-48 ">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
