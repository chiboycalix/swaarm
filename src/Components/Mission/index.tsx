/** @format */

import React from 'react';
import YouTube from 'react-youtube';
import './styles.scss';
import { Button, Modal } from '../../Components';

interface LaunchPast {
  launch: {
    launch_date_local: string;
    mission_name: string;
    links: {
      video_link: string;
      article_link: string;
    };
    launch_site: {
      site_name_long: string;
    };
    rocket: {
      rocket_name: string;
    };
  };
}
const Mission = (props: LaunchPast) => {
  const [modal, setModal] = React.useState(false);

  const handleOpenModal = (): void => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="mission__wrapper">
      <YouTube
        videoId={props.launch.links.video_link.split('/')[3]}
        opts={{ height: '450', width: '100%' }}
      />

      <div className="mission__details">
        <div className="mission__details-header">
          <p>Mission Name: {props.launch.mission_name}</p>
          <div className="mission__details-overview">
            <h1>Overview</h1>
            <Button onClick={handleOpenModal} type="primary">
              Details
            </Button>
          </div>
        </div>
        <p>Mission Site: {props.launch.launch_site.site_name_long}</p>
        <div className="rows">
          <div className="mission__details-row">
            <div className="property">
              <p>Rocket Name</p>
            </div>
            <div className="value">
              <p>{props.launch.rocket.rocket_name}</p>
            </div>
          </div>

          <div className="mission__details-row">
            <div className="property">
              <p>Launch Date</p>
            </div>
            <div className="value">
              <p>{props?.launch?.launch_date_local}</p>
            </div>
          </div>

          <div className="mission__details-row">
            <div className="property">
              <p>Article Link</p>
            </div>
            <div className="value">
              {props?.launch?.links?.article_link ? (
                <a
                  href={props?.launch?.links?.article_link}
                  target="_blank"
                  rel="noreferrer">
                  link
                </a>
              ) : (
                <p>no article</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        handleCloseModal={handleCloseModal}
        modal={modal}
        setModal={setModal}>
        <div className="modal__content">
          <div className="launch__details">
            <div className="top__wrapper">
              <div className="video__section">
                <YouTube
                  videoId={props?.launch.links.video_link.split('/')[3]}
                  opts={{ height: '400', width: '100%' }}
                />
              </div>
              <div className="text__section">
                <p>Mission Site: {props.launch.launch_site.site_name_long}</p>
                <div className="rows">
                  <div className="mission__details-row">
                    <div className="property">
                      <p>Mission Name</p>
                    </div>
                    <div className="value">
                      <p>{props?.launch.mission_name}</p>
                    </div>
                  </div>

                  <div className="mission__details-row">
                    <div className="property">
                      <p>Rocket Name</p>
                    </div>
                    <div className="value">
                      <p>{props?.launch.rocket.rocket_name}</p>
                    </div>
                  </div>

                  <div className="mission__details-row">
                    <div className="property">
                      <p>Launch Date</p>
                    </div>
                    <div className="value">
                      <p>{props?.launch.launch_date_local}</p>
                    </div>
                  </div>

                  <div className="mission__details-row">
                    <div className="property">
                      <p>Article Link</p>
                    </div>
                    <div className="value">
                      {props?.launch.links?.article_link ? (
                        <a
                          href={props?.launch.links?.article_link}
                          target="_blank"
                          rel="noreferrer">
                          link
                        </a>
                      ) : (
                        <p>no article</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="botttom__wrapper"></div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Mission;
