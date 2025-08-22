type SectionsNameProps = {
  name: string;
};

export default function SectionName({ name }: SectionsNameProps) {
  return <h2 className="text-4xl font-semibold mb-8">{name}</h2>;
}
