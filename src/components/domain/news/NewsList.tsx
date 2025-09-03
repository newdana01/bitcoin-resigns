import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import SectionName from "../../../common/components/SectionName";
import { News } from "../../../common/types/News";

export default function NewsList() {
  const [newsList, setNewsList] = useState<News[]>([]);

  const fetchNews = async () => {
    try {
      const response = await fetch("/api/news");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNewsList(data);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="md:max-w-lg">
      <SectionName name="Quick News"></SectionName>
      <div className="h-[36rem] overflow-y-scroll">
        {newsList.map((news) => (
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            key={news.id}
            className="flex flex-col justify-between 
            my-3 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 font-normal h-[5rem]"
          >
            <div>{news.headline}</div>
            <div className="text-sm text-slate-500">
              {formatDistanceToNow(new Date(news.datetime * 1000), {
                addSuffix: true,
              })}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
