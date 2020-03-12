const mongoose = require('mongoose')

const ConfeccaoSchema = new mongoose.Schema({
  titulo: String,
  publico: String,
  quantidade: String,
  // Peças, Kr, Metros
  medida: String,
  preco: Number,
  userId: String,
  adsTipo: String,
  categoria: String,
  subcategoria: String,
  tamanho: String,
  cor: String,
  
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Confeccao', ConfeccaoSchema)