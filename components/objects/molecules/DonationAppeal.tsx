import URL from "@/const/url";

const DonationAppeal = () => {
  return (
    <div className="border w-3/4 md:w-2/3 p-4 md:p-8 rounded-md">
      <h3 className="text-xl md:text-2xl">募金ご協力のお願い</h3>
      <p className="pt-2 pb-4 text-sm md:text-base">
        ARES
        Projectでは、現在活動資金のためのご寄附を募集しております。皆様から頂いた資金は、機体の開発や科学分析に必要な物品の購入および大会や展示会の渡航費等に活用いたします。皆様のご支援を心よりお待ちしております。
      </p>
      <a href={URL.tohoku_university_fund} target="_blank" rel="noreferrer">
        <button className="border border-black text-black px-4 py-2 rounded-md text-sm md:text-base duration-300 hover:bg-black hover:text-white">
          募金する
        </button>
        <p className="text-xs py-2 text-gray-400">
          ※東北大学基金のページに遷移します
        </p>
      </a>
    </div>
  );
};

export default DonationAppeal;
