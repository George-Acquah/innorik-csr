import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <Typography variant="h1">Vite + React</Typography>
        <div className="card space-y-4">
          <Button
            variant="default"
            size="default"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <Typography variant="p">
            Edit <code>src/HomePage.tsx</code> and save to test HMR
          </Typography>
        </div>
        <Typography variant="p" className="read-the-docs">
          Click on the Vite and React logos to learn more
        </Typography>
      </div>
      <div className="space-y-4">
        <Typography variant="h1">Vite + React</Typography>
        <div className="card space-y-4">
          <Button
            variant="default"
            size="default"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <Typography variant="p">
            Edit <code>src/HomePage.tsx</code> and save to test HMR
          </Typography>
        </div>
        <Typography variant="p" className="read-the-docs">
          Click on the Vite and React logos to learn more
        </Typography>
      </div>
      <div className="space-y-4">
        <Typography variant="h1">Vite + React</Typography>
        <div className="card space-y-4">
          <Button
            variant="default"
            size="default"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <Typography variant="p">
            Edit <code>src/HomePage.tsx</code> and save to test HMR
          </Typography>
        </div>
        <Typography variant="p" className="read-the-docs">
          Click on the Vite and React logos to learn more
        </Typography>
      </div>
      <div className="space-y-4">
        <Typography variant="h1">Vite + React</Typography>
        <div className="card space-y-4">
          <Button
            variant="default"
            size="default"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <Typography variant="p">
            Edit <code>src/HomePage.tsx</code> and save to test HMR
          </Typography>
        </div>
        <Typography variant="p" className="read-the-docs">
          Click on the Vite and React logos to learn more
        </Typography>
      </div>
      <div className="space-y-4">
        <Typography variant="h1">Vite + React</Typography>
        <div className="card space-y-4">
          <Button
            variant="default"
            size="default"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <Typography variant="p">
            Edit <code>src/HomePage.tsx</code> and save to test HMR
          </Typography>
        </div>
        <Typography variant="p" className="read-the-docs">
          Click on the Vite and React logos to learn more
        </Typography>
      </div>
      <div className="space-y-4">
        <Typography variant="h1">Vite + React</Typography>
        <div className="card space-y-4">
          <Button
            variant="default"
            size="default"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <Typography variant="p">
            Edit <code>src/HomePage.tsx</code> and save to test HMR
          </Typography>
        </div>
        <Typography variant="p" className="read-the-docs">
          Click on the Vite and React logos to learn more
        </Typography>
      </div>
    </div>
  );
}

export default HomePage;
