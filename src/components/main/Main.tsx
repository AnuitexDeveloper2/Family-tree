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
                    Math.min(4, Math.max(0.4, prevScale - e.deltaY * 0.001))
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
                                bottom: "-24px",
                                height: "24px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "408px",
                                left: "50%",
                                bottom: "-24px",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "408px",
                                right: "50%",
                                bottom: "-24px",
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
                    <Card name="Антон">
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
                                bottom: "30px",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "104px",
                                left: "50%",
                                bottom: "-22px",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "182px",
                                bottom: "-22px",
                                height: "52px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Ольга Ивановна">
                        <HorizontalLine
                            style={{
                                width: "1429px",
                                right: "-431px",
                                bottom: "-22px",
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
                                width: "1796px",
                                left: "-929px",
                                bottom: "-22px",
                            }}
                        />
                    </Card>
                    <Card name="Иосиф Иосифович">
                        <HorizontalLine
                            style={{
                                width: "44px",
                                left: "-44px",
                                bottom: "30px",
                            }}
                        />
                        <VerticalLine
                            style={{
                                right: "180px",
                                top: "30px",
                                height: "52px",
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
                                width: "584px",
                                left: "79px",
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
                                width: "543px",
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
                                left: "81px",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card margin="0 0px 0 0px" name="Валентина">
                        <VerticalLine
                            style={{
                                left: "81px",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "24px",
                                left: "160px",
                                bottom: "26px",
                            }}
                        />
                        <VerticalLine
                            style={{
                                right: "-14px",
                                top: "33px",
                                height: "52px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Владимир">
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
                                left: "181px",
                                top: "33px",
                                height: "52px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "44px",
                                left: "160px",
                                bottom: "26px",
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
                                top: "34px",
                                height: "52px",
                                transform: "translateX(-50%)",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "44px",
                                left: "160px",
                                bottom: "26px",
                            }}
                        />
                    </Card>
                    <Card name="Валерий Лисовский">
                    </Card>
                    <Card name="Михаил">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Георгий">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-32px",
                                height: "32px",
                                transform: "translateX(-50%)",
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
                    <Card name="Антон">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-21px",
                                height: "21px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Ольга">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-21px",
                                height: "21px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Зинаида">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-41px",
                                height: "40px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Иван">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-41px",
                                height: "40px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card opacity="0" name="">
                    </Card>
                </Generation>
                <Generation>
                    <Card name="Лидия">
                        <HorizontalLine
                            style={{
                                width: "390px",
                                left: "283px",
                                top: "-31px",
                            }}
                        />
                        <HorizontalLine
                            style={{
                                width: "45px",
                                left: "159px",
                                top: "30px",
                            }}
                        />
                    </Card>
                    <Card name="Василий">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Николай">
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
                                left: "159px",
                                top: "30px",
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
                                width: "409px",
                                left: "79px",
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
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
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
                                width: "442px",
                                left: "-157px",
                                top: "-30px",
                            }}
                        />
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card name="Лариса Валерьивна Лисовская">
                        <VerticalLine
                            style={{
                                left: "50%",
                                top: "-30px",
                                height: "30px",
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Card>
                    <Card opacity="0" name="">
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