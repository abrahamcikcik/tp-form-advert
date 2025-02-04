import React from "react";
import MediaContentItem from "./MediaContentItem";

const mediaItems = [
    {
        mediaType: "photo",
        mediaSrc: "/src/assets/erdogan1.webp",
        title: "1- Beklenen başarılı bir mali yıl ve yeni gelir kapısı",
        description: "Proje ilk yılında beklentileri aşan bir sürat ile büyüyor. Mevcut kontejyan hızla ilerliyor. Projenin fırsatlarını kaçırmamak için binlerce vatandaş yatırım yapabilme fırsatı elde etmek için sıraya girdi. Proje, 2025 yılı itibari ile 1 milyon vatandaşa ulaşmayı hedefliyor. Binlerce vatandaş için finansal bir istikrar anlamına gelirken Merkez Bankası bütçesini dolduracak bir gelir kapısı olacak. Hazine ve Maliye Bakanı Sayın Mehmet Şimşek Avrupa pazarından gelir elde etme fırsatı sunan projenin Türkiye ekonomisine katkı sağlayacağını belirtti. Proje, Türkiye Petrolleri tarafından yürütülmekte olup, Türkiye Cumhuriyeti vatandaşlarına özel bir fırsat sunmaktadır. Proje, 18 yaş sınırı ile sadece yetişkin vatandaşlara hitap etmektedir. Proje, 2025 yılı itibari ile yürürlüğe girmiştir.",
    },
    {
        mediaType: "video",
        mediaSrc: "src/assets/video/review1.mp4",
        title: "2- Avrupa' dan projeye destek olan vatandaşlardan gelen destek videoları",
        description: "Belçika' da doğan vatandaşımız Mustafa Yaşar projeye desteğini ve karlılığını anlattığı teşekkür videosu ile platforma olan güven ve inancını iletti. Mustafa genç yaşına rağmen ülkesi ile birlikte kazanç sağlamanın gururunu açıkladı. Bir çok ünlünün desteğini sosyal medya üzerinden açıkladığı proje sayesinde Mustafa' da kazançlarını biriktirme yöntemi ile erken emeklilik beklediğini belirtti. Mustafa' nın videosu, projenin ne kadar güvenilir ve kazançlı olduğunu göstermektedir.",
    },
    {
        mediaType: "photo",
        mediaSrc: "src/assets/model.webp",
        title: "3- Dünya Ekonomik Forum garantili gelir modeli",
        description: "Dünya Ekonomik Forum' un başlattığı modelde Türkiye Petrolleri 2025 ve 2026 yılında yapacağı ithalat ve ihracatına vatandaşını ortak ederek müthiş ticarette ortaklarına pay ödeyerek yapacağı ticaretin hacmini büyütecek. Elde edilen gelire vatandaşta ortak edilecek ve her haneye gelir payı ödenecek. Devlet katkı payı ile beraber vatandaşın kazancı %14 artacak. Dünya Ekonomik Forum' un garantisi ile Türkiye Petrolleri' nin yatırımcılarına kazanç sağlaması bekleniyor. Karadeniz ve Akdeniz gazı ile birlikte yapılacak petrol ihracatında Türkiye Cumhuriyet vatandaşı olarak pay sahibi olacaksınız. Sayın bakan Şimşek piyasaların gösterdiği hareketlere göre elde edilecek gelirden vatandaşa ödenecek gelirden vergi alınmayacağını iletti.",
    },
    {
        mediaType: "photo",
        mediaSrc: "src/assets/atm.jpg",
        title: "4- Türkiye Petrolleri zor ekonomik dönemde güvenli bir liman mıdır?",
        description: "Türkiye Petrolleri, finansal istikrar ve yaşam standartlarının iyileştirilmesi için eşsiz bir fırsat sunmaktadir. Katılım hakkı sayısındaki artış ve ortalama gelirdeki yükseliş, hükümetin vatandaşların çıkarlarını koruma konusundaki kararlılığını göstermektedir. Bu, projenin finansal bağımsızlık için çabalayan binlerce Türk için daha da erişilebilir ve verimli hale geldiği anlamına geliyor.Bugün Türkiye Petrolleri ailesinin bir parçasi olun ve ekonomik istikrarsizliğin ortasinda istikrarli bir gelire erişin!",
    },
    {
        mediaType: "photo",
        mediaSrc: "src/assets/tp.jpg",
        title: "5- Nasıl katılabilirisiniz ?",
        description: "Türkiye Petrolleri sadece bir proje değil, her vatandaşın petrol işlemlerinden istikrarli bir pasif gelir elde etmesini sağlayan devlet destekli yenilikçi bir programdır. Projenin vatandaşlar için bu kadar popüler ve önemli olmasinin nedeni budur. Garantili gelir: Ortalama aylık yatırım geliri 200.000 liraya kadar çıkmaktadır ki bu özellikle kriz ve enflasyon dönemlerinde önemlidir. Basitlik ye otomasyon Türkiye Petrolleri, petrol piyasasindaki işlemleri otomatik olarak gerçeklestiren algoritmalar geliştirerek aktif yatırım yönetimine ihtiyaç duymadan istikrarli bir gelir sağlar. Minimum giriş eşiği: Projeye 5000 - 10000 Türk Lirası gibi bir meblağdan yatırım yapilabilir ve bu da projeyi nüfusun tüm kesimleri için erişilebilir kılar. Bu adım, projenin vatandaşlar arasindaki popülaritesinin temelini oluşturmuştur. Devlet desteği: Türkiye Petrolleri, Cumhurbaşkanı Erdoğan tarafından onaylanan bir program kapsamında faaliyet göstermekte ve bu da projeye olan güveni artırarak yatırımcılar için cazip hale getirmektedir.",
    },
    {
        mediaType: "photo",
        mediaSrc: "src/assets/koc.jpg",
        title: "6- Gücümüzü Cumhuriyet' in temelinden almaktayız.",
        description: "Koç Üniversitesi ve Esas Holding ile birlikte çalışarak bu yolda sizlere destek verecek uzmanların doğruluğu ve yeterliliği sağlanmaktadır.  Koç Holding Yönetim Kurulu ve Fenerbahçe Spor Kulübü Başkanı Sayın Ali Koç ve ailesi ile birlikte bu projeye tam desteklerini açıklayarak 2025 ve 2026 yıllarında vatandaşa verilecek her türlü maddi destek içeren projede üniversiteleri ile birlikte yer alacaklarını belirttiler. Proje kapsamınca destek alacağınız uzmanlar üniversite tarafından tanınmış yurt içi ve yurt dışında alanında uzman olarak sürdüren değerli hocalarımızdır. Türkiye Cumhuriyeti olarak yetişmiş insan kalitemizin farkındayız ve gücümüzü bu temelden almaktayız.",
    },
];

const MediaContentList: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {mediaItems.map((item, index) => (
                <MediaContentItem
                    key={index}
                    mediaType={item.mediaType as "photo" | "video"}
                    mediaSrc={item.mediaSrc}
                    title={item.title}
                    description={item.description}
                    reverse={index % 2 === 1} // çift indexlerde ters yerleşim
                />
            ))}
        </div>
    );
};

export default MediaContentList;
