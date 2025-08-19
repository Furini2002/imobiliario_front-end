import { useState, useEffect } from "react";
import styles from "./PhotoGallery.module.css";

function useSmallScreen() {
  const [isSmall, setIsSmall] = useState(typeof window !== "undefined" ? window.innerWidth <= 900 : false);
  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isSmall;
}

type PhotoGalleryProps = {
  photos: string[];
  loading?: boolean;          // ⬅️ novo
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, loading }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const isSmallScreen = useSmallScreen();

  const hasPhotos = photos && photos.length > 0;
  const showSkeleton = loading || !hasPhotos;

  const mainPhoto = hasPhotos ? photos[0] : undefined;
  const sideCount = isSmallScreen ? 2 : 4;
  const sidePhotos = hasPhotos ? photos.slice(1, sideCount + 1) : [];

  const openModal = (idx: number) => {
    if (showSkeleton) return;
    setSelected(idx);
    setModalOpen(true);
  };

  return (
    <>
      <div className={styles.galleryContainer}>
        <div className={styles.mainPhoto}>
          {showSkeleton ? (
            <div className={styles.skelMain} aria-hidden />
          ) : (
            <img
              src={mainPhoto!}
              alt="Foto principal"
              onClick={() => openModal(0)}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        <div className={styles.sideGrid}>
          {showSkeleton
            ? Array.from({ length: sideCount }).map((_, idx) => (
                <div key={idx} className={styles.sidePhoto}>
                  <div className={styles.skelSide} aria-hidden />
                </div>
              ))
            : sidePhotos.map((photo, idx) => (
                <div key={idx} className={styles.sidePhoto}>
                  <img
                    src={photo}
                    alt={`Foto ${idx + 2}`}
                    onClick={() => openModal(idx + 1)}
                    style={{ cursor: "pointer" }}
                  />
                  {/* botão só na última */}
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

      {!showSkeleton && modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
                    styles.modalThumb + (selected === idx ? " " + styles.selected : "")
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
