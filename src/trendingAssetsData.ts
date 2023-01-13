import BitcoinLogo from "./images/Bitcoin.png";
import BinanceLogo from "./images/Binance.png";
import EthereumLogo from "./images/Ethereum.png";
import ShibaInuLogo from "./images/SHIBA INU (SHIB).png";
import SolanaLogo from "./images/Solana.png";

type ParingsType = {
    name: string;
    img: string;
    id: string;
  };
  
  type TrendingAssetsType = {
    id: string;
    assetIcon: string;
    assetName: string;
    assetSymbol: string;
    assetPrice: number;
    changeOfPrice: number;
    tvl: number;
    popularParings: ParingsType[];
  };
  
 export const trendingAssetsData: TrendingAssetsType[] = [
    {
      id: "1",
      assetIcon: BitcoinLogo,
      assetName: "Bitcoin",
      assetSymbol: "BTC",
      assetPrice: 31812.08,
      changeOfPrice: -10,
      tvl: 60000,
      popularParings: [
        { name: "Solana", img: SolanaLogo, id: "1" },
        { name: "Binance", img: BinanceLogo, id: "2" },
        { name: "Ethereum", img: EthereumLogo, id: "3" },
      ],
    },
    {
      id: "2",
      assetIcon: BinanceLogo,
      assetName: "Binance USD",
      assetSymbol: "BUSD",
      assetPrice: 31812.08,
      changeOfPrice: -20,
      tvl: 60000,
      popularParings: [
        { name: "Solana", img: SolanaLogo, id: "1" },
        { name: "Bitcoin", img: BitcoinLogo, id: "2" },
        { name: "Ethereum", img: EthereumLogo, id: "3" },
      ],
    },
    {
      id: "3",
      assetIcon: SolanaLogo,
      assetName: "Solana",
      assetSymbol: "SOL",
      assetPrice: 31812.08,
      changeOfPrice: +10,
      tvl: 60000,
      popularParings: [
        { name: "Bitcoin", img: BitcoinLogo, id: "1" },
        { name: "Binance", img: BinanceLogo, id: "2" },
        { name: "Ethereum", img: EthereumLogo, id: "3" },
      ],
    },
    {
      id: "4",
      assetIcon: EthereumLogo,
      assetName: "Ethereum",
      assetSymbol: "ETH",
      assetPrice: 31812.08,
      changeOfPrice: +10,
      tvl: 60000,
      popularParings: [
        { name: "Solana", img: SolanaLogo, id: "1" },
        { name: "Binance", img: BinanceLogo, id: "2" },
        { name: "Bitcoin", img: BitcoinLogo, id: "3" },
      ],
    },
    {
      id: "5",
      assetIcon: ShibaInuLogo,
      assetName: "Shiba Inu",
      assetSymbol: "SHIB",
      assetPrice: 31812.08,
      changeOfPrice: +10,
      tvl: 60000,
      popularParings: [
        { name: "Solana", img: SolanaLogo, id: "1" },
        { name: "Binance", img: BinanceLogo, id: "2" },
        { name: "Ethereum", img: EthereumLogo, id: "3" },
      ],
    },
  ];