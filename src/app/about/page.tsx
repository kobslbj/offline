import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="/images/about/aboutus1.png"
          alt="Offline 生活"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Offline 生活。
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Offline 的使命：讓高爾夫不僅僅是一場比賽，而是一種<br />
            生活方式。
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-neutral-50 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 text-lg md:text-xl text-neutral-800 leading-relaxed">
            <p>
              Offline 不只是服飾，而是一種生活方式，無縫地從球場延伸到街頭。
            </p>
            <p>
              我們從台北出發，帶著一個想法：讓高爾夫走出球場，融入日常。
            </p>
            <p>
              高爾夫不僅是一場比賽，更是一種心境，一種提醒：慢下來、重新連結，用心生活。
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/about/aboutus2.png"
                alt="Offline 故事"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Offline 故事
              </h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  三位朋友，一個願景：重新定義
                </p>
                <p>
                  高爾夫作為生活方式的精神。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
