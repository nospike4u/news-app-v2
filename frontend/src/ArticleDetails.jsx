import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ArticleDetails() {
  const params = useParams();
  const id = params["*"];
  //   const id = "football/article/2024/jul/15/spain-media-euro-2024-triumph-lamine-yamal-nico-williams-england";
  // const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const [image, setImage] = useState("");
  const articleURL = `https://content.guardianapis.com/${id}`;

  useEffect(() => {
    // setLoading(true);
    const paramsAPI = { "api-key": "test", 
      "show-fields": "bodyText, thumbnail", 
      "show-elements": "image" };
    axios.get(articleURL, { params: paramsAPI })
      .then((res) => {
        const _article = res.data.response;
        setArticle(_article.content);
        console.log(_article.content);
        console.log(_article.content.elements[0].assets[0].file);
        setImage(_article.content.elements[0].assets[0].file);
      })
      .catch((err) => console.log(err));
    // .finally(setLoading(false));
  }, []);

  return (
    <>
      <div className="min-h-screen text-center max-w-[900px] m-auto pt-8 pb-8">
        {article ? (
          <div className="flex flex-col gap-8">
            <BackButton />
            <div className="flex justify-center">
              <img className="w-full" src={image} alt="" />
            </div>
            <div className="flex justify-between ">
              <div className="pl-4 text-xl text-left opacity-60 font-semibold">Section: {article.sectionName}</div>
              <p className="opacity-60 font-semibold text-lg">Published: {article.webPublicationDate.replace("T", " ").replace("Z", "")}</p>
            </div>
            <div className="text-3xl">{article.webTitle}</div>
            <div className="text-justify">{article.fields.bodyText}</div>
          </div>
        ) : (
          <div className="relative">Loading the article</div>
        )}
      </div>
      ;
    </>
  );
}

const BackButton = () => {
  const navigate = useNavigate();
  function handleBackClick() {
    navigate(-1);
  }

  return (
    <button className="bg-black text-white max-w-[100px] px-8 py-2" onClick={handleBackClick}>
      Back
    </button>
  );
};
