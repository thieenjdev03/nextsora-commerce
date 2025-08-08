import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// NextSora Dashboard data
const data = {
  user: {
    name: "NextSora Admin",
    email: "admin@nextsora.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "NextSora",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Development",
      logo: AudioWaveform,
      plan: "Dev",
    },
    {
      name: "Staging",
      logo: Command,
      plan: "Staging",
    },
  ],
  navMain: [
    {
      title: "Danh Mục Sản Phẩm",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Phân Loại",
          url: "/",
        },
        {
          title: "Nhóm Sản Phẩm",
          url: "/analytics",
        },
        {
          title: "Sản Phẩm",
          url: "/reports",
        },
        {
          title: "Bài Viết",
          url: "/posts",
        },
      ],
    },
    {
      title: "Người Dùng",
      url: "/users",
      icon: Bot,
      items: [
        {
          title: "Tất Cả Người Dùng",
          url: "/users",
        },
        {
          title: "Tài Khoản",
          url: "/accounts",
        },
        {
          title: "Vai Trò Người Dùng",
          url: "/users/roles",
        },
        {
          title: "Quyền Hạn",
          url: "/users/permissions",
        },
      ],
    },
    {
      title: "API",
      url: "/api",
      icon: BookOpen,
      items: [
        {
          title: "Documentation",
          url: "/api/docs",
        },
        {
          title: "Keys",
          url: "/api/keys",
        },
        {
          title: "Webhooks",
          url: "/api/webhooks",
        },
        {
          title: "Logs",
          url: "/api/logs",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings",
        },
        {
          title: "Security",
          url: "/settings/security",
        },
        {
          title: "Integrations",
          url: "/settings/integrations",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        },
      ],
    },
  ],
  projects: [
    {
      name: "API Development",
      url: "/projects/api",
      icon: Frame,
    },
    {
      name: "Web Frontend",
      url: "/projects/web",
      icon: PieChart,
    },
    {
      name: "Mobile App",
      url: "/projects/mobile",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
