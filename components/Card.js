import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, preview }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-6 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="mr-3 rounded border border-emerald-500 bg-transparent py-2 px-4 font-semibold text-emerald-700 hover:border-transparent hover:bg-emerald-500 hover:text-white"
            aria-label={`Link to ${title}`}
          >
            Código
          </Link>
        )}
        {href && (
          <Link
            href={preview}
            className="rounded border border-emerald-500 bg-transparent py-2 px-4 font-semibold text-emerald-700 hover:border-transparent hover:bg-emerald-500 hover:text-white"
            aria-label={`Link to ${title}`}
          >
            Previsualizar
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
