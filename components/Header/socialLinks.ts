export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/malvaceae.jewelry/",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/malvaceae_official/",
    icon: "instagram",
  },
  {
    label: "LINE",
    href: "https://lin.ee/gMt8m42",
    icon: "line",
  },
  {
    label: "Mail",
    href: "mailto:info@malvaceae.jp",
    icon: "mail",
  },
] as const;

export type SocialIcon = (typeof socialLinks)[number]["icon"];
