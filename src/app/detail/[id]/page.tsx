interface DetailParams {
  params: {
    id: string;
  };
}

export default function Detail({ params: { id } }: DetailParams) {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1>Detail {id}</h1>
    </main>
  );
}
