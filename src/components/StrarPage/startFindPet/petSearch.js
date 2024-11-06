import React from "react";
import PropTypes from "prop-types";
import { FaShoppingCart, FaRegistered, FaWhatsapp } from "react-icons/fa";
import "./PetCard.css"; // Ensure you have appropriate styles

function PetCard({ data }) {
  if (!data) {
    return null; // Or a fallback UI
  }

  // Optional: Mapping for 'type' and 'raza' if they represent IDs
  // const typeMapping = {
  //   "10": "Canino",
  //   // Add other mappings as needed
  // };

  // const razaMapping = {
  //   "2": "Golden Retriever",
  //   // Add other mappings as needed
  // };
  console.log(data);

  return (
    <div className="pet-card">
      <h2 className="dni">DNI RUMP: {data.dni || "N/A"}</h2>
      <div className="pet-image-container">
        <img
          src={data.pet_image || "https://via.placeholder.com/150"}
          alt={`Imagen de ${data.f_name}`}
          className="pet-image"
        />
      </div>
      <div className="pet-info">
        <p>
          <strong>Nombres de la mascota:</strong> <p>{data.f_name || "N/A"}</p>
        </p>
        <p>
          <strong>Apellidos de la mascota:</strong>{" "}
          <p>{data.l_name || "N/A"}</p>
        </p>
        <p>
          <strong>SEXO:</strong> <p>{data.sex || "N/A"}</p>
        </p>
        <p>
          <strong>Calificación:</strong> <p>{data.qualified || "N/A"}</p>
        </p>
        <p>
          <strong>Especie:</strong> <p>{data.especie || "N/A"}</p>
        </p>
        <p>
          <strong>RAZA:</strong> <p>{data.raza || "N/A"}</p>
        </p>
        <p>
          <strong>Tamaño:</strong> <p>{data.size || "N/A"}</p>
        </p>
        <p>
          <strong>Color del Pelo:</strong> <p>{data.coat_color || "N/A"}</p>
        </p>
        <p>
          <strong>Dirección:</strong> <p>{data.address || "N/A"}</p>
        </p>
        {/* Add more fields as necessary */}
      </div>
      <div className="action-icons">
        <FaShoppingCart className="icon" title="Comprar" />
        <FaRegistered className="icon" title="Registrado" />
        <FaWhatsapp className="icon" title="Contacto por WhatsApp" />
      </div>
    </div>
  );
}

PetCard.propTypes = {
  data: PropTypes.shape({
    dni: PropTypes.string,
    f_name: PropTypes.string,
    l_name: PropTypes.string,
    sex: PropTypes.string,
    qualified: PropTypes.string,
    especie: PropTypes.string,
    raza: PropTypes.string,
    size: PropTypes.string,
    coat_color: PropTypes.string,
    address: PropTypes.string,
    pet_image: PropTypes.string,
    // Add other fields as necessary
  }),
};

export default PetCard;
