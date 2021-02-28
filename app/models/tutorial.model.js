module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "products",
      mongoose.Schema(
        {
          item: String,
          qty: String
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };
  