import Image from "next/image";
import { motion } from "framer-motion";

interface ColumnProps {
  galleryImages: string[];
  y: import("framer-motion").MotionValue<number>;
}

const Column: React.FC<ColumnProps> = ({ galleryImages, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {galleryImages.map((src, i) => {
        return (
          <div key={i} className="imageContainer">
            <Image
              fill
              quality={50}
              priority={true}
              src={`/assets/gallery/${src}`}
              alt="Astrae gallery"
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;
