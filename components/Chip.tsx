interface types {
  Text: string;
}

export default function Home({ Text }: types) {
  return (
    <div className="rounded-3xl m-2 py-1 px-4 text-sm bg-gradient-to-r from-PinkGrandient to-YellowGrandient text-black w-fit">
      {Text}
    </div>
  );
}
