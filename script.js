function changeImageColor(color) {
    const productImage = document.getElementById('productImage');
    productImage.style.filter = `hue-rotate(${getColorRotationValue(color)})`;
  }
  
  function getColorRotationValue(color) {
    switch (color) {
      case 'red':
        return '0deg';
      case 'brown':
        return '45deg';
      case 'Green':
        return '90deg';
      case 'light green':
        return '135deg';
      case 'black':
        return '180deg';
      case '#8B4513':
        return '90deg'; // Valor de rotación de tono para marrón
      default:
        return '0deg';
    }
  }
  