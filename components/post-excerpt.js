import Link from "next/link";
import PostDate from "../components/post-date";
import ExternalLinkIcon from "../public/images/external-link.svg";

export default function PostExcerpt({ post }) {
  const { slug, meta } = post;
  const isExternal = meta.hasOwnProperty("link") ? true : false;

  function buildLink() {

    const attributes = {
      title: meta.title,
      rel: isExternal ? 'noopener noreferrer' : '',
      target: isExternal ? '_blank' : '',
    };

    return (
      <a {...attributes} className="relative block border-b mb-4 border-gray-200 transition-colors duration-200 hover:text-purple hover:border-gray-200">
        <h1 className={`text-xl mb-4 leading-5 ${isExternal ? 'ml-6' : ''}`}>{meta.title}</h1>
        {isExternal ? (
          <ExternalLinkIcon className="h-4 w-4 top-1 inline-block absolute fill-current" />
        ) : (
          <></>
        )}
      </a>
    );
  }

  return (
    <article className="relative rounded-md flex flex-col shadow-xl">
      {meta.photo.url ? (
        <>
          <div className="max-h-48 overflow-hidden">
            <img src={meta.photo.url} className="rounded-t" width={meta.photo.width} height={meta.photo.height} />
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="flex flex-col px-6 pt-6 pb-4 flex-1">
        <Link href={isExternal ? meta.link : `/posts${slug}`}>
          {buildLink()}
        </Link>
        <p className="mt-0 mx-0 mb-10 leading-6">{meta.description}</p>
        <footer className="mt-auto">
          <PostDate classname="uppercase text-xs text-gray-400" dateString={meta.date} />
        </footer>
      </div>
    </article>
  );
}
