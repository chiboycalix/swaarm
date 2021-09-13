/** @format */

import React from "react";
import { useQuery } from "@apollo/client";
import YouTube from "react-youtube";
import MultiSelect from "@kenshooui/react-multi-select";
import { FETCH_LAUNCHES_PAST } from "../../Queries";
import { Modal, Loader, Button } from "../../Components";
import "./styles.scss";

const CompareLaunches: React.FC = () => {
  const [selectedItems, setSelectedRecords]: any[] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [compareBtn, showCompareBtn] = React.useState(false);

  const { data, loading } = useQuery(FETCH_LAUNCHES_PAST, {
    variables: { limit: 50, offset: 0 },
  });

  const handleChange = (selectedRecords: any) => {
    setSelectedRecords(selectedRecords);
    if (selectedRecords.length === 2) {
      // setModal(true);
      showCompareBtn(true);
    } else {
      showCompareBtn(false);
    }
  };

  const handleShowModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRecords([]);
  };

  const dataMap = data?.launchesPast?.map(
    (d: { mission_name: string }, idx: number) => {
      return {
        ...d,
        id: idx,
        label: d.mission_name,
      };
    }
  );

  return (
    <div className="compare__wrapper">
      <div className="compareBtn__wrapper">
        {compareBtn ? (
          <Button type="secondary" onClick={handleShowModal}>
            Compare
          </Button>
        ) : null}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <MultiSelect
          items={dataMap}
          onChange={handleChange}
          maxSelectedItems={2}
          loading={loading}
          responsiveHeight={700}
        />
      )}

      <Modal
        handleCloseModal={handleCloseModal}
        modal={modal}
        setModal={setModal}
      >
        <div className="modal__content">
          <div className="first__selected-mission">
            <div className="top__wrapper">
              <div className="video__section">
                <YouTube
                  videoId={selectedItems[0]?.links.video_link.split("/")[3]}
                  opts={{ height: "370", width: "550" }}
                />
              </div>
              <div className="text__section">
                <div className="rows">
                  <div className="mission__details-row">
                    <div className="property">
                      <p>Mission Name</p>
                    </div>
                    <div className="value">
                      <p>{selectedItems[0]?.mission_name}</p>
                    </div>
                  </div>

                  <div className="mission__details-row">
                    <div className="property">
                      <p>Rocket Name</p>
                    </div>
                    <div className="value">
                      <p>{selectedItems[0]?.rocket.rocket_name}</p>
                    </div>
                  </div>

                  <div className="mission__details-row">
                    <div className="property">
                      <p>Launch Date</p>
                    </div>
                    <div className="value">
                      <p>{selectedItems[0]?.launch_date_local}</p>
                    </div>
                  </div>

                  <div className="mission__details-row">
                    <div className="property">
                      <p>Article Link</p>
                    </div>
                    <div className="value">
                      {selectedItems[0]?.links?.article_link ? (
                        <a
                          href={selectedItems[0]?.links?.article_link}
                          target="_blank"
                          rel="noreferrer"
                        >
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
            <div className="bottom__section">
              <div className="top__wrapper">
                <div className="video__section">
                  <YouTube
                    videoId={selectedItems[1]?.links.video_link.split("/")[3]}
                    opts={{ height: "370", width: "550" }}
                  />
                </div>
                <div className="text__section">
                  <div className="rows">
                    <div className="mission__details-row">
                      <div className="property">
                        <p>Mission Name</p>
                      </div>
                      <div className="value">
                        <p>{selectedItems[1]?.mission_name}</p>
                      </div>
                    </div>
                    <div className="mission__details-row">
                      <div className="property">
                        <p>Rocket Name</p>
                      </div>
                      <div className="value">
                        <p>{selectedItems[1]?.rocket.rocket_name}</p>
                      </div>
                    </div>

                    <div className="mission__details-row">
                      <div className="property">
                        <p>Launch Date</p>
                      </div>
                      <div className="value">
                        <p>{selectedItems[1]?.launch_date_local}</p>
                      </div>
                    </div>

                    <div className="mission__details-row">
                      <div className="property">
                        <p>Article Link</p>
                      </div>
                      <div className="value">
                        {selectedItems[1]?.links?.article_link ? (
                          <a
                            href={selectedItems[1]?.links?.article_link}
                            target="_blank"
                            rel="noreferrer"
                          >
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
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CompareLaunches;
