import React from "react";
import Header from "../../common/Header/Header";
import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@material-ui/core";
import "./AboutUniversity.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import UniLogo from '../../../assets/images/universityLogo.png'

export const AboutUniversity = () => {
	return (
		<div className="home">
			<Header />
			<div className="container" id="aboutContainer">
				<Grid container justify="center">
					<Grid item xs={10}>
						<Card variant="outlined">
							<Grid
								container
								justify="center"
								alignItems="flex-start"
								className="p-3 ">
								<Grid item xs={8} md={4}>
									<Grid
										container
										justify="center"
										alignContent="center">
										<CardMedia
											component="img"
											style={{ maxWidth: "500px" }}
											image={UniLogo}
											label={"Logo"}
										/>
									</Grid>
								</Grid>
								<Grid item xs={12} md={12}>
									<Grid container justify="center">
										<CardContent className="text-center">
											<Typography
												gutterBottom
												variant="h3"
												component="h2">
												{"MIT World Peace University"}
											</Typography>
											<Typography
												gutterBottom
												variant="subtitle1">
												<a
													href="https://mitwpu.edu.in/"
													target="_blank"
													rel="noreferrer noopener">
													{
														"Official University Website"
													}
													<OpenInNewIcon fontSize="small" />
												</a>
											</Typography>
										</CardContent>
									</Grid>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
				<Grid container justify="center" className="my-3">
					<Grid item xs={10}>
						<Card variant="outlined">
							<Container className="px-5 py-4">
								<Typography
									variant="h4"
									className="text-center pb-3">
									About University
								</Typography>
								<Typography variant="body2">
									{
										"With a rich legacy of 40 years in fostering world-class academic excellence and over 100,000 alumni across the globe, MIT-WPU is one of the premier institutions of higher learning in India offering Undergraduate, Postgraduate, Diploma, and Ph.D. programmes."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Here, all learners have access to high impact experiential learning that combine academic offerings with yoga and meditation courses, multiple sporting opportunities, academic and cultural clubs, and year-round on-campus events aimed at strengthening the foundational development of all its students."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Our Vision: Powering the future, Effecting sustainable, inclusive, and progressive transformation that impacts society with education, innovation, and culture."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Our Mission: Me-Culture in our shared commitment to lead by example We-Culture of empathy and compassion, reflected in our focus on improving the current state of affairs Co-Culture in our interdisciplinary and collaborative approach"
									}
								</Typography>
								<br />
							</Container>
						</Card>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
