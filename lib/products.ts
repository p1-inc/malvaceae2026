import type { Product, ProductDetails } from "@/types/product";

const refleNecklaceDetails: ProductDetails = {
  code: "b0418da",
  materials: [
    "K18イエローゴールド",
    "プラチナ950 (チェーン：プラチナ850)",
    "K18ピンクゴールド",
  ],
  gem: ["天然ダイヤモンド 0.25ct(10p)"],
  size: "縦:約6mm×横:約6mm×高さ:約3.3mm",
  chain: [
    "ベネチアン45cm線径0.6mm(幅:0.6mm)",
    "長さ調節可能なシリコンアジャスター付",
    "取り外し可",
  ],
};

const pigeonBloodNecklaceDetails: ProductDetails = {
  code: "0130",
  materials: [
    "K18イエローゴールド",
    "プラチナ950 (チェーン：プラチナ850)",
    "K18ピンクゴールド",
  ],
  gem: [
    "天然非加熱ピジョンブラッドルビー 0.30ctアップ(1p)",
    "天然ダイヤモンド 0.04ctアップ(3p)",
  ],
  size: "縦：約11mm×横：約3mm×高さ：約3.5mm",
  chain: [
    "K18イエローゴールド／プラチナ850/K18ピンクゴールド",
    "ベネチアン40cm線径0.45mm(幅：0.45mm)",
    "3cm短くできるアジャスターカン付",
  ],
};

const pigeonBloodRingDetails: ProductDetails = {
  code: "c0075",
  materials: [
    "K18イエローゴールド",
    "プラチナ950",
    "K18ピンクゴールド",
  ],
  gem: [
    "天然非加熱ピジョンブラッドルビー 0.30ctUP(1p)",
    "天然ダイヤモンド 0.02ct(2p)",
  ],
  size: "縦:約4.5mm×横:約4mm×高さ:約3.5mm",
  band: "幅:約1.2mm×厚み:約1.4mm",
  ringSize: "5号-17号",
};

const diamondChainRingDetails: ProductDetails = {
  code: "b0230da",
  materials: [
    "K18イエローゴールド",
    "プラチナ950 (チェーン：プラチナ850)",
    "K18ピンクゴールド",
  ],
  gem: ["天然ダイヤモンド 0.10ct(1p)"],
  size: "縦:約3.8mm×横:約3.8mm×高さ:約2.3mm",
  chain: [
    "アズキ線径0.28mm(幅:1.0mm)",
    "サイズ調節可能なシリコンアジャスター付",
  ],
  ringSize: "フリーサイズ(最大18号前後)",
};

const lineDiamondPierceDetails: ProductDetails = {
  code: "b0373da",
  materials: [
    "K18イエローゴールド",
    "プラチナ950",
    "K18ピンクゴールド",
  ],
  gem: ["天然ダイヤモンド 計0.20ct/片側0.10ct(5p)"],
  size: "縦:約12.2mm×横:約2mm×奥行き:約1.5mm",
  hardware: [
    "K18イエローゴールド/プラチナ950/K18ピンクゴールド",
    "※キャッチのみプラチナ900",
    "ポスト長さ:約10mm×太さ:約0.6mm",
    "キャッチ:シリコンゴム付き地金キャッチ",
  ],
};

export const products: Product[] = [
  {
    id: "001",
    name: "ルフレ ダイヤモンドネックレス",
    price: 143000,
    image: "/images/products/1500_T7A7209.jpg",
    href: "https://item.rakuten.co.jp/malvaceae/0418da/",
    category: "necklace",
    description: "ネックレス",
    details: refleNecklaceDetails,
  },
  {
    id: "002",
    name: "非加熱ピジョンブラッドルビーネックレス",
    price: 58000,
    image: "/images/products/1500_T7A7225.jpg",
    href: "https://item.rakuten.co.jp/malvaceae/0130/",
    category: "necklace",
    description: "ネックレス",
    details: pigeonBloodNecklaceDetails,
  },
  {
    id: "003",
    name: "非加熱ピジョンブラッドルビーリング",
    price: 176000,
    image: "/images/products/1500_T7A7238.jpg",
    href: "https://item.rakuten.co.jp/malvaceae/0075/",
    category: "ring",
    description: "リング",
    details: pigeonBloodRingDetails,
  },
  {
    id: "004",
    name: "ダイヤモンド チェーンリング",
    price: 48400,
    image: "/images/products/1500_T7A7281.jpg",
    href: "https://item.rakuten.co.jp/malvaceae/0230da/",
    category: "ring",
    description: "リング",
    details: diamondChainRingDetails,
  },
  {
    id: "005",
    name: "ライン ダイヤモンドピアス",
    price: 42000,
    image: "/images/products/1500_T7A7260.jpg",
    href: "https://item.rakuten.co.jp/malvaceae/0373da/",
    category: "pierce",
    description: "ピアス",
    details: lineDiamondPierceDetails,
  },
];
