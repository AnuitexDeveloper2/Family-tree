import React, { useState, useEffect } from "react";
import { Container, Generation, VerticalLine, HorizontalLine } from "./Main.styles";
import Card from "../shared/card/Card";

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
                    <Card name="Филлип">
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
                    <Card name="Федор">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Мария">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Антон" years="1871-1926">
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
                    <Card name="Ольга Ивановна" years="1870-1950">
                        <HorizontalLine
                            style={{
                                width: "1992px",
                                left: "-1160px",
                                bottom: "-72px",
                            }}
                        />
                    </Card>
                    <Card name="Наум">
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
                    <Card name="Иван">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Надежда Антоновна">
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
                                left: "-1311px",
                                bottom: "-72px",
                            }}
                        />
                    </Card>
                    <Card name="Иосиф Иосифович">
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
                    <Card name="Володя">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Миша">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Иосиф">
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
                    <Card name="Николай">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Женя">
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
                                bottom: "-15px",
                            }}
                        />
                    </Card>
                </Generation>
                <Generation>
                    <Card margin="0 20px 0 0px" name="Нина">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-31px",
                                height: "31px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Валентина Иосифовна">
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
                    <Card name="Владимир Васильевич Гончарук">
                    </Card>
                    <Card name="Евгения Филлиповна Пшеничная">
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
                    <Card name="Аркадий Алекскеевич Пшеничный">
                    </Card>
                    <Card name="Лида">
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
                    <Card name="Валерий Лисовский">
                    </Card>
                    <Card name="Михаил" years="?-1939">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Георгий" years="?-1939">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Николай" years="?-1939">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Нина">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-21px",
                                height: "21px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Антон Иосифович">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-71px",
                                height: "71px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Ольга">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-72px",
                                height: "73px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Зинаида">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-91px",
                                height: "90px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Иван">
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
                    <Card name="Николай Васильевич Гончарук">
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
                    <Card name="Людмила">
                    </Card>
                    <Card name="Андрей Аркадьевич Пшеничный">
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
                                width: "532px",
                                left: "108px",
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
                    <Card name="Елизавета Аркадьевна Пшеничная">
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
                                left: "120px",
                                top: "183px",
                            }}
                        />
                    </Card>
                    <Card name="Муж">
                        <HorizontalLine
                            style={{
                                width: "43px",
                                left: "-43px",
                                top: "50%",
                            }}
                        />
                    </Card>
                    <Card name="Анна Валерьивна Лисовская">
                        <HorizontalLine
                            style={{
                                width: "864px",
                                left: "-460px",
                                top: "-32px",
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
                    <Card name="Александр Васильевич Гончарук">
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
                    <Card name="Жена">
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
                    <Card name="Елисей">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Анна">
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


// Женя- муж Аркадий Алекскеевич Пшеничный Дети: Андрей(Жена) и Лиза(дети: Елисей и Анна)
// Лида (муж Валерий Лисовский) Дети: Аня и Лариса(Дети: Алексей? и Анна?)


// Нина сестра бабушки Вали и еще одна сестра

// Отец Иосиф Иосифовича - Иосиф Иосифович
// Брат Иосифа Иосифовича - Надя, Марыля, Макар, Михаил,