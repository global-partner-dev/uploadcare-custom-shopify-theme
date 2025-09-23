/**
 * Photo Upload Cart Integration
 * Handles cart updates with photo URLs stored in line item properties
 */

class PhotoUploadCart {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Listen for form submission
    document.addEventListener('submit', (e) => {
      if (e.target.matches('[data-type="add-to-cart-form"]')) {
        this.handleFormSubmission(e);
      }
    });

    // Listen for cart updates
    document.addEventListener('cart:updated', (e) => {
      this.handleCartUpdate(e);
    });
  }

  handleFormSubmission(e) {
    const form = e.target;
    const photoUrls = this.getPhotoUrls();
    
    if (photoUrls.length === 9 || photoUrls.length === 1) {
      // Add photo URLs to form data
      this.addPhotoUrlsToForm(form, photoUrls);
    } else {
      e.preventDefault();
      // alert('Please upload exactly 9 photos before adding to cart.');
      return false;
    }
  }

  getPhotoUrls() {
    // Get photos from the photo upload manager
    if (window.photoUploadManager) {
      return window.photoUploadManager.getUploadedPhotos();
    }
    return [];
  }

  addPhotoUrlsToForm(form, photoUrls) {
    // Remove existing photo URL inputs
    const existingInputs = form.querySelectorAll('input[name^="properties[Photo"], input[name^="properties[Audio"]');
    existingInputs.forEach(input => input.remove());

    // Add new photo URL inputs
    photoUrls.forEach((photo, index) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      // Check if this is for NFT chip (audio) or other products (photos)
      const isAudio = window.location.pathname.includes('nft-chip') || 
                     document.querySelector('h1')?.textContent?.includes('NFT chip');
      const prefix = isAudio ? 'Audio' : 'Photo';
      input.name = `properties[${prefix} ${index + 1} URL]`;
      input.value = photo.url;
      form.appendChild(input);
    });

    // Add summary input
    const summaryInput = document.createElement('input');
    summaryInput.type = 'hidden';
    const isAudio = window.location.pathname.includes('nft-chip') || 
                   document.querySelector('h1')?.textContent?.includes('NFT chip');
    const summaryKey = isAudio ? 'Audio URLs Summary' : 'Photo URLs Summary';
    const uploadDateKey = isAudio ? 'Audio Upload Date' : 'Photo Upload Date';
    summaryInput.name = `properties[${summaryKey}]`;
    summaryInput.value = photoUrls.map(photo => photo.url).join(', ');
    form.appendChild(summaryInput);

    // Add metadata
    const metadataInput = document.createElement('input');
    metadataInput.type = 'hidden';
    metadataInput.name = `properties[${uploadDateKey}]`;
    metadataInput.value = new Date().toISOString();
    form.appendChild(metadataInput);
  }

  handleCartUpdate(e) {
    console.log('Cart updated with photo URLs:', e.detail);
    
    // Show success message or redirect
    setTimeout(() => {
      this.showSuccessMessage();
    }, 500);
  }

  showSuccessMessage() {
    // This will be handled by the post-add modal
    console.log('Photos successfully added to cart');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (!window.photoUploadCart) {
    window.photoUploadCart = new PhotoUploadCart();
  }
});
