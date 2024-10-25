interface _IChildren {
  children: React.ReactNode;
}

interface _ILinks {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
  parent?: string;
}

interface _ITooltipItem {
  id: number;
  name: string;
  designation?: string;
  icon?: IconType;
  theme: Theme;
}

interface _Indexer {
  [key: string]: string;
}

type IconType = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
  } & RefAttributes<SVGSVGElement>
>;

type _TVariants = "default" | "secondary" | "destructive" | "outline";

type _TSizes = "default" | "lg" | "sm" | "icon";

type Theme = "light" | "dark" | "system";
