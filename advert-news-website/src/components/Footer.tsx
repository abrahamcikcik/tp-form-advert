import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-8 w-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Üst Kısım: Copyright ve Sosyal Medya İkonları */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between border-b border-gray-200 pb-4 mb-4">
                    <p className="text-sm text-gray-500 mt-4 md:mt-0 text-center md:text-left">© 2025 Türkiye Radyo Televizyon Kurumu</p>

                    {/* Sosyal İkonlar */}
                    <div className="flex items-center justify-center space-x-4">
                        {/* Facebook */}
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                        >
                            {/* Buraya Facebook ikonu SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-600">
                                <path d="M9.197 21V12.999H6V9.741h3.197V7.535c0-3.179 1.933-4.907 4.757-4.907 1.352 0 2.515.101 2.853.145v3.309l-1.96.001c-1.536 0-1.832.73-1.832 1.802v2.361h3.664l-.478 3.258h-3.186V21"></path>
                            </svg>
                        </a>

                        {/* X (Twitter) */}
                        <a
                            href="#"
                            aria-label="X Twitter"
                            className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                        >
                            {/* Buraya X (Twitter) ikonu SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600">
                                <path d="M13.49 2.16c-.67.31-1.29.52-1.91.74-1.13.38-2.02 1.04-2.66 1.87C7.92 6.14 7.56 7.46 7.76 8.79c.21 1.45.81 2.62 1.82 3.58-1.05-.05-1.93-.37-2.66-.94v.1c0 2.05 1.44 3.8 3.47 4.2-.38.11-.81.14-1.26.05.38 1.22 1.45 2.1 2.72 2.13-1.06.8-2.42 1.27-3.94 1.27-.25 0-.5-.01-.74-.04 1.46.93 3.19 1.44 5.07 1.44 6.33 0 9.79-5.46 9.79-10.2 0-.16-.01-.33-.02-.49.67-.52 1.22-1.18 1.67-1.91-.61.29-1.25.48-1.92.57a3.61 3.61 0 0 0 1.58-2.01c-.66.41-1.37.71-2.13.87A3.53 3.53 0 0 0 17 5.56a3.52 3.52 0 0 0-3.51-3.4c-.64 0-1.23.15-1.77.41z"></path>
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                        >
                            {/* Buraya Instagram ikonu SVG */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 7.125C2.25 5.127 3.877 3.5 5.875 3.5h12.25c1.998 0 3.625 1.627 3.625 3.625v12.25c0 1.998-1.627 3.625-3.625 3.625H5.875a3.625 3.625 0 0 1-3.625-3.625V7.125z"
                                />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75h.008v.008h-.008V6.75z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                        >
                            {/* Buraya LinkedIn ikonu SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600">
                                <path d="M4.98 3.5c0 1.38-1.1 2.5-2.48 2.5S0 4.88 0 3.5A2.5 2.5 0 0 1 4.98 3.5zM.28 8h4.91v13H.28zM8.42 8h4.71v1.78h.06c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.96 3.31 5.96 7.61v8.18h-4.91v-7.26c0-1.73-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82v7.39H8.42V8z"></path>
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a
                            href="#"
                            aria-label="YouTube"
                            className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
                        >
                            {/* Buraya YouTube ikonu SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600">
                                <path d="M21.8 8.001s-.2-1.4-.8-2c-.7-.8-1.4-.8-1.8-.9C16.4 5 12 5 12 5h-.1s-4.3 0-6.3.2c-.4.1-1.1.1-1.8.9-.6.7-.8 2-.8 2S3 9.6 3 11.201v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.7.7 2.2.8 1.6.2 6.8.2 6.8.2s4.3 0 6.3-.2c.4-.1 1.1-.1 1.8-.9.6-.7.8-2 .8-2s.2-1.6.2-3.2v-1.6c-.2-1.601-.2-3.201-.2-3.201zM9.602 13.701v-3.2l3.1 1.6-3.1 1.6z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Orta Kısım: Birden fazla sütun içeren linkler */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-700 pb-6 border-b border-gray-200">
                    <ul className="space-y-1">
                        <li>
                            <a href="#">Haberler</a>
                        </li>
                        <li>
                            <a href="#">Canlı Borsa</a>
                        </li>
                        <li>
                            <a href="#">Euro TL</a>
                        </li>
                        <li>
                            <a href="#">Puan Durumu</a>
                        </li>
                        <li>
                            <a href="#">Şans Oyunları</a>
                        </li>
                        <li>
                            <a href="#">Ayetel Kürsi</a>
                        </li>
                        <li>
                            <a href="#">Altın Fiyatları</a>
                        </li>
                        <li>
                            <a href="#">Künye</a>
                        </li>
                    </ul>

                    <ul className="space-y-1">
                        <li>
                            <a href="#">Güncel Haberler</a>
                        </li>
                        <li>
                            <a href="#">Burçlar</a>
                        </li>
                        <li>
                            <a href="#">Astroloji</a>
                        </li>
                        <li>
                            <a href="#">Milli Piyango Sonuçları</a>
                        </li>
                        <li>
                            <a href="#">Doğum Günü Gazetesi</a>
                        </li>
                        <li>
                            <a href="#">Rüya Tabirleri</a>
                        </li>
                        <li>
                            <a href="#">Yerel Haberler</a>
                        </li>
                        <li>
                            <a href="#">Seçim Sonuçları</a>
                        </li>
                    </ul>

                    <ul className="space-y-1">
                        <li>
                            <a href="#">Son Dakika Haberler</a>
                        </li>
                        <li>
                            <a href="#">Bitcoin</a>
                        </li>
                        <li>
                            <a href="#">Borsa</a>
                        </li>
                        <li>
                            <a href="#">Yayın Akışı</a>
                        </li>
                        <li>
                            <a href="#">E-Gazete</a>
                        </li>
                        <li>
                            <a href="#">Güzel Sözler</a>
                        </li>
                        <li>
                            <a href="#">İstanbul İmsakiye</a>
                        </li>
                        <li>
                            <a href="#">Erkek İsimleri</a>
                        </li>
                    </ul>

                    <ul className="space-y-1">
                        <li>
                            <a href="#">Döviz Kuru</a>
                        </li>
                        <li>
                            <a href="#">Bilezik Fiyatları</a>
                        </li>
                        <li>
                            <a href="#">Yükselen Burç</a>
                        </li>
                        <li>
                            <a href="#">Hava Durumu</a>
                        </li>
                        <li>
                            <a href="#">Namaz Vakitleri</a>
                        </li>
                        <li>
                            <a href="#">Seri İlanlar</a>
                        </li>
                        <li>
                            <a href="#">Ankara İmsakiye</a>
                        </li>
                        <li>
                            <a href="#">Kız İsimleri</a>
                        </li>
                    </ul>
                </div>

                {/* Alt Kısım: Küçük linkler */}
                <div className="flex flex-wrap items-center justify-center md:justify-between space-x-4 text-sm text-gray-700 py-4 border-b border-gray-200">
                    <a href="#">TRT'ye Reklam Ver</a>
                    <a href="#">Yatırımcı İlişkileri</a>
                    <a href="#">Bize Ulaşın</a>
                    <a href="#">TRT Kurumsal</a>
                </div>

                {/* En Alt: Küçük Açıklama */}
                <div className="py-4 text-sm text-gray-600 leading-relaxed">
                    <p>
                        Türkiye gündeminden son dakika haberleri, büyün yaşanan en son gelişmeler, siyaset gündeminden güncel haberler ve bütün son
                        dakika haberleri için TRT'nin internet haberi sitesi trthaber.com; ucuza bilet kampanyaları, konut kira güncellemeleri,
                        Kapasite raporu ve kamu yararına dair tüm gelişmeler.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
