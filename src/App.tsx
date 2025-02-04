import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import NewsTicker from "./components/NewsTicker";
import MainNews from "./components/MainNews";
import RegisterForm from "./components/RegisterForm";
import MediaContentList from "./components/MediaContentList";
import Footer from "./components/Footer";
import img from "./assets/main-new-1.jpg"

const App: React.FC = () => {
    return (
        <div className="container mx-auto min-h-screen flex flex-col items-center">
            {/* Header */}
            <Header />
            <SubHeader />
            <NewsTicker />

            {/* Main Content */}
            <MainNews
                imageUrl={img}
                title="SON DAKİKA: KARARNAME İMZALANDI! Erdoğan' dan Yeni Ekonomik Adımlar! Her aileye 75.000 TL' ye varan devlet katkısı!"
                description="Ekonomik krizin etkilerini azaltmak için yeni bir kararname imzalandı. Cumhurbaşkanı Recep Tayyip Erdoğan, her aileye 75.000 TL' ye varan devlet katkısı yapılacağını açıkladı. Türkiye Petrolleri' nin Avrupa' da her vatandaşa bir gelir elde etme imkanı sağlamayı hedefleyen projesi de kararname ile yürürlüğe girdi. Proje sadece Türkiye Cumhuriyeti vatandaşı olan kesime hitap edecek ve 18 yaş sınırlaması uygulanacaktır. Devlet güvencesi ile birlikte yeni gelir kapılarını açarak vatandaşların ekonomik anlamda rahatlamasını sağlamayı hedefleyen proje, 2025 yılı itibari ile uygulanmaya başladı. Hedef 2025 yılı sonuna kadar 1 milyon vatandaşla birlikte döviz cinsi geliri %14 arttırarak Merkez Bankası rezervlerine katkı sağlamak ve enflansyonla mücadelede vatandaşa sahip çıkmak."
            />
            <RegisterForm />
            <MediaContentList />
            <RegisterForm />
            <Footer />
        </div>
    );
};

export default App;
