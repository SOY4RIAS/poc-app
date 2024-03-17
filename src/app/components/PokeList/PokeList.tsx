import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function PokeList() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>PokeList</CardTitle>
        <CardDescription>View all your pokemons</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </CardContent>
    </Card>
  );
}
