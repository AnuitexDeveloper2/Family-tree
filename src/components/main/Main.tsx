import { useState, useEffect, useRef } from "react";
import { Container, Generation, VerticalLine, HorizontalLine } from "./Main.styles";
import Card from "../shared/card/Card";
import { useAppSelector } from "../../hooks/redux";
import { MemberDetail } from "../memberDetail/MemberDetail";

const Family = () => {
    const [scale, setScale] = useState(0.5);
    const { cardModalId } = useAppSelector(state => state.memberDetailSlice)
    const mainElement = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                e.preventDefault();
                setScale((prevScale) =>
                    Math.min(6, Math.max(0.01, prevScale - e.deltaY * 0.001))
                );
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    useEffect(() => {
        if (mainElement.current) {
            requestAnimationFrame(() => {
                const rect = mainElement.current!.getBoundingClientRect();
                const absoluteY = window.scrollY + rect.top;
                const absoluteX = window.scrollX + rect.left;
                const middleY = absoluteY - window.innerHeight / 2 + rect.height / 2;
                const middleX = absoluteX - window.innerWidth / 2 + rect.width / 2;

                window.scrollTo({ top: middleY, left: middleX, behavior: "smooth" });
            });
        }
    }, []);

    return (
        <div style={{ position: "relative", marginBottom: "100px" }}>
            {!cardModalId && <Container scale={scale}>
                <Generation>
                    <div ref={mainElement}>
                        <Card name="Филлип Тринда" id='1'>
                            <VerticalLine
                                style={{
                                    left: "50%",
                                    bottom: "-74px",
                                    height: "74px",
                                    transform: "translateX(-50%)",
                                }}
                            />
                            <HorizontalLine
                                style={{
                                    width: "1132px",
                                    left: "-446px",
                                    bottom: "-71px",
                                }}
                            />
                        </Card>
                    </div>
                </Generation>
                <Generation>
                    <Card name="Федор Филлипович Тринда">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Мария Филлиповна Тринда">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Антон Филлипович Тринда" years="1861-1926">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "44px",
                                right: "-44px",
                                bottom: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "263px",
                                top: "50%",
                                height: "126px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Ольга Ивановна Тринда" years="1870-1950">
                        <HorizontalLine
                            style={{
                                width: "2274px",
                                left: "-1301px",
                                bottom: "-72px",
                            }}
                        />
                    </Card>
                    <Card name="Наум Филлипович Тринда" years="1869-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                </Generation>
                <Generation>
                    <Card name="Иван Антонович Тринда" years="1900-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "51%",
                                bottom: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "3411px",
                                left: "-3288px",
                                bottom: "-32px  ",
                            }}
                        />
                    </Card>
                    <Card name="Надежда Антоновна Туркиневич" years="1903-1981">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "2966px",
                                left: "-2705px",
                                bottom: "-72px",
                            }}
                        />
                    </Card>
                    <Card name="Иосиф Иосифович Туркиневич" years="1888-1975">
                        <HorizontalLine
                            style={{
                                width: "44px",
                                left: "-44px",
                                top: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "-22px",
                                top: "50%",
                                height: "125px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Владимир Антонович Тринда" years="1905-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "50%",
                                bottom: "-72px",
                                height: "72px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "567px",
                                left: "-163px",
                                bottom: "-72px",
                            }}
                        />
                    </Card>
                    <Card name="Михаил Антонович Тринда" years="1909-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "263px",
                                top: "50%",
                                height: "130px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "1555px",
                                left: "261px",
                                bottom: "-76px",
                            }}
                        />
                    </Card>
                    <Card name="Татьяна Тринда" years="?">

                    </Card>
                    <Card name="Иосиф Антонович Тринда" years="1911-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "50%",
                                bottom: "-44px",
                                height: "43px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "1697px",
                                left: "119px",
                                bottom: "-46px",
                            }}
                        />
                    </Card>
                    <Card name="Евгения Антоновна Мушинская" years="1913-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "120px",
                                bottom: "-15px",
                                height: "15px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "2261px",
                                left: "120px",
                                bottom: "-16px",
                            }}
                        />
                    </Card>
                    <Card name="Николай Антонович Тринда" years="1924-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                </Generation>
                <Generation>
                    <Card name="Анатолий Иванович Тринда" years="">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-73px",
                                height: "73px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Аркадий Иванович Тринда" years="1925-1996">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-73px",
                                height: "73px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Петр Иванович Тринда" years="1925-1996">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-73px",
                                height: "73px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Нина Иосифовна Реут" years="1925-1996">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "31px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "239px",
                                bottom: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "263px",
                                top: "50%",
                                height: "127px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "990px",
                                left: "-727px",
                                bottom: "-72px",
                            }}
                        />
                    </Card>
                    <Card name="Иван Игнатьевич Реут" years="1918-?">
                    </Card>
                    <Card name="Валентина Иосифовна Гончарук" years="1930-2005">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "239px",
                                bottom: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                right: "-21px",
                                top: "50%",
                                height: "127px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "284px",
                                left: "120px",
                                bottom: "-74px",
                            }}
                        />
                    </Card>
                    <Card name="Владимир Васильевич Гончарук" years="1931-1990">
                    </Card>
                    <Card name="Евгения Иосифовна Пшеницина" years="1941">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "260px",
                                top: "50%",
                                height: "130px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "44px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Аркадий Алекскеевич Пшеницин" years="1937-2016">
                    </Card>
                    <Card name="Лидия Иосифовна Лисовская" years="1947">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <VerticalLine
                            style={{
                                right: "-22px",
                                top: "50%",
                                height: "89px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "44px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Валерий Лисовский" years="">
                    </Card>
                    <Card name="Михаил Иосифович Туркиневич" years="?-1939">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Георгий Иосифович Туркиневич" years="?-1939">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Николай Иосифович Туркиневич" years="?-1939">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Антон Туркиневич" years="?-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Иван Туркиневич" years="?-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Мария Туркиневич" years="?-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Вячеслав">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-27px",
                                height: "27px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Борис">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-27px",
                                height: "27px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Георгий">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-27px",
                                height: "27px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Евгений">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-27px",
                                height: "27px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Анна">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-27px",
                                height: "27px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Леонид">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-27px",
                                height: "27px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>

                    <Card name="Нина Иосифовна Тринда">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-59px",
                                height: "59px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Антон Иосифович Тринда">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-59px",
                                height: "59px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Ольга Иосифовна Тринда">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-86px",
                                height: "86px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Зинаида Евгеньевна Тринда" years="1936-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-89px",
                                height: "89px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Иван Евгеньевич Тринда" years="1940-2000">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-89px",
                                height: "89px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                </Generation>
                <Generation>
                    <Card name="Зоя Ивановна Реут" years="1946">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "262px",
                                top: "50%",
                                height: "129px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "567px",
                                left: "-303px",
                                bottom: "-74px",
                            }}
                        />
                    </Card>
                    <Card name="" years="">
                    </Card>
                    <Card name="Раиса Ивановна Реут" years="1956">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "263px",
                                top: "50%",
                                height: "128px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "568px",
                                left: "-23px",
                                bottom: "-72px",
                            }}
                        />
                    </Card>
                    <Card name="Михаил" years="">

                    </Card>
                    <Card name="Людмила Даниловна Гук" years="1954">

                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "260px",
                                top: "50%",
                                height: "129px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "851px",
                                left: "261px",
                                top: "183px",
                            }}
                        />
                    </Card>
                    <Card name="Николай Владимирович Гончарук" years="1954">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Василий Владимирович Гончарук" years="1955-2024">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                right: "-26px",
                                top: "50%",
                                height: "129px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Лидия Васильевна Гончарук" years="1960">
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                right: "-26px",
                                top: "50%",
                                height: "129px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Людмила Воловикова" years="1960-?">
                    </Card>
                    <Card name="Андрей Аркадьевич Пшеницин" years="1961">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "990px",
                                left: "-305px",
                                top: "-30px",
                            }}
                        />
                    </Card>
                    <Card name="Жена">
                        <HorizontalLine
                            style={{
                                width: "43px",
                                left: "-43px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Елизавета Аркадьевна Пшеницина" years="1975">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "260px",
                                top: "50%",
                                height: "100px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "1550px",
                                left: "260px",
                                top: "154px",
                            }}
                        />
                    </Card>
                    <Card name="">
                        <HorizontalLine
                            style={{
                                width: "43px",
                                left: "-43px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Анна Валерьевна Лисовская" years="1972">
                        <HorizontalLine
                            style={{
                                width: "40px",
                                left: "242px",
                                top: "51%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-69px",
                                height: "68px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Дмитрий Эпштейн" years="1972">
                        <HorizontalLine
                            style={{
                                width: "1557px",
                                left: "-1153px",
                                top: "-70px",
                            }}
                        />

                    </Card>
                    <Card name="Лариса Валерьивна Лисовская">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-69px",
                                height: "68px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                </Generation>
                <Generation>
                    <Card name="" years="">
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Виталий" years="1965">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="" years="">
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Дмитрий" years="1973">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Валерия Михайловна">
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <VerticalLine
                            style={{
                                right: "-22px",
                                top: "50%",
                                height: "130px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "284px",
                                left: "261px",
                                top: "183px",
                            }}
                        />
                    </Card>
                    <Card name="">
                    </Card>
                    <Card name="Александр Михайлович">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Александр Николаевич Гончарук" years="1978">
                        <VerticalLine
                            style={{
                                left: "119px",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Алла Владимировна Черевань">
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                right: '-22px',
                                top: '57px',
                                height: "127px",
                                transform: "translateX(-50 %)"
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "286px",
                                left: "261px",
                                top: "182px",
                            }}
                        />
                    </Card>
                    <Card name="Яна Владимировна Гончарук">

                    </Card>
                    <Card name="Дарья Николаевна Гончарук" years="1988">
                        <VerticalLine
                            style={{
                                left: "123px",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Сергей Васильевич Гончарук" years="1977">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "1697px",
                                left: "119px",
                                top: "-32px",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "261px",
                                top: "50%",
                                height: "129px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "570px",
                                left: "-23px",
                                top: "182px",
                            }}
                        />
                    </Card>
                    <Card name="Марина Гончарук">
                    </Card>
                    <Card name="Ольга Васильевна Онищук" years="1985">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Валерий Онищук" years="1988-2023">
                    </Card>
                    <Card name="Анна Васильевна Бабешко" years="1986">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "240px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Виталий Бабешко" years="1993">
                    </Card>
                    <Card name="Владимир Васильевич Гончарук" years="1988">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>

                    <Card opacity={"0"} name="">
                    </Card>
                    <Card name="Елисей Пшеницин" years="2004">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "284px",
                                left: "50%",
                                top: "-30px",
                            }}
                        />
                        <VerticalLine
                            style={{
                                right: "-17px",
                                top: "-57px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Ева Пшеницина" years="">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                </Generation>
                <Generation>

                    <Card name="Анастасия Витальевна" years="1998">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-157px",
                                height: "157px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>

                    <Card opacity={"0"} name="">
                    </Card>
                    <Card name="Антон Дмитриевич" years="1998">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-157px",
                                height: "157px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card name="Максим" years="2003">
                        <VerticalLine
                            style={{
                                left: "119px",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>

                    <Card name="Мария" years="2010">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>

                    <Card opacity={"0"} name="">
                    </Card>

                    <Card name="Кирилл Александрович Гончарук">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-157px",
                                height: "157px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="сын Александрович Гончарук" years="2014">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="дочь Александрович Гончарук" years="2015">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>

                    <Card name="Андрей Сергеевич Гончарук" years="2006">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Артем Сергеевич Гончарук" years="2009">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Полина Сергеевна Гончарук" years="2013">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Тимофей Валерьевич Онищук" years="2015">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-157px",
                                height: "157px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card name="Богдан Витальевич Бабешко" years="2023">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-157px",
                                height: "157px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                    <Card opacity={"0"} name="">
                    </Card>
                </Generation>
            </Container>}
        </div>
    );
};

export default Family;


// Женя- муж Аркадий Алекскеевич Пшеничный Дети: Андрей(Жена и дети(Настя(1994) и Мария(2004))) и Лиза(дети: Елисей и Анна)
// Лида (муж Валерий Лисовский) Дети: Аня и Лариса(Дети: Алексей? и Анна?)



// Отец Иосиф Иосифовича - Иосиф Иосифович
// Брат Иосифа Иосифовича - Надя, Марыля, Макар, Михаил,

// Михаил Антонович Тринда(1909) - Жена: Татьяна Дети: Вячеслав, Борис, Георгий, Евгений, Анна, Леонид
// Владимир Антонович Тринда(1905) - Жена- ? Дети: Антон, Иван, Мария
//  Иван Антонович Тринда(1900), -Жена-? Дети: Анатолий, Аркадий, Петр
// Нина Иосифовна Реут(1925) - Муж - Реут Иван Игнатьевич(1918- ?) Дети- Зоя(1946 дети- Виталий(1965 дети- Анастасия(1998) и Дмитрий(1973 дети - Антон(1998)))), Рая(1956) муж Михаил-(Дети - Валерия(дети- Максим(2003) и Мария(2010)) и Александр)





// Иосиф Иосифович Туркиневич(1988) - Отец(Иосиф Иосифович Туркиневич()) сестры - Надежда(Село Стайки), Марыля(Харьков) братья - Макар(Харьков), Михаил(Харьков)
