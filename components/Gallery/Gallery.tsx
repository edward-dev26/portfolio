import { useState } from 'react';
import styles from './Gallery.module.scss';
import plus from '../../public/plus.svg';
import cbpSprite from '../../public/cbpSprite.png';

import Image from 'next/image';

type PropsType = {
  images: Array<string | StaticImageData>;
};

const Gallery: React.FC<PropsType> = ({ images }) => {
  const [viewMode, setViewMode] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const enableViewMode = () => {
    setViewMode(true);
    document.body.classList.add('no-scroll');
  };

  const disableViewMode = () => {
    setViewMode(false);
    document.body.classList.remove('no-scroll');
  };

  const nextImage = () => {
    setCurrentImageIndex((index) => (images[index + 1] ? index + 1 : 0));
  };

  const prevImage = () => {
    setCurrentImageIndex((index) =>
      index - 1 < 0 ? images.length - 1 : index - 1
    );
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.mainPhoto} onClick={enableViewMode}>
        <div className={styles.blur}>
          <Image src={plus} alt="Plus" width={34} height={34} />
        </div>
        <Image
          src={images[0]}
          alt="Photo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      {viewMode && (
        <div className={styles.view}>
          <div className={styles.view__image}>
            <Image
              src={images[currentImageIndex] || images[0]}
              alt="Photo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className={styles.view__close}>
            <Image
              src={cbpSprite}
              alt="Close"
              layout="fixed"
              objectPosition="-92px"
              onClick={disableViewMode}
              priority
            />
          </div>
          {images.length > 1 && (
            <>
              <div className={styles.view__prev} onClick={prevImage}>
                <Image
                  src={cbpSprite}
                  alt="Prev"
                  layout="fixed"
                  objectPosition="0"
                  priority
                />
              </div>
              <div className={styles.view__next} onClick={nextImage}>
                <Image
                  src={cbpSprite}
                  alt="Next"
                  layout="fixed"
                  objectPosition="-46px"
                  priority
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
