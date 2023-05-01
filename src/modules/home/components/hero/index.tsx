import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Les carnets Le Virgule
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
        Fruits d’une recherche assidue, les carnets Virgule sont façonnés à la main dans nos ateliers
dans un souci de précision, de confort et d’équilibre. En outre, leur esthétique minimaliste
exige une attention constante aux moindres détails, et ce à chaque étape du processus de fabrication.

Nous garantissons ainsi pour chacun de nos carnets une qualité, pratique comme esthétique, irréprochable.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/1_A7i_lot_cyan_rouge.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
