import React from "react";

const Header: React.FC = () => {
    const scrollToForm = () => {
        const formElement = document.getElementById("register-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <header className="w-screen h-20 bg-[rgb(207,30,56)] text-white text-xl font-bold relative">
            <div className="flex justify-between items-center h-full px-4 sm:px-24">
                {/* Sol Kısım - Logo ve Menü */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <img onClick={scrollToForm} className="w-32 sm:w-48 h-auto cursor-pointer" src="../src/assets/logo-trt.svg" alt="Logo" />

                    {/* Menü - Mobilde Gizli, Büyük Ekranda Göster */}
                    <ul className="hidden md:flex justify-center gap-2 text-sm">
                        <li className="flex items-center hover:bg-amber-50 hover:text-rose-700 hover:rounded-bl-xl hover:rounded-tr-xl py-1 px-2">
                            <a href="#">SICAK</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 cursor-pointer">
                                <path
                                    fill-rule="evenodd"
                                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </li>
                        <li className="flex items-center hover:bg-amber-50 hover:text-rose-700 hover:rounded-bl-xl hover:rounded-tr-xl py-1 px-2">
                            <a href="#">SAVUNMA</a>
                        </li>
                        <li className="flex items-center hover:bg-amber-50 hover:text-rose-700 hover:rounded-bl-xl hover:rounded-tr-xl py-1 px-2">
                            <a href="#">ÇOCUK</a>
                        </li>
                        <li className="flex items-center hover:bg-amber-50 hover:text-rose-700 hover:rounded-bl-xl hover:rounded-tr-xl py-1 px-2">
                            <a href="#">ÖZEL HABER</a>
                        </li>
                        <li className="flex items-center hover:bg-amber-50 hover:text-rose-700 hover:rounded-bl-xl hover:rounded-tr-xl py-1 px-2">
                            <a href="#">DOSYA HABER</a>
                        </li>
                        <li className="flex items-center hover:bg-amber-50 hover:text-rose-700 hover:rounded-bl-xl hover:rounded-tr-xl py-1 px-2">
                            <a href="#">DİĞER</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 cursor-pointer">
                                <path
                                    fill-rule="evenodd"
                                    d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </li>
                    </ul>
                </div>

                {/* Sağ Kısım - Arama, Bildirim ve Giriş Butonu */}
                <div onClick={scrollToForm} className="flex gap-4 items-center">
                    <div className="flex items-center gap-2 m-6 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span onClick={scrollToForm} className="text-sm">
                            CANLI
                        </span>
                    </div>

                    {/* Arama İkonu */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 cursor-pointer">
                        <path
                            fillRule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                            clipRule="evenodd"
                        />
                    </svg>

                    {/* Bildirim İkonu */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 cursor-pointer">
                        <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                        <path
                            fillRule="evenodd"
                            d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Header;
