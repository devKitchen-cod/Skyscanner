import React from "react";
import { Grid } from "semantic-ui-react";
import styles from "./startpage.module.scss";

import Filter from "../Common/filter";
import AccordionS from "../Common/accordion";


const StartPage = () => {
	const options = [
		{
			width: 5,
			url: "https://content.skyscnr.com/m/139a24f17c26c197/original/p1.svg",
			text: "Находите лучшие варианты для перелета между любыми точками мира и	бронируйте авиабилеты без комиссий.",
		},
		{
			width: 5,
			url: "https://content.skyscnr.com/m/139a24f17c26c197/original/p1.svg",
			text: "Сравнивайте цены в сотнях агентств и авиакомпаний. Выбирайте самые дешевые, быстрые или экологичные перелеты.",
		},
		{
			width: 6,
			url: "https://content.skyscnr.com/m/139a24f17c26c197/original/p1.svg",
			text: "Найдите самый дешевый месяц и день для перелета по вашему направлению. Подпишитесь на уведомления, чтобы отслеживать изменение цен.",
		},
	];

	return (
		<Grid>

			<Grid.Row className={styles.row1}>
				<Grid.Column width={16} className={styles.backImg} >
					<Grid>
						<Grid.Row>
							<Grid.Column width={4}></Grid.Column>
							<Grid.Column width={8} className={styles.spColumn}>
								<span className={styles.text1}>
									Дешевые рейсы куда угодно и откуда угодно
								</span>
							</Grid.Column>
							<Grid.Column width={4}></Grid.Column>
						</Grid.Row>

						<Grid.Row className={styles.filterRow}  centered columns={5}>
							<Grid.Column width={15}>
								<Filter/>
							</Grid.Column>
							
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row centered className={styles.row2} columns={3}>
				{options.map((item) => (
					<Grid.Column width={item.width} className={styles.options}>
						<img className={styles.imgIconOptions} src={item.url} alt="some" />
						<span className={styles.textOptions}>{item.text}</span>
					</Grid.Column>
				))}
			</Grid.Row>

			<Grid.Row className={styles.row3}><AccordionS/></Grid.Row>

			<Grid.Row centered className={styles.row4}>
				<Grid.Column width={10} className={styles.row3Column1}>
					<Grid>
						
						<Grid.Row centered>
							<Grid.Column width={15}>
								<div className={styles.bestFlightHeader}>
									<span>
										Looking for the best flight deals to anywhere in the world?
									</span>
								</div>
								<div className={styles.bestFlightText}>
									<span>
										It’s easy around here. 100 million travelers use us as their
										go-to tool, comparing flight deals and offers from more than
										1,200 airlines and travel providers. With so many options to
										choose from in one place, you can say hello to savings and
										goodbye to stress – here’s how.
									</span>
								</div>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered columns={3}>

							<Grid.Column width={5}>
								<div className={styles.img2row}>
									<img
										src="https://content.skyscnr.com/m/3e55723dcc8a2d0f/original/image1.svg"
										alt="some"
									/>
								</div>
								<div className={styles.imgText1}>
									<span className={styles.textHeadImg1}>
										Search Everywhere, explore anywhere
									</span>
									<span className={styles.textImg1}>
										Enter your departure airport and travel dates, then hit
										‘Everywhere.’ You’ll see flights to every destination in the
										world, cheapest first.
									</span>
								</div>
							</Grid.Column>

							<Grid.Column width={5}>
								<div className={styles.img2row}>
									<img
										src="https://content.skyscnr.com/m/7b7b3eaf2ab4081c/original/image2.svg"
										alt="some"
									/>
								</div>
								<div className={styles.imgText2}>
									<span className={styles.textHeadImg1}>
										Search Everywhere, explore anywhere
									</span>
									<span className={styles.textImg1}>
										Enter your departure airport and travel dates, then hit
										‘Everywhere.’ You’ll see flights to every destination in the
										world, cheapest first.
									</span>
								</div>
							</Grid.Column>

							<Grid.Column width={5}>
								<div className={styles.img2row}>
									<img
										src="https://content.skyscnr.com/m/4ab58b7e3ae3790c/original/image3.svg"
										alt="some"
									/>
								</div>
								<div className={styles.imgText3}>
									<span className={styles.textHeadImg1}>
										Search Everywhere, explore anywhere
									</span>
									<span className={styles.textImg1}>
										Enter your departure airport and travel dates, then hit
										‘Everywhere.’ You’ll see flights to every destination in the
										world, cheapest first.
									</span>
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>


			<Grid.Row>
				
			</Grid.Row>
		</Grid>
	);
};

export default StartPage;