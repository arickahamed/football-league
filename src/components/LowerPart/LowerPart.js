import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './LowerPart.css';

const LowerPart = () => {
    return (
        <div className="lower-part">
            <div className="para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis ut veniam aspernatur quae sapiente illum dolorem dolore unde fugit vero assumenda sint, impedit ducimus, mollitia iusto voluptatibus facilis, tenetur voluptates suscipit. Magni, totam corrupti! Fuga soluta consectetur saepe, hic rem vero pariatur mollitia, nesciunt amet reiciendis error! Voluptatibus quis temporibus commodi, exercitationem doloribus quos. Nostrum accusamus vel voluptatem? Quisquam odit architecto laudantium nostrum possimus iusto reprehenderit, ullam incidunt perferendis dolore neque, deserunt omnis sint corrupti est ea expedita labore?</p>
                <p>Maxime expedita aut consequatur dicta temporibus dolorem numquam, delectus impedit nulla et maiores architecto porro id quaerat nam quia pariatur totam ab earum deleniti sapiente iusto vero, ad quis? Optio, obcaecati! Quaerat praesentium pariatur at exercitationem voluptates officiis minus debitis enim. Nostrum, nesciunt! Cumque fuga illum adipisci explicabo ratione ipsa animi! Sit, eaque. Beatae delectus tenetur officiis vero maiores. Dolorum illo deserunt commodi ab, reprehenderit modi dolores blanditiis minus eum! Odio, tempora. Dolore quo vel dolores obcaecati praesentium eius aliquid.</p>
            </div>
            <div className="social-link">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon className="twitter" icon={faTwitter}/>
                <FontAwesomeIcon icon={faYoutube}/>
            </div>
        </div>
    );
};

export default LowerPart;