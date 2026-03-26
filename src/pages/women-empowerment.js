import "../styles/women-empowerment.css";
import Header from "../components/Header";
import Footer from "../components/Footer"

function WomenEmpowerment() {
    return (
        <div className='women-empowerment'>
            <Header/>
            <div className='page-title'>
                <h1 className="women-empowerment-page-title">
                    <span>Women</span>
                    <span>Empowerment</span>
                </h1>
            </div>
            <img src='images/womenwithcomputer.png' alt='womenwithcomputer' className='women-with-computer' />
            <img src='images/womenwitheducation.png' alt='womenwitheducation' className='women-with-education' />
            <img src='images/womenwithfarming.png' alt='womenwithfarming' className='women-with-farming' />
            <img src='images/womenwithfrabic.png' alt='womenwithfrabic' className='women-with-frabic' />
            <img src='images/womenwithstartup.png' alt='womenwithstartup' className='women-with-startup' />
            <img src='images/womenwithwater.png' alt='womenwithwater' className='women-with-water' />
            <div className='why-women-empowerment'>
                <h2>Why Women Empowerment?</h2>
                <p className='why-women-empowerment-paragraph'><i>Gender equality is still a burning issue of our times. Still today, women are not getting equal individual, social, and economic</i><br />
                    <i>opportunities, though the women are playing a very important role in rural economy. This is severely impacting their capacities and</i><br />
                    <i>growth opportunities. For a progressive society, the representation by women in social, political, and economic processes is very</i><br />
                    <i>important so that women be empowered for community and social development.</i></p>
            </div>
            <div className='Our-Role-in-Women-Empowerment'>
                <h2>Our Role in Women Empowerment</h2>
                <p className='Our-Role-in-Women-Empowerment-paragraph'>
                    <i>Tanmay Development Foundation is dedicated to improving the<br /></i>
                    <i>livelihoods of women farmers in Uttar Pradesh. Our focus is on<br /></i>
                    <i>promoting sustainable agriculture practices that not only increase<br /></i>
                    <i>income but also benefit the environment. We aim to create lasting<br /></i>
                    <i>economic and social improvements for families in the region through<br /></i>
                    <i>agriculture and allied activities.<br /><br /></i>

                    <i>To achieve this, we employ a strategy that involves training local<br /></i>
                    <i>women to serve as catalysts for change. These women, who are<br /></i>
                    <i>deeply embedded in the community, become leaders and agents of<br /> </i>
                    <i>transformation. They play a crucial role in implementing our<br /></i>
                    <i>programs, which are designed to empower women and make them<br /></i>
                    <i>self-sustaining.<br /><br /></i>

                    <i>As these women take charge, they gradually become self-reliant and<br /></i>
                    <i>continue to provide valuable services to their community. This<br /></i>
                    <i>approach ensures the sustainability of our efforts and a brighter<br /></i>
                    <i>future for the women and families we serve.<br /><br /></i>
                </p>
            </div>
            <div className='program-card'>
                <h2 className='program-title'>Program Highlights</h2>
                <div className='program-image-container'>
                    <img
                        src="images/program training images.jpg" 
                        alt="Tailoring Training"
                        className="program-image"
                    />
                </div>
                <p className='program-description'>
                    Training in tailoring and other skills to generate income and provide sustainable livelihoods.
                </p>
            </div>
            <img src='images/CultivatingChange.png' alt='CultivatingChange' className='Cultivating-Change-photo' />
            <div className='key-initiatives'>
                <h1>Key Initiatives:</h1>
                <p className='Training and Capacity Building'>
                    <h2>Training and Capacity Building : </h2>
                    <i>We provide comprehensive training in sustainable farming techniques, including organic farming, crop diversification, and water</i><br />
                    <i>conservation methods. This empowers women with the skills needed to increase agricultural productivity while minimizing</i><br />
                    <i>environmental impact.</i><br />
                </p>
                <p className='Leadership Development'>
                    <h2>Leadership Development : </h2>
                    <i>Through leadership development programs, we empower women to take active roles in decision-making processes related to</i><br />
                    <i>agriculture and community development. They are encouraged to become advocates for sustainable practices and agents of</i><br />
                    <i>positive change.</i><br />
                </p>
                <p className='Income Generation'>
                    <h2>Income Generation : </h2>
                    <i>We facilitate access to markets and provide support for value-addition activities such as processing and packaging of agricultural</i><br />
                    <i>products. This enables women farmers to increase their income and gain financial independence.</i><br />
                </p>
                <p className='Community Engagement'>
                    <h2>Community Engagement : </h2>
                    <i>Women trained by Tanmay Development Foundation serve as community leaders, organizing awareness campaigns on</i><br />
                    <i>sustainable agriculture and environmental conservation. They also foster community cohesion and support other women in</i><br />
                    <i>adopting best practices.</i><br />
                </p>
                <p className='Impact and Sustainability'>
                    <h2>Impact and Sustainability : </h2>
                    <i>Our programs are designed not only to uplift individual women farmers but also to create ripple effects that benefit entire</i><br />
                    <i>communities. By investing in women's empowerment, we ensure that our initiatives are sustainable and contribute to the overall</i><br />
                    <i>socio-economic development of the region.</i><br />
                </p>
                <p className='Future Directions'>
                    <h2>Future Directions : </h2>
                    <i>Looking ahead, Tanmay Development Foundation remains committed to expanding its reach and impact across Uttar Pradesh.</i><br />
                    <i>We aim to deepen our engagement with more women farmers, strengthen their capacities, and promote inclusive growth</i><br />
                    <i>through sustainable agriculture practices.</i><br />
                </p>
                <p className='Our Approach'>
                    <h2>Our Approach : </h2>
                    <i>At Tanmay Development Foundation, we believe in empowering local women as agents of change within their communities. By </i><br />
                    <i>harnessing their deep-rooted knowledge and understanding of local dynamics, these women are pivotal in implementing our</i><br />
                    <i>programs effectively.</i><br />
                </p>
            </div>
           <Footer/>
        </div>
    );
}

export default WomenEmpowerment;