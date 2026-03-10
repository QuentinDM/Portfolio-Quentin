import "../styles/contactPage.css";
import NavIcon from "../components/iconComponents/navIcon";
import MailIcon from "../components/iconComponents/MailIcon";
import GithubIcon from "../components/iconComponents/GithubIcon";
import LinkedInIcon from "../components/iconComponents/LinkedInIcon";
import WhatsappIcon from "../components/iconComponents/WhatsappIcon";

function ContactPage() {
	return (
		<section className="contact-page">
			<NavIcon />
			<h2 className="contact-title">Contact</h2>
			<p className="contact-subtitle">Retrouve-moi sur mes reseaux</p>

			<div className="contact-grid-main" aria-label="Liens sociaux">
				<div className="contact-grid-row">
					<div className="contact-grid-card contact-grid-card1 contact-grid-card-mail" aria-label="Mail">
						<MailIcon />
					</div>

					<div className="contact-grid-card contact-grid-card2 contact-grid-card-linkedin" aria-label="LinkedIn">
						<LinkedInIcon />
					</div>
				</div>

				<div className="contact-grid-row">
					<div className="contact-grid-card contact-grid-card3 contact-grid-card-github" aria-label="GitHub">
						<GithubIcon />
					</div>

					<div className="contact-grid-card contact-grid-card4 contact-grid-card-whatsapp" aria-label="WhatsApp">
						<WhatsappIcon
							phone="33651919190"
							message="Bonjour Quentin, je viens de ton portfolio."
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactPage;
