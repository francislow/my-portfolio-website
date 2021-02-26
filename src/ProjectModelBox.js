import React, { useState } from 'react';

import * as projectsData from './projectsData.json';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import appstore_badge from './images/appstore_badge.png'

function ProjectModelBox(props) {
  // All images (load all images here to solve the require() problem as static paths are required)
  const projectImgsHolder = {
    poofers: [
      { id: 1, url: require('./images/pooferitem.png') },
      { id: 2, url: require('./images/poofer-img-1.png') },
      { id: 3, url: require('./images/poofer-img-2.png') },
      { id: 4, url: require('./images/poofer-img-3.png') },
      { id: 5, url: require('./images/poofer-img-4.png') }
    ],
    unmix: [
      { id: 6, url: require('./images/unmixitem.png') },
      { id: 7, url: require('./images/unmix-img-1.png') },
      { id: 8, url: require('./images/unmix-img-2.png') },
      { id: 9, url: require('./images/unmix-img-3.png') }
    ],
    emailyy: [
      { id: 11, url: require('./images/emailyy-img-1.png') },
      { id: 12, url: require('./images/emailyy-img-2.png') },
      { id: 13, url: require('./images/emailyy-img-3.png') },
      { id: 14, url: require('./images/emailyy-img-4.png') },
      { id: 15, url: require('./images/emailyy-img-5.png') },
      { id: 16, url: require('./images/emailyy-img-6.png') },
    ],
    assemble: [
      { id: 17, url: require('./images/assemble-img-1.png') },
      { id: 18, url: require('./images/assemble-img-2.png') },
      { id: 19, url: require('./images/assemble-img-3.png') },
      { id: 20, url: require('./images/assemble-img-4.png') },
      { id: 21, url: require('./images/assemble-img-5.png') },
      { id: 22, url: require('./images/assemble-img-6.png') },
      { id: 23, url: require('./images/assemble-img-7.png') },
      { id: 24, url: require('./images/assemble-img-8.png') },
      { id: 25, url: require('./images/assemble-img-9.png') },
      { id: 26, url: require('./images/assemble-img-10.png') },
    ]
  };

  const keyID = props.keyID;
  const projectName = projectsData.default[keyID].projectName;
  const projectDesc = projectsData.default[keyID].projectDesc;
  const sourceCodeLink = projectsData.default[keyID].sourceCodeLink;
  const projectTools = projectsData.default[keyID].devTools;
  const playstoreUrl = projectsData.default[keyID].playstoreUrl;
  const appstoreUrl = projectsData.default[keyID].appstoreUrl;
  const weburl = projectsData.default[keyID].weburl;
  const projectImgs = projectImgsHolder[keyID];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function setNextImg() {
    let newIndex =
      currentImgIndex === projectImgs.length - 1 ? 0 : currentImgIndex + 1;
    setCurrentImgIndex(newIndex);
  }

  function setPrevImg() {
    let newIndex =
      currentImgIndex === 0 ? projectImgs.length - 1 : currentImgIndex - 1;
    setCurrentImgIndex(newIndex);
  }

  const devtoolComponents = projectTools.map(tool => {
    return <div>{tool}</div>;
  });

  return (
    // Model content
    <div className={`wrapper-project-model ${props.visibility}`}>
      <div className='content'>
        <div className='flex-1'>
          <TransitionGroup>
            <CSSTransition
              key={projectImgs[currentImgIndex].id}
              timeout={400}
              classNames='fade'>
              <img
                className='display-img'
                src={projectImgs[currentImgIndex].url}
                alt='projectimg'
              />
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className='flex-2'>
          <img
            onClick={setPrevImg}
            className='left-arrow'
            src={require('./images/leftarrow.png')}
          />
          <div>{currentImgIndex + 1}</div>
          <img
            onClick={setNextImg}
            className='right-arrow'
            src={require('./images/rightarrow.png')}
          />
        </div>
        <div className='flex-3'>
          <div>{projectName}</div>
        </div>
        <div className='flex-4'>
          <p>{projectDesc}</p>
        </div>
        {playstoreUrl ? (
          <div className='flex-6'>
            <a target='_blank' rel='noopener noreferrer' href={playstoreUrl}>
              <img
                style={{height: "100%"}}
                alt='Get it on Google Play Store'
                src='https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png'
              />
            </a>
          </div>
        ) : null}
        {appstoreUrl ? (
          <div className='flex-6' style={{marginTop: "7px", marginBottom: "5px"}}>
            <a target='_blank' rel='noopener noreferrer' href={appstoreUrl}>
              <img
                style={{height: "100%"}}
                alt='Get it on the App Store'
                src={appstore_badge}
              />
            </a>
          </div>
        ) : null}
        <div className='flex-5'>
          <div className='wrapper-dev-tools'>{devtoolComponents}</div>
        </div>
        <div className='flex-7'>
          <div className="links-container">

            {sourceCodeLink ? (
              <div>
                <a target='_blank' rel='noopener noreferrer' href={sourceCodeLink}>
                  Source Code
                </a>
              </div>
            ) : null}
            {weburl ? (
              <div class="visit">
                <a target='_blank' rel='noopener noreferrer' href={weburl}>
                  Visit
                </a>
              </div>
            ) : null}
          </div>
          <span
            onClick={() => props.setVisibility('invisible')}
            className='close-btn'>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectModelBox;
