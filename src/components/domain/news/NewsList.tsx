import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import SectionName from "../../../common/components/SectionName";

export default function NewsList() {
  const [newsList, setNewsList] = useState([
    {
      id: 24642220,
      slug: "5000-Ethereum-Price-Narrative-Resurfaces-as-Big-Players-Rotate-Out-of-BTC",
      title:
        "$5,000 Ethereum Price Narrative Resurfaces as Big Players Rotate Out of BTC",
      description:
        "The Ethereum price has held up stronger than most in the recent sell-off. The token tested $4,300 but quickly bounced back above $4,500, posting weekly gains of 11%. By contrast, Bitcoin slipped 1. 6% week-on-week",
      published_at: "2025-08-27T08:30:00Z",
      created_at: "2025-08-27T08:30:00+00:00",
      kind: "news",
    },
    {
      id: 24635287,
      slug: "27-of-UK-Adults-Open-to-Crypto-in-Pensions-According-to-Aviva-Survey",
      title:
        "27% of UK Adults Open to Crypto in Pensions, According to Aviva Survey",
      description:
        "Around 27% of British adults would consider including cryptocurrency in their retirement plans, according to a new survey by Aviva. The findings suggest that crypto could eventually capture a portion of the UK’s multitrillion-pound pension market. Of those open to crypto in retirement funds, just over 40% said they were motivated by the potential for higher returns. The survey, conducted by Censuswide between June 4 and 6, polled 2,000 UK adults",
      published_at: "2025-08-27T04:49:16Z",
      created_at: "2025-08-27T04:49:16+00:00",
      kind: "news",
    },
    {
      id: 24623002,
      slug: "Uptober-Ethereum-Savior-Tom-Lee-Sees-Crypto-Outperforming-in-Q4",
      title: "Uptober? Ethereum Savior Tom Lee Sees Crypto Outperforming in Q4",
      description:
        "Crypto is on track to outperform in Q4 and potential September dips are for buying, Tom Lee says",
      published_at: "2025-08-26T20:22:07Z",
      created_at: "2025-08-26T20:22:07+00:00",
      kind: "news",
    },
    {
      id: 24621711,
      slug: "Solana-Tipped-to-Dethrone-Ethereum-in-Stablecoin-Race-Says-REX-CEO",
      title:
        "Solana Tipped to Dethrone Ethereum in Stablecoin Race, Says REX CEO",
      description:
        "Speaking on Bloomberg&#8217;s ETF IQ, King cautioned that most cryptocurrencies outside the top tier are questionable investments.",
      published_at: "2025-08-26T20:01:38Z",
      created_at: "2025-08-26T20:01:38+00:00",
      kind: "news",
    },
    {
      id: 24621497,
      slug: "Fundstrats-Lee-Predicts-Ethereum-Bottom-and-Rally-Above-5000",
      title: "Fundstrat's Lee Predicts Ethereum Bottom and Rally Above $5,000",
      description:
        "The second largest crypto by market value dipped to $4,341 early Tuesday before regaining some ground, but is still about 8% off its recently set record high.",
      published_at: "2025-08-26T19:50:31Z",
      created_at: "2025-08-26T19:50:31+00:00",
      kind: "news",
    },
    {
      id: 24614296,
      slug: "SharpLink-ETH-treasury-at-36-billion-after-adding-over-56000-ether",
      title:
        "SharpLink ETH treasury at $3.6 billion after adding over 56,000 ether",
      description:
        "The DAT's ether holdings reached 797,704 ETH after a $361 million ATM raise with about $200 million still to deploy and a treasury worth $3. 7 billion.",
      published_at: "2025-08-26T15:28:42Z",
      created_at: "2025-08-26T15:28:42+00:00",
      kind: "news",
    },
    {
      id: 24609221,
      slug: "BitMine-Buys-the-Dip-Adds-190K-ETH-to-Reach-79B-Holdings",
      title: "BitMine Buys the Dip, Adds 190K ETH to Reach $7.9B Holdings",
      description:
        "BitMine Immersion Technologies, led by Tom Lee, has become the world’s largest Ethereum treasury holder with 1. 71 million ETH worth $7. 9 billion. &lt;p&gt;The post BitMine Buys the Dip, Adds 190K ETH to Reach $7. 9B Holdings first appeared on Ecoinimist. &lt;/p&gt;",
      published_at: "2025-08-26T13:05:28Z",
      created_at: "2025-08-26T13:05:28+00:00",
      kind: "news",
    },
    {
      id: 24610518,
      slug: "SharpLink-Gaming-Lifts-Ethereum-Holdings-to-Nearly-800000-Coins",
      title: "SharpLink Gaming Lifts Ethereum Holdings to Nearly 800,000 Coins",
      description:
        "SharpLink Gaming increased its Ethereum position to about 797,704 coins after buying roughly 56,533 ETH last week for around $250 million, according to a company update dated Aug",
      published_at: "2025-08-26T13:00:45Z",
      created_at: "2025-08-26T13:00:45+00:00",
      kind: "news",
    },
    {
      id: 24608648,
      slug: "Ethereum-Outpaces-Bitcoin-Why-Analysts-Expect-ETH-to-Break-5K-Soon",
      title:
        "Ethereum Outpaces Bitcoin: Why Analysts Expect ETH to Break $5K Soon",
      description:
        "Ethereum’s recent rally above $4,300 has reignited market debate over whether the world’s second-largest cryptocurrency is about to enter a new growth phase — leading the broader digital asset market higher. While Bitcoin remains strong, analysts suggest Ethereum’s fundamentals, combined with macroeconomic tailwinds, could give it an edge in the weeks ahead. Bitcoin Holds Steady, but [&#8230;]",
      published_at: "2025-08-26T12:43:25Z",
      created_at: "2025-08-26T12:43:25+00:00",
      kind: "news",
    },
    {
      id: 24600854,
      slug: "Spot-Ethereum-ETFs-post-444-million-in-daily-inflows-outpacing-Bitcoin-ETFs",
      title:
        "Spot Ethereum ETFs post $444 million in daily inflows, outpacing Bitcoin ETFs",
      description:
        "One analyst said continued inflows into ETFs may indicate sustained institutional confidence in the underlying assets.",
      published_at: "2025-08-26T09:05:08Z",
      created_at: "2025-08-26T09:05:08+00:00",
      kind: "news",
    },
    {
      id: 24581360,
      slug: "Unknown-Investor-Stakes-25-Billion-in-Ether-Surpassing-Ethereum-Foundation",
      title:
        "Unknown Investor Stakes $2.5 Billion in Ether, Surpassing Ethereum Foundation",
      description: "An unidentified crypto wallet bought roughly $2",
      published_at: "2025-08-25T19:35:45Z",
      created_at: "2025-08-25T19:35:45+00:00",
      kind: "news",
    },
    {
      id: 24580224,
      slug: "Ethereums-supply-shock-incoming-Peeking-into-what-traders-are-up-to",
      title:
        "Ethereum’s supply shock incoming? Peeking into what traders are up to",
      description:
        "A record-breaking surge and shrinking exchange reserves could set ETH up for an even bigger run.",
      published_at: "2025-08-25T19:00:20Z",
      created_at: "2025-08-25T19:00:20+00:00",
      kind: "news",
    },
    {
      id: 24580080,
      slug: "BitMine-Adds-22B-in-ETH-in-a-Week-Tops-Global-Corporate-Rankings",
      title:
        "BitMine Adds $2.2B in ETH in a Week, Tops Global Corporate Rankings",
      description:
        "BitMine Immersion Technologies (BMNR) announced Monday that its crypto and cash reserves have swelled to $8. 82 billion, driven by an [&#8230;] The post BitMine Adds $2.",
      published_at: "2025-08-25T18:31:56Z",
      created_at: "2025-08-25T18:31:56+00:00",
      kind: "news",
    },
    {
      id: 24580032,
      slug: "ETHZilla-Authorizes-250M-Buyback-Expands-Ether-Treasury-to-489M",
      title:
        "ETHZilla Authorizes $250M Buyback, Expands Ether Treasury to $489M",
      description:
        "ETHZilla has officially announced the authorization of a significant $250 million buyback program, aiming to enhance shareholder value and increase overall market confidence. In conjunction with this move, the company is also expanding its Ether treasury holdings, bringing the total value of its Ethereum assets to an impressive $489 million. This strategic decision reflects ETHZilla's commitment to strengthening its financial position while leveraging opportunities within the dynamic cryptocurrency market.",
      published_at: "2025-08-25T17:21:13Z",
      created_at: "2025-08-25T17:21:13+00:00",
      kind: "news",
    },
    {
      id: 24577105,
      slug: "BitMine-Ethereum-Stash-Nears-8-Billion-After-ETH-Hits-All-Time-High",
      title:
        "BitMine Ethereum Stash Nears $8 Billion After ETH Hits All-Time High",
      description:
        "The leading Ethereum treasury bolstered its coffers significantly again last week.",
      published_at: "2025-08-25T16:17:13Z",
      created_at: "2025-08-25T16:17:13+00:00",
      kind: "news",
    },
    {
      id: 24575848,
      slug: "Is-20K-ETH-price-now-in-play-Ethereum-market-enters-039belief039-zone",
      title:
        "Is $20K ETH price now in play? Ethereum market enters &#039;belief&#039; zone",
      description:
        "Onchain data suggests Ethereum is in the “belief” stage of the bull cycle amid fresh all-time highs, opening the door to potentially even higher prices.",
      published_at: "2025-08-25T15:30:04Z",
      created_at: "2025-08-25T15:30:04+00:00",
      kind: "news",
    },
    {
      id: 24574825,
      slug: "BitMine-Adds-190500-ETH-22B-Weekly-Haul-Makes-It-No-1-Ethereum-Treasury",
      title:
        "BitMine Adds 190,500 ETH — $2.2B Weekly Haul Makes It No. 1 Ethereum Treasury",
      description:
        "Tom Lee’s BitMine, backed by bold institutional capital, now holds 1. 71 million ETH—staking its claim as the largest corporate Ethereum treasury",
      published_at: "2025-08-25T15:07:07Z",
      created_at: "2025-08-25T15:07:07+00:00",
      kind: "news",
    },
    {
      id: 24574822,
      slug: "Ethereum-Is-Digital-Fuel-Powering-the-Next-Financial-Era-Says-Crypto-Treasury-CEO",
      title:
        "Ethereum Is Digital Fuel Powering the Next Financial Era, Says Crypto Treasury CEO",
      description:
        "Ethereum has outperformed major tokens, with its role as infrastructure gaining traction among institutions as frameworks have advanced via the GENIUS Act. CEO Daniel Liu of Republic Technologies has described Ethereum as digital fuel and has pursued validator and derivatives yield.",
      published_at: "2025-08-25T15:04:30Z",
      created_at: "2025-08-25T15:04:30+00:00",
      kind: "news",
    },
    {
      id: 24574414,
      slug: "Ethereum-ETH-Price-Prediction-for-August-25",
      title: "Ethereum (ETH) Price Prediction for August 25",
      description: "Can correction of Ethereum (ETH) continue to $4,400 mark?",
      published_at: "2025-08-25T14:44:00Z",
      created_at: "2025-08-25T14:44:00+00:00",
      kind: "news",
    },
    {
      id: 24570530,
      slug: "Michael-Saylors-Strategy-Adds-3081-BTC-in-3569M-Purchase",
      title: "Michael Saylor’s Strategy Adds 3,081 BTC in $356.9M Purchase",
      description:
        "Michael Saylor’s Strategy announced on Monday its expansion of its Bitcoin reserves, confirming the acquisition of 3,081 BTC between August 18 and August 24.",
      published_at: "2025-08-25T12:35:30Z",
      created_at: "2025-08-25T12:35:30+00:00",
      kind: "news",
    },
  ]);

  return (
    <div className="md:max-w-lg">
      <SectionName name="Quick News"></SectionName>
      <div className="h-[70vh] overflow-y-scroll">
        {newsList.map((news, idx) => (
          <div
            key={idx}
            className="my-3 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 font-normal h-"
          >
            <div>{news.title}</div>
            <div className="text-sm text-slate-500">
              {formatDistanceToNow(new Date(news.published_at), {
                addSuffix: true,
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
