import { useState, useEffect } from "react";
import styles from "./PhotoGallery.module.css";

function useSmallScreen() {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall;
}

type PhotoGalleryProps = {
  photos: string[];
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const isSmallScreen = useSmallScreen();

  const mainPhoto = photos[0];
  const sideCount = isSmallScreen ? 2 : 4;
  const sidePhotos = photos.slice(1, sideCount + 1);

  const openModal = (idx: number) => {
    setSelected(idx);
    setModalOpen(true);
  };

  return (
    <>
      <div className={styles.galleryContainer}>
        <div className={styles.mainPhoto}>
          <img
            src={mainPhoto}
            alt="Foto principal"
            onClick={() => openModal(0)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.sideGrid}>
          {sidePhotos.map((photo, idx) => (
            <div key={idx} className={styles.sidePhoto}>
              <img
                src={photo}
                alt={`Foto ${idx + 2}`}
                onClick={() => openModal(idx + 1)}
                style={{ cursor: "pointer" }}
              />
              {/* Mostra o botão só na última foto lateral */}
              {idx === sidePhotos.length - 1 && (
                <button
                  className={styles.overlayBtn}
                  onClick={() => openModal(idx + 1)}
                  type="button"
                >
                  Visualizar Fotos
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={e => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setModalOpen(false)}
              aria-label="Fechar galeria"
            >
              ×
            </button>
            <img
              src={photos[selected]}
              alt={`Foto ${selected + 1}`}
              className={styles.modalMainImage}
            />
            <div className={styles.modalThumbs}>
              {photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={photo}
                  className={
                    styles.modalThumb +
                    (selected === idx ? " " + styles.selected : "")
                  }
                  alt={`Miniatura ${idx + 1}`}
                  onClick={() => setSelected(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
