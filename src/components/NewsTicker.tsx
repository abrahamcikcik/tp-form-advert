import React from "react";

const NewsTicker: React.FC = () => {
    // Örnek haber listesi
    const news = [
        "EKONOMİ: Ekonomi piyasaları yeni haftaya nasıl başladı?",
        "EĞİTİM: Bakan açıkladı yeni eğitim sistemi mecliste!",
        "FİNANS: Maliye Bakanı bu hafta Türkiye Petrolleri vatandaş yatırım fonunu tartışıyor.",
        "TEKNOLOJİ: Yatırımda AI devrimi! Yapay zeka yatırımları artıyor.",
        "KRİPTO: Ralli yaklaşıyor! Bitcoin 120.000 doları aşacak mı?",
    ];

    const scrollToForm = () => {
        const formElement = document.getElementById("register-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div onClick={scrollToForm} className="w-full bg-gray-200 text-white overflow-hidden sm:rounded-tr-xl sm:rounded-bl-xl mt-4">
            <div className="flex items-center">
                {/* Sol Kısım - Başlık */}
                <div className="hidden md:block bg-[rgb(207,30,56)] py-3 px-4 text-white font-bold w-54 rounded-tr-xl rounded-bl-xl text-xl">
                    SON HABERLER
                </div>

                {/* Sağ Kısım - Kayan Haberler */}
                <div className="w-full overflow-hidden relative p-4 md:p-0">
                    <div className="flex animate-scroll">
                        {/* Haberler iki defa ekleniyor */}
                        {[...news, ...news].map((item, index) => (
                            <span key={index} className="mx-4 text-black font-bold text-md whitespace-nowrap">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tailwind Animasyonları */}
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }

                .animate-scroll {
                    display: flex;
                    min-width: 200%;
                    animation: scroll 25s linear infinite;
                }
                `}
            </style>
        </div>
    );
};

export default NewsTicker;
