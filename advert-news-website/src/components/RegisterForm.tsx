import React, { useState } from "react";

// Ülke ve Alan Kodu Listesi + Bayraklar ve Minimum Telefon Karakter Sayıları
const countryCodes = [
    { code: "+90", country: "Türkiye", flag: "../src/assets/flag/turkey.png", minLength: 10, format: "5XX XXX XX XX" },
    { code: "+43", country: "Avusturya", flag: "../src/assets/flag/austria.png", minLength: 9, format: "6XX XXX XXXX" },
    { code: "+49", country: "Almanya", flag: "../src/assets/flag/germany.png", minLength: 10, format: "15X XXXXXXXX" },
    { code: "+32", country: "Belçika", flag: "../src/assets/flag/belgium.png", minLength: 8, format: "4XX XX XX XX" },
    { code: "+359", country: "Bulgaristan", flag: "../src/assets/flag/bulgaria.png", minLength: 8, format: "87 XXX XXXX" },
    { code: "+31", country: "Hollanda", flag: "../src/assets/flag/netherlands.png", minLength: 9, format: "6 XXXXXXXX" },
    { code: "+33", country: "Fransa", flag: "../src/assets/flag/france.png", minLength: 9, format: "6 XX XX XX XX" },
    { code: "+44", country: "İngiltere", flag: "../src/assets/flag/uk.png", minLength: 10, format: "7XXX XXXXXX" },
    { code: "+41", country: "İsviçre", flag: "../src/assets/flag/switzerland.png", minLength: 9, format: "7X XXX XX XX" },
    { code: "+39", country: "İtalya", flag: "../src/assets/flag/italy.png", minLength: 10, format: "3XX XXX XXXX" },
    { code: "+40", country: "Romanya", flag: "../src/assets/flag/romania.png", minLength: 9, format: "7XX XXX XXX" },
];

const RegisterForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        countryCode: countryCodes[0].code, // Varsayılan olarak Türkiye
        affilateId: "afp751",
    });

    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Varsayılan ülke

    // Input değişimlerini yönetme (sadece inputlar için)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Ülke seçimi değiştirildiğinde, ülke bilgisini güncelle
    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCountry = countryCodes.find((c) => c.country === e.target.value);
        if (newCountry) {
            setSelectedCountry(newCountry);
            setFormData({ ...formData, countryCode: newCountry.code });
        }
    };

    // Form gönderme
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Form verilerini hazırlıyoruz
        const payload = {
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            countryCode: selectedCountry.code,
            phone: formData.phone,
            affilateId: formData.affilateId,
        };

        try {
            await fetch("https://script.google.com/macros/s/AKfycbzwGVkQI6qmfLWbxLXXuP8LZpIKSvGKHNs1uGAMBhdXpDAYX1T3MT9WR9QWHIS-Ro6ZDg/exec", {
                method: "POST",
                mode: "no-cors", //backendless CORS error solution
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            alert("Form başarıyla gönderildi!");
            setLoading(false);
        } catch (error) {
            console.error("Form gönderimi hatası:", error);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-gray-50 shadow-md rounded-lg w-full">
            <img src="src/assets/tp-logo.svg" className="m-auto mb-4" alt="Logo" />

            <form onSubmit={handleSubmit} className="mt-4" id="register-form">
                {/* Ad */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Adınız</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                        required
                    />
                </div>

                {/* Soyad */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Soyadınız</label>
                    <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                        required
                    />
                </div>

                {/* E-posta */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">E-Posta</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                        required
                    />
                </div>

                {/* Ülke Seçimi */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Ülke Seçin</label>
                    <div className="flex items-center gap-4">
                        {/* Ülke bayrağı */}
                        <img src={selectedCountry.flag} alt={selectedCountry.country} className="h-12" />
                        {/* Ülke seçimi dropdown'u */}
                        <select
                            name="countryCode"
                            value={selectedCountry.country}
                            onChange={handleCountryChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 bg-white"
                        >
                            {countryCodes.map((item) => (
                                <option key={item.code} value={item.country}>
                                    {item.country}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Telefon Numarası Girişi */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Telefon Numarası</label>
                    <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        minLength={selectedCountry.minLength}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                        placeholder={selectedCountry.format}
                        required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        {selectedCountry.country} için en az {selectedCountry.minLength} haneli telefon numarası giriniz.
                    </p>
                </div>

                {/* Buton */}
                {loading ? (
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition disabled">
                        Bekleniyor...
                    </button>
                ) : (
                    <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                        Kayıt Ol
                    </button>
                )}
            </form>
        </div>
    );
};

export default RegisterForm;
