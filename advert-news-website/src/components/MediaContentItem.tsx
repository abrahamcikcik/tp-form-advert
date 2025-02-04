import React from "react";

interface MediaContentItemProps {
  mediaType: "photo" | "video";
  mediaSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const MediaContentItem: React.FC<MediaContentItemProps> = ({
  mediaType,
  mediaSrc,
  title,
  description,
  reverse = false,
}) => {
  // Fotoğraf için genişlik: 1/2, video için: 1/3
  const mediaWidthClass = mediaType === "photo" ? "md:w-1/2" : "md:w-1/4";
  // İçerik kısmı: Fotoğraf için kalan 1/2, video için kalan 2/3
  const contentWidthClass = mediaType === "photo" ? "md:w-1/2" : "md:w-3/3";

  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} my-6 bg-[rgb(207,30,56)] rounded-4xl`}>
      {/* Medya kısmı */}
      <div className={mediaWidthClass}>
        {mediaType === "photo" ? (
          <img src={mediaSrc} alt={title} className="w-full h-auto object-cover rounded-lg" />
        ) : (
          <video controls className="w-full h-auto rounded-lg">
            <source src={mediaSrc} type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        )}
      </div>

      {/* İçerik kısmı */}
      <div className={`${contentWidthClass} p-4 flex flex-col justify-center`}>
        <h2 className="text-2xl font-bold mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default MediaContentItem;
