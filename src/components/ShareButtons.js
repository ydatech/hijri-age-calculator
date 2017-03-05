/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
    ShareButtons,
    generateShareIcon,
} from 'react-share';
import './ShareButtons.css'
import exampleImage from '../share-preview.jpg'
const {
  FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
} = ShareButtons;



const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');

const Share = (props) => {

    const shareUrl = window.location.href;
    const title = 'Hijri Age Calculator';

    return (
        <div className="Share__container">
            <div className="Share__some-network">
                <FacebookShareButton
                    url={shareUrl}
                    title={title}
                    picture={`https://hijri-age-calculator.firebaseapp.com/${exampleImage}`}
                    className="Share__some-network__share-button">
                    <FacebookIcon
                        size={32}
                        round />
                </FacebookShareButton>


            </div>

            <div className="Share__some-network">
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="Share__some-network__share-button">
                    <TwitterIcon
                        size={32}
                        round />
                </TwitterShareButton>


            </div>

            <div className="Share__some-network">
                <TelegramShareButton
                    url={shareUrl}
                    title={title}
                    className="Share__some-network__share-button">
                    <TelegramIcon size={32} round />
                </TelegramShareButton>


            </div>

            <div className="Share__some-network">
                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="Share__some-network__share-button">
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>

            <div className="Share__some-network">
                <GooglePlusShareButton
                    url={shareUrl}
                    className="Share__some-network__share-button">
                    <GooglePlusIcon
                        size={32}
                        round />
                </GooglePlusShareButton>
            </div>

            <div className="Share__some-network">
                <LinkedinShareButton
                    url={shareUrl}
                    title={title}
                    windowWidth={750}
                    windowHeight={600}
                    className="Share__some-network__share-button">
                    <LinkedinIcon
                        size={32}
                        round />
                </LinkedinShareButton>


            </div>

            <div className="Share__some-network">
                <PinterestShareButton
                    url={String(window.location)}
                    media={`https://hijri-age-calculator.firebaseapp.com/${exampleImage}`}
                    windowWidth={1000}
                    windowHeight={730}
                    className="Share__some-network__share-button">
                    <PinterestIcon size={32} round />
                </PinterestShareButton>

            </div>

            <div className="Share__some-network">
                <VKShareButton
                    url={shareUrl}
                    image={`https://hijri-age-calculator.firebaseapp.com/${exampleImage}`}
                    windowWidth={660}
                    windowHeight={460}
                    className="Share__some-network__share-button">
                    <VKIcon
                        size={32}
                        round />
                </VKShareButton>

            </div>
        </div>
    );
}


export default Share;