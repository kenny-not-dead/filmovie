import { useEffect, useState } from "react";
import { Poster } from "../../components/poster/Poster";
import classes from "./../MainPage/MainPage.module.scss";
import mainclasses from "./CatalogPageMain.module.scss";
import { TextShow } from "../../components/UI/text/Textshow";
import { Title } from "../../components/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./../MainPage/buttons.scss";
import { Navigation } from "swiper";
import { Subfilter } from "../../components/UI/Filter/Subfilter";
import mim from "./../../static/svgs/mim.png";

export function CatalogPageMain() {
  const posters_s = [
    {
      title: "Губка боб",
      url: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
      score: "7,9",
      info: "1999-2021, США, Фентези",
      seasons: "13 сезонов",
    },
    {
      title: "Титаник",
      url: "https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85",
      score: "8,6",
      info: "2012, Россия, Документальные",
      seasons: "1 сезон",
    },
    {
      title: "Друзья",
      url: "https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85",
      score: "9,1",
      info: "1994-2004, США, Комедийные",
      seasons: "10 сезонов",
    },
    {
      title: "Губка боб",
      url: "https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85",
      score: "7,9",
      info: "1999-2021, США, Фентези",
      seasons: "13 сезонов",
    },
    {
      title: "Титаник",
      url: "https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85",
      score: "8,6",
      info: "2012, Россия, Документальные",
      seasons: "1 сезон",
    },
    {
      title: "Друзья",
      url: "https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85",
      score: "9,1",
      info: "1994-2004, США, Комедийные",
      seasons: "10 сезонов",
    },
    {
      title: "Титаник",
      url: "https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85",
      score: "8,6",
      info: "2012, Россия, Документальные",
      seasons: "1 сезон",
    },
    {
      title: "Друзья",
      url: "https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85",
      score: "9,1",
      info: "1994-2004, США, Комедийные",
      seasons: "10 сезонов",
    },
    {
      title: "Титаник",
      url: "https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85",
      score: "8,6",
      info: "2012, Россия, Документальные",
      seasons: "1 сезон",
    },
    {
      title: "Друзья",
      url: "https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85",
      score: "9,1",
      info: "1994-2004, США, Комедийные",
      seasons: "10 сезонов",
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  const [sCount, setSCount] = useState(7);
  const [sGap, setSGap] = useState(25);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    if (width <= 480 && width >= 300) {
      setSCount(3);
      setSGap(27);
    } else if (width <= 640 && width >= 481) {
      setSCount(4);
      setSGap(25);
    } else if (width <= 768 && width >= 641) {
      setSCount(5);
      setSGap(15);
    } else if (width <= 1280 && width >= 768) {
      setSCount(5);
      setSGap(20);
    } else {
      setSCount(7);
      setSGap(20);
    }
    console.log(width);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [width]);

  let info = `Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi.ru – фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно пополняется как новыми фильмами, так и признанными шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных боевиков или поклонница молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех других способах проведения досуга, и вы будете пересматривать любимые фильмы онлайн снова и снова!

  Выбор фильмов очень широк и многообразен, так что каждый найдет для себя что-то интересное, каким бы ни были его вкусы. Предпочитаете картины исключительно зарубежного производства? У нас их предостаточно: это и золотая классика Голливуда, и душевные французские комедии, и темпераментные итальянские драмы, и шумные индийские музыкальные фильмы. А может, вы патриот и любите российские фильмы? Что ж, и таких фильмов у нас немало. Что вам больше по вкусу – добрая старая классика или новинки кинопроката? Неважно, каким будет ваш ответ – у нас есть все, как картины эпохи зарождения кинематографа, так 2018 года и фильмы 2017.
  
  В нашем каталоге вы найдете любые жанры. Это и фильмы про любовь, и детективы, и боевики, и вестерны, и фантастика, и арт-хаус, и уморительные комедии, и фильмы про войну, и ужасы, и триллеры, и документалистика... Кроме «полного метра» на сайте представлены также короткометражные фильмы, а также иностранные и русские сериалы.
  
  Если вас интересуют самые знаковые фильмы онлайн в том или ином жанре, система рубрикации поможет вам без труда сориентироваться и найти, например, лучшие драмы или лучший анимационный фильм онлайн.
  
  Не упустите замечательную возможность смотреть фильмы онлайн без регистрации, выбирая только то, что вам действительно интересно, и тогда, когда вам это удобно. Ведь это так просто и приятно!`;

  const genres = [
    {
      value: "drama",
      text: "Драма",
    },
    {
      value: "boeviki",
      text: "Боевики",
    },
    {
      value: "comedy",
      text: "Комедия",
    },
    {
      value: "bio",
      text: "Биография",
    },
    {
      value: "scream",
      text: "Ужасы",
    },
  ];

  const country = [
    {
      value: "RU",
      text: "Россия",
    },
    {
      value: "EN",
      text: "Англия",
    },
    {
      value: "FR",
      text: "Франция",
    },
    {
      value: "CH",
      text: "Китай",
    },
    {
      value: "USA",
      text: "США",
    },
  ];

  return (
    <>
      <h1>Фильмы онлайн</h1>
      <div className={mainclasses.textwrapper}>
        <TextShow number={230} text={info} />
      </div>
      <Title arrow={false} title={"Жанры"} />
      <div className={mainclasses.filterlist}>
        {genres.map((i) => (
          <Subfilter value={i.value} text={i.text} logo={mim} />
        ))}
      </div>
      <Title arrow={false} title={"Страна"} />
      <div className={mainclasses.filterlist}>
        {country.map((i) => (
          <Subfilter value={i.value} text={i.text} />
        ))}
      </div>
      <div className={classes.slider__block}>
        <Title top={false} arrow={true} title={"Рекомендую посмотреть"} />
        <Swiper
          slidesPerView={sCount}
          spaceBetween={sGap}
          navigation={true}
          modules={[Navigation]}
          style={{ padding: "20px 10px 30px 10px", position: "initial" }}
        >
          {posters_s.map((poster, index) => {
            return (
              <SwiperSlide>
                <Poster
                  size="s"
                  title={poster.title}
                  url={poster.url}
                  score={poster.score}
                  info={poster.info}
                  seasons={poster.seasons}
                  key={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
