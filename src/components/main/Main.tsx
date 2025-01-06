import React, { useState, useEffect } from "react";
import { Container, Generation, VerticalLine, HorizontalLine } from "./Main.styles";
import Card from "../shared/card/Card";
import { MemberDetail } from "../memberDetail/MemberDetail";
import { useModalState } from "../../hooks/useModalState/useModalState";

const Family = () => {
    const [scale, setScale] = useState(0.5);

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

    return (
        <div style={{ position: "relative", marginBottom: "100px" }}>
            <Container scale={scale}>
                <Generation>
                    <Card name="Филлип Тринда">
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
                                width: "1136px",
                                left: "-448px",
                                bottom: "-74px",
                            }}
                        />
                    </Card>
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
                    <Card name="Антон Филлипович Тринда" years="1871-1926">
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
                                left: "262px",
                                top: "50%",
                                height: "124px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Ольга Ивановна Тринда" years="1870-1950">
                        <HorizontalLine
                            style={{
                                width: "1992px",
                                left: "-1160px",
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
                                width: "1560px",
                                left: "-1440px",
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
                                width: "2558px",
                                left: "-875px",
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
                                bottom: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "843px",
                                left: "119px",
                                bottom: "-34px",
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
                                width: "841px",
                                left: "120px",
                                bottom: "-16px",
                            }}
                        />
                    </Card>
                </Generation>
                <Generation>
                    <Card name="Анатолий Иванович Тринда" years="">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-74px",
                                height: "74px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Аркадий Иванович Тринда" years="1925-1996">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-74px",
                                height: "74px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Петр Иванович Тринда" years="1925-1996">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-74px",
                                height: "74px",
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
                                height: "131px",
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
                                height: "129px",
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
                    <Card name="Нина Иосифовна Тринда">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-71px",
                                height: "71px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Антон Иосифович Тринда">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-71px",
                                height: "71px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Ольга Иосифовна Тринда">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-72px",
                                height: "73px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Зинаида Евгеньевна Тринда" years="1936-?">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-91px",
                                height: "90px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Иван Евгеньевич Тринда" years="1940-2000">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-91px",
                                height: "90px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                </Generation>
                <Generation>
                    <Card name="Людмила Воловикова" years="1960">
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
                                width: "285px",
                                left: "403px",
                                top: "-31px",
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
                                right: "-25px",
                                top: "50%",
                                height: "129px",
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
                                width: "570px",
                                left: "119px",
                                top: "182px",
                            }}
                        />
                    </Card>
                    <Card name="Людмила Даниловна Гук" years="1954">
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
                                width: "522px",
                                left: "118px",
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
                                left: "30%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
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
                                width: "285px",
                                left: "260px",
                                top: "183px",
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
                    <Card name="Анна Валерьивна Лисовская" years="1972">
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
                                top: "-31px",
                                height: "31px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Дмитрий Эпштейн" years="1972">
                        <HorizontalLine
                            style={{
                                width: "1006px",
                                left: "-601px",
                                top: "-32px",
                            }}
                        />

                    </Card>
                    <Card name="Лариса Валерьивна Лисовская">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "30px",
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
                                width: "1707px",
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
                                left: "259px",
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
                    <Card name="Виталий Бабешко">
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
                    <Card name="Александр Николаевич Гончарук" years="1978">
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
                    </Card>
                    <Card name="Алла Владимировна Черевань">
                    </Card>
                    <Card name="Яна Владимировна Гончарук">
                        {/* Дети Сын(2014) и дочь(2015) */}
                    </Card>
                    <Card name="Дарья Васильевна Гончарук" years="1988">
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
                    <Card name="Елисей Пшеницин" years="2004">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
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
                </Generation>
                <Generation>
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
                    <Card name="Артем Сергеевич Гончарук">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Полина Сергеевна Гончарук">
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
                    <Card name="Богдан Витальевич Бабешко">
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
                    <Card name="Кирил Александрович Гончарук">
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
            </Container>
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
