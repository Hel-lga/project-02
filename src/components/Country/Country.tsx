import { useParams, useSearchParams } from "react-router-dom";

export default function Country() {
  const { id, slug } = useParams(); // path variable
  const [searchParams, setSearchParams] = useSearchParams(); // query param (search param)
  const q = searchParams.get("q") || "";
  const lang = searchParams.get("lang") || "";
  // /coutries/12/usa?q=dollar&lang=eng
  return (
    <div>
      Country №{id} Slug:{slug}
      Query q:{q}
      Lang: {lang}
      Search lang:
      <input
        type="text"
        value={lang}
        onChange={(e) =>
          setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("lang", e.target.value);
            return newParams;
          })
        }
      />
    </div>
  );
}

//products
//products/18
