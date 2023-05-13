import type { NextComponentType } from "next";

import {
    BsLinkedin,
    MdEmail,
    AiOutlineGithub,
    AiOutlineTwitter,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
    return (
        <div className="font-sen px-3" id="contact">
            <p className="text-3xl font-bold text-white">Get in touch</p>

            <div className="my-8 flex flex-row justify-center gap-x-4">
                <Icon
                    icon={<AiOutlineGithub />}
                    url="https://github.com/sa4dus"
                />

                <Icon
                    icon={<AiOutlineTwitter />}
                    url="https://twitter.com/_dmmarce27"
                />
                <Icon
                    icon={<BsLinkedin />}
                    url="https://www.linkedin.com/in/marcelo-atanasio-dom%C3%ADnguez-mateo-b0b282203/"
                />

                <Icon icon={<MdEmail />} url="mailto:dmmarcelo27@gmail.com" />
            </div>
        </div>
    );
};

export default Contact;
