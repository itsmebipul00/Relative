import classNames from "classnames";
import TrendingAssetsLogo from "./images/activity.png";
import { trendingAssetsData } from "./trendingAssetsData";

function App() {
  return (
    <section className="bg-[#14172B] w-[100vw] text-[#ECF0FF] font-semibold text-base p-4 md:p-10 xl:p-20 min-h-screen flex flex-col justify-center">
      <div className="flex items-center gap-5 ">
        <img
          src={TrendingAssetsLogo}
          alt="trending-assets"
          className="w-4 h-4"
        />
        <p>Trending Assets</p>
      </div>
      <div className="grid gap-16 px-5 grid-cols-fit">
        {trendingAssetsData.map((data) => (
          <div className="flex flex-col min-h-fit" key={data.id}>
            <div
              className={classNames(
                "w-24 h-24 rounded-full  flex items-center justify-center self-center relative top-12 border border-[rgba(236,240,255,0.1)]",
                {
                  "bg-bitcoin": data.assetName === "Bitcoin",
                  "bg-shiba": data.assetName === "Shiba Inu",
                  "bg-ethereum": data.assetName === "Ethereum",
                  "bg-solana": data.assetName === "Solana",
                  "bg-binance": data.assetName === "Binance USD",
                }
              )}
            >
              <img
                src={data.assetIcon}
                alt={data.assetName}
                className="w-12 h-12"
              />
            </div>

            <div className="flex flex-col gap-3 items-center px-5 pt-20  rounded-xl bg-[url('./images/curv.png')]  bg-no-repeat bg-[length:18rem]">
              <p className="text-[#737BAE] text-xs">
                {data.assetName} ({data.assetSymbol})
              </p>
              <p className="bg-[#14172B] rounded-2xl w-full py-2 gap-2 flex justify-center items-center">
                <span> ${data.assetPrice.toLocaleString()} </span>
                <span
                  className={classNames("text-xs", {
                    "text-[#00FFA3]": data.changeOfPrice >= 0,
                    "text-[#FF4D4D]": data.changeOfPrice < 0,
                  })}
                >
                  {data.changeOfPrice >= 0 && "+"}
                  {data.changeOfPrice} %
                </span>
              </p>
              <p className="text-[#737BAE] text-xs">Price</p>
              <p className="bg-[#14172B] rounded-2xl w-full py-2 text-center">
                ${data.tvl.toLocaleString()}
              </p>
              <p className="text-[#737BAE] text-xs">TVL</p>
              <div className="flex flex-col gap-2 pb-4 items-center justify-center">
                <div className="flex gap-3 p-3 rounded-3xl bg-[#14172B]">
                  {data.popularParings.map((paring) => (
                    <div key={paring.id}>
                      <img
                        src={paring.img}
                        alt={paring.name}
                        className="w-5 h-5"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[#737BAE] text-xs">Popular pairs</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
