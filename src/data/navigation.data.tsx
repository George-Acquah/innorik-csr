import {
  BriefcaseIcon,
  ClipboardDocumentIcon,
  CodeBracketIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const sidebarLinks: _ILinks[] = [
  {
    label: "Home",
    href: "/",
    icon: (
      <HomeIcon className="inherit h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <CodeBracketIcon className="inherit h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Projects",
    href: "/projects",
    parent: 'Tables',
    icon: (
      <BriefcaseIcon className="inherit h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Teams",
    href: "/teams",
    icon: (
      <UsersIcon className="inherit h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: (
      <ClipboardDocumentIcon className="inherit h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Clients",
    href: "/clients",
    icon: (
      <UserIcon className="inherit h-5 w-5 flex-shrink-0" />
    ),
  },
];
