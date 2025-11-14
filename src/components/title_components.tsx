export default function TitleComponents({ title }: { title: string }) {
  return (
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-800">
      {title}
    </h1>
  );
}
