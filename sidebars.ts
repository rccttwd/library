import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  S1: [
    "contents/S1/index",
    {
      type: "category",
      label: "單元二：敘事寫人",
      // link: { type: "doc", id: "S1/敘事寫人/index" },
      items: ["passages/岳飛之少年時代", "passages/木蘭辭"],
    },
    {
      type: "category",
      label: "單元三：借事抒情",
      // link: { type: "doc", id: "S1/借事抒情/index" },
      items: ["passages/背影"],
    },
    {
      type: "category",
      label: "單元四：詩歌欣賞",
      link: { type: "doc", id: "contents/S1/詩歌欣賞" },
      items: ["passages/燕詩", "passages/送友人"],
    },
    {
      type: "category",
      label: "單元六：景物描寫（一）",
      link: { type: "doc", id: "contents/S1/景物描寫（一）" },
      items: ["passages/風雪中的北平", "passages/海濱仲夏夜"],
    },
    //   {
    //     type: "category",
    //     label: "單元七：說明的方法和順序",
    //     link: { type: "doc", id: "S1/單元七：說明的方法和順序/index" },
    //     items: ["S1/單元七：說明的方法和順序/生物之間的微妙關係"],
    //   },
    {
      type: "category",
      label: "單元八：借事說理",
      // link: { type: "doc", id: "S1/單元八：借事說理/index" },
      items: ["passages/賣油翁"],
    },
    {
      type: "category",
      label: "作品選讀",
      // link: { type: "doc", id: "" },
      items: [
        "passages/客至",
        "passages/從軍行七首（其二）",
        "passages/曾子殺豬",
        "passages/海上的日出",
        "passages/涉江采芙蓉",
        "passages/生物之間的微妙關係（節錄）",
      ],
    },
  ],

  S2: [
    "contents/S2/index",
    {
      type: "category",
      label: "單元五：借事說理",
      // link: { type: "doc", id: "S3/單元一：說明的語言/index" },
      items: ["passages/習慣說"],
    },
  ],

  S3: [
    "contents/S3/index",
    {
      type: "category",
      label: "單元一：說明的方法、順序和層次",
      // link: { type: "doc", id: "S3/單元一：說明的語言/index" },
      items: ["passages/核工記"],
    },
    {
      type: "category",
      label: "單元二：記敘的方法和詳略",
      // link: { type: "doc", id: "S3/單元二：記敘的方法和詳略/index" },
      items: ["passages/爸爸的花兒落了", "passages/閒情記趣（節錄）"],
    },
    {
      type: "category",
      label: "單元四：詞曲欣賞",
      link: { type: "doc", id: "contents/S3/詞曲欣賞" },
      items: [
        "passages/水調歌頭．明月幾時有",
        "passages/天淨沙．秋思",
        "passages/虞美人．春花秋月何時了",
      ],
    },
    {
      type: "category",
      label: "單元六：小說與戲劇欣賞",
      // link: { type: "doc", id: "S3/單元六：小說與戲劇欣賞/index" },
      items: ["passages/孔明借箭", "passages/一碗陽春麵"],
    },
    {
      type: "category",
      label: "單元七：論證的方法",
      // link: { type: "doc", id: "S3/單元七：論證的方法/index" },
      items: ["passages/最苦與最樂"],
    },
    {
      type: "category",
      label: "單元九：文言選讀（六）",
      // link: { type: "doc", id: "S3/單元九：文言選讀（三）/index" },
      items: ["passages/論語八則", "passages/論四端"],
    },
    {
      type: "category",
      label: "作品選讀",
      // link: { type: "generated-index", slug: "/S3/作品選讀" },
      items: ["passages/燭之武退秦師", "passages/四塊玉．閑適", "passages/大鐵椎傳"],
    },
  ],

  settext: [
    {
      type: "category",
      label: "指定文言經典學習材料",
      link: { type: "generated-index", slug: "/settext" },
      items: [{ type: "autogenerated", dirName: "settext" }],
    },
  ],

  dse: [
    {
      type: "category",
      label: "歷屆文憑試閱讀篇章",
      link: { type: "generated-index", slug: "/dse" },
      items: [{ type: "autogenerated", dirName: "dse" }],
    },
  ],
};

export default sidebar;
