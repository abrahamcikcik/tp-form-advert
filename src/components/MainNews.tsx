import React, { useState } from "react";

export interface MainNewsProps {
    imageUrl: string;
    title: string;
    description: string;
}

const MainNews: React.FC<MainNewsProps> = ({ imageUrl, title, description }) => {
    // Metni göster/gizle state'i
    const [showFull, setShowFull] = useState(false);

    const scrollToForm = () => {
        const formElement = document.getElementById("register-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mt-4">
            {/* Sol Kısım - Büyük Resim */}
            <div className="w-full md:w-2/3">
                <img className="w-full h-64 md:h-full object-cover" src={imageUrl} alt={title} />
            </div>

            {/* Sağ Kısım - Haber Bilgileri */}
            <div className="w-full md:w-1/3 p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className=" bg-red-500 text-white rounded-tr-lg rounded-bl-lg px-2 py-1 text-sm">Türkiye</span>
                    <span className=" bg-red-500 text-white rounded-tr-lg rounded-bl-lg px-2 py-1 text-sm">Yatırım</span>
                    <span className=" bg-red-500 text-white rounded-tr-lg rounded-bl-lg px-2 py-1 text-sm">Ekonomi</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8">{title}</h2>

                {/* Açıklama - mobilde 4 satırdan sonra kesilecek */}
                <p
                    className={`text-gray-600 mt-2 transition-all
            ${showFull ? "" : "line-clamp-1 md:line-clamp-4 overflow-hidden"}
          `}
                >
                    {description}
                </p>

                {/* Devamını Göster / Daha Az Göster butonu (sadece mobilde gözüksün istersen md:hidden ekleyebilirsin) */}
                <div>
                    {!showFull ? (
                        <button onClick={() => setShowFull(true)} className="text-red-600 hover:underline text-sm">
                            Devamını Göster
                        </button>
                    ) : (
                        <button onClick={() => setShowFull(false)} className="text-red-600 hover:underline text-sm">
                            Daha Az Göster
                        </button>
                    )}
                </div>

                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition" onClick={scrollToForm}>
                    Şimdi Başvur →
                </button>
            </div>
        </div>
    );
};

export default MainNews;
