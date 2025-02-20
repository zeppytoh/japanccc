export interface Page {
  name: string;
  displayName: string;
  secondaryName?: string;
  path: string;
}

export const pages: Page[] = [
  { name: "university", displayName: "大学生", path: "/university" },
  { name: "about", displayName: "日本CCCについて", path: "/about" },
  {
    name: "resources",
    displayName: "リソース", path: "/resources" },
  { name: "support", displayName: "ご支援", path: "/support" },
  { name: "news", displayName: "ニュース", path: "/news" },
  { name: "blog", displayName: "ブログ", path: "/blog" },
  { name: "connect", displayName: "つながる", path: "/connect" },
];