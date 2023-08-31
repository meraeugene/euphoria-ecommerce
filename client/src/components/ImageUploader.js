import React, { useState } from "react";

const ImageUploader = ({ imageId }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    }
  };

  const parentDivStyle = {
    backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <label htmlFor={`image${imageId}`}>
      <input
        type="file"
        accept="image/*"
        id={`image${imageId}`}
        className="hidden"
        onChange={handleImageUpload}
      />
      <div
        className={`w-full h-full rounded-lg bg-transparent flex items-center justify-center flex-col gap-2 px-4 text-center ${
          selectedImage ? "" : "border-dashed border-[#bbb5ff] border"
        }`}
        style={parentDivStyle}
      >
        <img
          src="/images/dashboard/image.png"
          alt="image logo"
          className={selectedImage ? "invisible" : ""}
        />
        <p className={`text-xs ${selectedImage ? "invisible" : ""}`}>
          Drop your images here, or select{" "}
          <span className="text-[#003171] font-medium">click to browse</span>
        </p>
      </div>
    </label>
  );
};

export default ImageUploader;
