import React from "react";

const SubHeader: React.FC = () => {
    // Günün tarihini al
    const today = new Date().toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
    });

    return (
        <div className="hidden sm:block sm:w-screen sm:text-gray-800 sm:text-sm sm:py-2 sm:border-b sm:border-gray-300 sm:px-24">
            <div className="flex justify-between items-center py-2 px-4">
                {/* Sol Kısım - Günün Tarihi (Her zaman görünür) */}
                <div className="font-bold text-lg">#{today}</div>

                {/* Sağ Kısım - Mobilde Gizli, Büyük Ekranda Görünür */}
                <div className="hidden md:flex gap-4 items-center">
                    {/* Foto Fokus */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-rose-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8" color="rgb(207,30,56)">
                            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                            <path
                                fill-rule="evenodd"
                                d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span className="font-bold">Foto Fokus</span>
                    </div>

                    {/* Video Galeri */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-rose-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8" color="rgb(207,30,56)">
                            <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span className="font-bold">Video Galeri</span>
                    </div>

                    {/* İnfo Grafik */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-rose-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8" color="rgb(207,30,56)">
                            <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                clip-rule="evenodd"
                            />
                        </svg>

                        <span className="font-bold">İnfo Grafik</span>
                    </div>

                    {/* İnteraktif */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-rose-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8" color="rgb(207,30,56)">
                            <path d="M6 3a3 3 0 0 0-3 3v1.5a.75.75 0 0 0 1.5 0V6A1.5 1.5 0 0 1 6 4.5h1.5a.75.75 0 0 0 0-1.5H6ZM16.5 3a.75.75 0 0 0 0 1.5H18A1.5 1.5 0 0 1 19.5 6v1.5a.75.75 0 0 0 1.5 0V6a3 3 0 0 0-3-3h-1.5ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM4.5 16.5a.75.75 0 0 0-1.5 0V18a3 3 0 0 0 3 3h1.5a.75.75 0 0 0 0-1.5H6A1.5 1.5 0 0 1 4.5 18v-1.5ZM21 16.5a.75.75 0 0 0-1.5 0V18a1.5 1.5 0 0 1-1.5 1.5h-1.5a.75.75 0 0 0 0 1.5H18a3 3 0 0 0 3-3v-1.5Z" />
                        </svg>

                        <span className="font-bold">İnteraktif</span>
                    </div>

                    {/* Podcast */}
                    <div className="flex items-center gap-1 cursor-pointer hover:text-rose-700 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8" color="rgb(207,30,56)">
                            <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                            <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                        </svg>

                        <span className="font-bold">Podcast</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
