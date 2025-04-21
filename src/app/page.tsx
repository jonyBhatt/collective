import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      <Button className="" variant={"elevated"}>
        Button
      </Button>
      <Input placeholder="this is input" />
      <Progress value={50} />
      <Textarea placeholder="Write something here" />
    </div>
  );
}
