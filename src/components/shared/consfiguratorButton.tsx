import { useConfigurator } from "@/utils/contexts/configurator.contexts";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

const ConfigurationButton = () => {
  const { setOpenConfigurator } = useConfigurator();
  return (
    <div className="">
      <Button
        size="icon"
        variant="default"
        aria-label="Configuration Button"
        className="fixed bg-neutral-200 dark:bg-neutral-600 bottom-8 right-8 z-40 rounded-full shadow-inner hover:bg-neutral-50 dark:hover:bg-zinc-800"
        onClick={() => setOpenConfigurator(true)}
      >
        <Cog6ToothIcon className="h-5 w-5 text-neutral-600 dark:text-neutral-200" />
      </Button>
    </div>
  );
};

export default ConfigurationButton;
