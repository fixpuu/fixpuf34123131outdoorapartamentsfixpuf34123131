import { Star, MapPin, Wifi, Car, Snowflake, CigaretteOff, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { APT } from "@/constants/testIds";
import { ApartmentGallery } from "@/components/ApartmentGallery";

const AMENITY_META = {
  wifi_free: { icon: Wifi, label: "Wifi gratuito" },
  parking_free: { icon: Car, label: "Parcheggio" },
  ski_in_ski_out: { icon: Snowflake, label: "Sci ai piedi" },
  non_smoking: { icon: CigaretteOff, label: "Non fumatori" },
  family_rooms: { icon: Users, label: "Camere familiari" },
};

export const ApartmentCard = ({ apartment, index = 0 }) => {
  const {
    id,
    name,
    short_location,
    rating,
    reviews_count,
    amenities,
    image,
    gallery,
  } = apartment;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group"
      data-testid={APT.card(id)}
    >
      <Link to={`/appartamenti/${id}`} className="block">
        <div className="relative aspect-[4/5]">
          <ApartmentGallery images={gallery?.length ? gallery : [image]} name={name} className="h-full w-full" />
          {rating > 0 && (
            <div className="absolute top-5 left-5 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5">
              <Star size={12} className="text-[#5F8F76] fill-[#5F8F76]" />
              <span className="text-xs text-white font-medium">{rating.toFixed(1)}</span>
              {reviews_count > 0 && (
                <span className="text-[10px] text-white/60">({reviews_count})</span>
              )}
            </div>
          )}
          {apartment.cin && (
            <div className="absolute top-5 right-5 bg-black/70 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-white/80 border border-white/10">
              CIN: {apartment.cin}
            </div>
          )}
        </div>

        <div className="pt-6 pb-2">
          <div className="flex items-center gap-2 text-white/50 mb-2">
            <MapPin size={12} />
            <span className="text-[10px] uppercase tracking-[0.22em]">
              {short_location}
            </span>
          </div>
          <h3 className="font-serif-display text-2xl md:text-3xl text-white group-hover:text-[#B7CFC0] transition-colors duration-500">
            {name}
          </h3>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {amenities.slice(0, 4).map((a) => {
              const meta = AMENITY_META[a];
              if (!meta) return null;
              const Icon = meta.icon;
              return (
                <div key={a} className="flex items-center gap-2 text-white/50 text-xs">
                  <Icon size={13} />
                  <span>{meta.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ApartmentCard;
