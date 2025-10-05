import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  { url: "/image1.jpg", caption: "I am happily 💜💫 Forever yours my love 😘💖" },
  { url: "/image2.jpg", caption: "our kitkat shartt 🍫✨ i hope u remember em 😍🤏" },
  { url: "/image3.jpg", caption: "hehe i beat ur ass at this game 🎮🏆🤣" },
  { url: "/image4.jpg", caption: "ahh I love this guy so much ☕💖🥰" },
  { url: "/image5.jpg", caption: "ghr ja rha hai ye 🏃‍♂️💨 mereko chord kr itni jldi 😅" },
  { url: "/image6.jpg", caption: "we know what u did last night!! 🌟👀🔥" },
  { url: "/image7.jpg", caption: "ohoo kidnapper 😎🤭 kidnapp me 🫣" },
  { url: "/image8.jpg", caption: "kitna pyara hai mera babyy 😍💞 just look at him naa!!! 🐻💖" },
  { url: "/image9.jpg", caption: "hawww kisne diye yeee tumhein 😏💌 hmphh bta mereko 🙄" },
  { url: "/image10.jpg", caption: "heheh wife ho aap to meri 💕🥺 bichare ke baal 😆" },
  { url: "/image11.jpg", caption: "hehehe see the dedication 😅🥹 bichara mar kr betha rkha hai 😂" },
  { url: "/image12.jpg", caption: "dekh kitna pyara lg rha hai 😍💄 keh rhi hu mein to makeup karva le mujhse ek baar 💋✨" },
  { url: "/image13.jpg", caption: "we held hands for the first time 🤝💞 picture quality well nvmm wo ignore krte hai 📸🙈" },
  { url: "/image14.jpg", caption: "haha computer ka kch tot ha 💻😎 sath bethe the hum khikhikhi kr rhe the 🤣🎉" },
  { url: "/image15.jpg", caption: "dekho to in mahashe ko kitna pyara sa hai 🥰💖 mnn krta hai collar se pkd kr ek jor se kiss dedu 😘💋 or bhag jao 🏃‍♂️💨" },
  { url: "/image16.jpg", caption: "i loveee this guyy soo muchh 🥰💖 happyyy birthdayy cutieee 🎂🎉" },
  { url: "/image17.jpg", caption: "CP and hauz khass 🏞️ iske alawa kahi or chalna date pr 💑💫" },
  { url: "/image18.jpg", caption: "ohh do u remember those kinder joy toys 🍬🥚 where are they now 🤔😅" },
  { url: "/image19.jpg", caption: "cannot wait to give you soo manyy kissess 😘💖 that you get breathless 😵‍💫 hehe (bol to diya chord mein kr na mene kch nahi hai hehe yk me 😏🫶)" },
  { url: "/image20.jpg", caption: "I love you a lott my love a lott 💖🥰 happiest birthdayy cutieee baby 🎉🎂💞" },
];

export default function MemoryGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: number) => {
    if (selectedImageIndex === null) return;
    
    const newIndex = (selectedImageIndex + direction + galleryImages.length) % galleryImages.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <section className="pt-8 pb-16 px-6" data-testid="memory-gallery">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-script text-white text-center mb-12">Our Photo Gallery 📷</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="memory-card bg-white/10 backdrop-blur-md rounded-xl p-2 cursor-pointer"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Lightbox */}
{selectedImageIndex !== null && (
  <div
    onClick={closeLightbox} // clicking outside closes
    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
    data-testid="gallery-lightbox"
  >
    <div
      onClick={(e) => e.stopPropagation()} // clicking image/caption won't close
      className="flex flex-col items-center"
    >
      <img
        src={galleryImages[selectedImageIndex].url}
        alt="Gallery image"
        className="max-w-[80vw] max-h-[80vh] rounded-xl shadow-2xl object-contain"
        data-testid="lightbox-image"
      />
      <p
        className="text-white text-center mt-4 text-lg font-script"
        data-testid="lightbox-caption"
      >
        {galleryImages[selectedImageIndex].caption}
      </p>

      {/* Optional navigation buttons */}
      <div className="flex mt-4 gap-4">
        <button
          onClick={() => navigateImage(-1)}
          className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6 mx-auto" />
        </button>
        <button
          onClick={() => navigateImage(1)}
          className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </div>
  </div>
)}


    </section>
  );
}
